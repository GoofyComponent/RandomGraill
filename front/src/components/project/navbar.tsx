import { useMatch, useRouter } from '@tanstack/react-router';
import { AlignLeft, ArrowLeft } from 'lucide-react';
import React from 'react';

const Navbar: React.FC = () => {
  const { history } = useRouter();
  const isHomePath = !!useMatch({ from: '/_auth/homepage', shouldThrow: false });

  return (
    <nav className="fixed bottom-0 z-[999] flex h-full max-h-14 w-full items-center justify-end border-t-2 border-primary bg-white">
      {!isHomePath ? (
        <div className="flex w-1/2 cursor-pointer items-center justify-center border-r-2 border-primary p-4">
          <ArrowLeft
            onClick={() => history.go(-1)}
            className="text-primary"
            size={25}
            strokeWidth={2}
          />
        </div>
      ) : null}
      <div
        className={`flex ${isHomePath ? 'w-full' : 'w-1/2'} cursor-pointer items-center justify-center p-4`}
      >
        <AlignLeft className="text-primary" size={25} strokeWidth={2} />
      </div>
    </nav>
  );
};

export default Navbar;
