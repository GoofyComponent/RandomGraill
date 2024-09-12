import React, { useCallback, useEffect, useRef, useState } from 'react';

import styles from './wheel.module.css';

interface WheelProps {
  items: string[];
  colors?: string[];
  wheelBorderColor?: string;
  borderSize?: number;
  textColor?: string;
  needleColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  buttonBorderColor?: string;
  buttonLabel?: string;
  autoSpin?: boolean;
  hideButton?: boolean;
  buttonSize?: string;
  buttonTextSize?: string;
  onResult?: (result: string) => void;
  textStroke?: boolean; // Nouveau booléen pour activer/désactiver le stroke
  textStrokeColor?: string; // Couleur du stroke
  textStrokeWidth?: number; // Taille du stroke
}

/**
 * Composant de la roue de la fortune
 *
 * @param items Liste des éléments affichés dans les segments de la roue.
 * @param colors Liste des couleurs pour chaque segment de la roue (optionnelle).
 * @param wheelBorderColor Couleur de la bordure des segments de la roue (optionnelle, par défaut 'black').
 * @param borderSize Taille de la bordure des segments (optionnelle, par défaut 4).
 * @param textColor Couleur du texte dans les segments de la roue (optionnelle, par défaut '#fff').
 *
 * @param needleColor Couleur de l'aiguille pour indiquer le résultat (optionnelle, par défaut 'red').
 *
 * @param buttonColor Couleur du bouton pour lancer la roue (optionnelle, par défaut 'black').
 * @param buttonTextColor Couleur du texte dans le bouton (optionnelle, par défaut '#fff').
 * @param buttonBorderColor Couleur de la bordure du bouton (optionnelle, par défaut 'black').
 * @param buttonLabel Texte affiché dans le bouton pour lancer la roue (optionnelle, par défaut 'Spin').
 *
 * @param autoSpin Permet de lancer automatiquement la roue si true (optionnelle, par défaut false).
 * @param hideButton Cache le bouton si true (optionnelle, par défaut false).
 *
 * @param buttonSize Taille du bouton (optionnelle, par défaut '50px').
 * @param buttonTextSize Taille du texte dans le bouton (optionnelle, par défaut '16px').
 *
 * @param textStroke Active ou désactive le stroke du texte (optionnelle, par défaut true).
 * @param textStrokeColor Couleur du stroke du texte (optionnelle, par défaut 'black').
 * @param textStrokeWidth Taille du stroke du texte (optionnelle, par défaut 3).
 *
 * @param onResult Fonction appelée une fois que la roue s'arrête avec le résultat sélectionné (optionnelle).
 *
 * @example
 * ```tsx
 * <Wheel
 *  items={['Item 1', 'Item 2', 'Item 3']}
 *  colors={['#ff0000', '#00ff00']}
 *  buttonColor="#00f"
 *  buttonTextColor="#fff"
 *  buttonBorderColor="#000"
 *  needleColor="#f00"
 *  onResult={(result) => handleResult(result)}
 * />
 * ```
 */
export const Wheel: React.FC<WheelProps> = ({
  items,
  colors = [],
  wheelBorderColor = 'black',
  borderSize = 4,
  textColor = '#fff',
  needleColor = 'red',
  buttonColor = 'black',
  buttonTextColor = '#fff',
  buttonBorderColor = 'black',
  buttonLabel = 'Spin',
  autoSpin = false,
  hideButton = false,
  buttonSize = '50px',
  buttonTextSize = '16px',
  textStroke = true,
  textStrokeColor = 'black',
  textStrokeWidth = 3,
  onResult,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rotation, setRotation] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const numItems: number = items.length;
  const anglePerItem: number = (2 * Math.PI) / numItems;
  const resolutionMultiplier: number = 2;

  const setCanvasSize = (canvas: HTMLCanvasElement): number => {
    const parent = canvas.parentElement;
    if (!parent) return 0;

    const parentWidth = parent.clientWidth;
    const parentHeight = parent.clientHeight;
    const size = Math.min(parentWidth, parentHeight);
    const realSize = size * resolutionMultiplier;

    canvas.width = realSize;
    canvas.height = realSize;
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    return realSize;
  };

  const truncateText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    fontSize: number,
    radius: number,
  ): string => {
    ctx.font = `${fontSize}px Poppins`; // Définit la police et la taille de la police
    const maxWidth = radius * 0.5; // Ajuste la largeur maximale à 50% du rayon pour plus de place

    let truncatedText = text;
    if (ctx.measureText(text).width > maxWidth) {
      const visibleChars = Math.floor(
        (maxWidth / ctx.measureText(text).width) * text.length,
      );
      truncatedText = text.slice(0, visibleChars); // Affiche plus de caractères avant la troncature
      truncatedText += '...'; // Ajoute "..." à la fin du texte tronqué
    }
    return truncatedText;
  };

  const drawText = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      radius: number,
      startAngle: number,
      item: string,
    ): void => {
      const fontSize = radius * 0.08; // Taille de la police en fonction du rayon
      const truncatedItem = truncateText(ctx, item, fontSize, radius); // Tronque le texte si nécessaire

      ctx.save();
      ctx.translate(radius, radius);
      ctx.rotate(startAngle + anglePerItem / 2);

      ctx.textAlign = 'center'; // Centre le texte horizontalement
      ctx.fillStyle = textColor;
      ctx.font = `${fontSize}px Poppins`;

      const textX = radius * 0.6; // Ajuste la position du texte à 60% du rayon
      const textY = 10; // Garde la hauteur constante

      if (textStroke) {
        ctx.strokeStyle = textStrokeColor;
        ctx.lineWidth = textStrokeWidth;
        ctx.strokeText(truncatedItem, textX, textY); // Dessine le contour du texte seulement si stroke est activé
      }

      ctx.fillText(truncatedItem, textX, textY); // Dessine le texte rempli
      ctx.restore();
    },
    [anglePerItem, textColor, textStroke, textStrokeColor, textStrokeWidth],
  );

  const drawSegment = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      radius: number,
      index: number,
      item: string,
    ): void => {
      const startAngle = index * anglePerItem + rotation;
      const endAngle = startAngle + anglePerItem;
      const color =
        colors.length > 0
          ? colors[index % colors.length]
          : `hsl(${(index * 360) / numItems}, 100%, 50%)`;

      ctx.fillStyle = color || 'black';
      ctx.beginPath();
      ctx.moveTo(radius, radius);
      ctx.arc(radius, radius, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = wheelBorderColor;
      ctx.lineWidth = borderSize;
      ctx.stroke();

      drawText(ctx, radius, startAngle, item);
    },
    [anglePerItem, rotation, colors, numItems, wheelBorderColor, borderSize, drawText],
  );

  const drawWheel = useCallback((): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const size = setCanvasSize(canvas);
    if (!ctx) return;

    const radius = size / 2;
    ctx.clearRect(0, 0, size, size);

    items.forEach((item: string, index: number) => {
      drawSegment(ctx, radius, index, item);
    });
  }, [items, drawSegment]);

  const spin = (): void => {
    if (isSpinning) return;
    setIsSpinning(true);

    const minSpins = 1;
    const maxSpins = 8;
    const randomSpins = Math.random() * (maxSpins - minSpins) + minSpins;
    const newRotation = rotation + randomSpins * 2 * Math.PI;

    const minDuration = 2000;
    const maxDuration = 6000;
    const randomDuration = Math.random() * (maxDuration - minDuration) + minDuration;

    animateSpin(newRotation, randomDuration);
  };

  const animateSpin = (newRotation: number, duration: number): void => {
    const startTime = Date.now();

    const animate = (): void => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easing = 1 - Math.pow(1 - progress, 3);

      setRotation(rotation + easing * (newRotation - rotation));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        finalizeSpin(newRotation);
      }
    };

    requestAnimationFrame(animate);
  };

  const finalizeSpin = (newRotation: number): void => {
    const finalRotation = newRotation % (2 * Math.PI);
    const correctedRotation = finalRotation + Math.PI / 2;
    let selectedIndex = Math.floor(
      (numItems - correctedRotation / anglePerItem) % numItems,
    );

    if (selectedIndex < 0) {
      selectedIndex += numItems;
    }

    const result = items[selectedIndex];

    setIsSpinning(false);

    if (onResult && result) {
      onResult(result);
    }
  };

  useEffect(() => {
    drawWheel();
  }, [rotation, items, colors, drawWheel]);

  useEffect(() => {
    if (autoSpin) {
      spin();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSpin]);

  return (
    <div className={styles.wheelContainer}>
      <div className={styles.needle} style={{ borderTop: `20px solid ${needleColor}` }} />
      <canvas ref={canvasRef} className={styles.canvas} />
      {!hideButton && (
        <button
          onClick={spin}
          className={styles.spinButton}
          style={{
            backgroundColor: buttonColor,
            color: buttonTextColor,
            borderColor: buttonBorderColor,
            borderWidth: '2px',
            borderStyle: 'solid',
            width: buttonSize,
            height: buttonSize,
            fontSize: buttonTextSize,
          }}
          disabled={isSpinning}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
};
