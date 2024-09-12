import { useLoaderData } from '@tanstack/react-router';
import { useState } from 'react';

import CardResto from '@/components/project/cardResto';
import Navbar from '@/components/project/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const NewWheelPage = () => {
  const { userData } = useLoaderData({ from: '/_auth' });

  const [formStep, setFormStep] = useState(1);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Navbar
        userName={userData.displayName}
        clickAvatarDirection="/account"
        userPhoto={userData.photoURL}
      />
      {formStep === 1 && (
        <StepOne
          onClick={() => setFormStep(2)}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}
      {formStep === 2 && <StepTwo />}
    </>
  );
};

const StepOne = ({
  onClick,
  inputValue,
  setInputValue,
}: {
  onClick: () => void;
  inputValue: string;
  setInputValue: (value: string) => void;
}) => {
  return (
    <div className="mx-4 flex h-screen flex-col items-center justify-center space-y-4">
      <Input
        placeholder="Type your wheel name"
        onClick={onClick}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button className="w-32" onClick={onClick}>
        Next
      </Button>
    </div>
  );
};

const StepTwo = () => {
  return (
    <div className="mx-4 flex h-screen flex-col justify-center space-y-4">
      <Input placeholder="Type your wheel name" />

      <div>
        <CardResto bgImage={''} name={''} distance={''} url={'dh'} clickable={false} />
      </div>
    </div>
  );
};
