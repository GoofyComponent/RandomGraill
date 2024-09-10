import { useMutation } from '@tanstack/react-query';

import { Button } from '@/components/ui/button.tsx';
import { Loader } from '@/components/ui/loader.tsx';
import { signInWithGoogle } from '@/lib/firebase.ts';

import GoogleIcon from '../../public/icons/google.svg'; // Ajoute un fichier SVG de Google dans ton dossier public/icons

export const GoogleLoginButton = () => {
  const mutation = useMutation({
    mutationFn: async () => signInWithGoogle(),
  });

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        mutation.mutate();
      }}
      disabled={mutation.isPending}
      className="flex items-center justify-center gap-2"
    >
      {mutation.isPending ? (
        <Loader className="mr-2" size={12} />
      ) : (
        <img src={GoogleIcon} alt="Google Logo" className="mr-2 h-4 w-4" />
      )}
      Se connecter
    </Button>
  );
};
