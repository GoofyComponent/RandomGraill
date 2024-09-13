import { AvatarImage } from '@radix-ui/react-avatar';
import { useLoaderData, useNavigate } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRef } from 'react';

import logo from '@/assets/images/SimpleLogoOrange.svg';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { db2 } from '@/db/baseSchema';
import { logOut } from '@/lib/firebase';
import useAuthStore from '@/stores/useUserStore';

export const UserPage = () => {
  const navigate = useNavigate();
  const { userPreferences, updatePreferences } = useAuthStore();
  const { userData } = useLoaderData({ from: '/_auth' });

  const [rangeArea, setRangeArea] = useState([userPreferences?.rangeArea ?? 500]);
  const rangeAreaRef = useRef(rangeArea);

  const updatePreferencesInDb = async () => {
    if (rangeAreaRef.current[0] !== undefined) {
      updatePreferences({
        rangeArea: rangeAreaRef.current[0],
      });

      await db2.user.upset(userData.uid, {
        preferences: {
          radius: rangeAreaRef.current[0],
        },
      });
    }
  };

  useEffect(() => {
    if (userPreferences) {
      setRangeArea([userPreferences.rangeArea]);
    }

    return () => {
      updatePreferencesInDb();
    };
    // We only want to run this effect once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    rangeAreaRef.current = rangeArea;
  }, [rangeArea]);

  return (
    <div className="flex flex-col">
      <nav className="mx-auto flex h-16 w-full items-center justify-between px-1 py-1">
        <ArrowLeft
          onClick={() => history.go(-1)}
          className="text-primary"
          size={32}
          strokeWidth={2}
        />
        <img src={logo} alt="Logo" className="h-12 w-12" />
      </nav>
      <section className="mx-auto flex min-h-[calc(100vh-64px)] w-11/12 flex-col items-center justify-center space-y-8">
        <Avatar className="mx-auto h-24 w-24">
          <AvatarImage src={userData.photoURL} />
          <AvatarFallback>{userData.displayName.slice(0, 3)}</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl font-bold">Hello, {userData.displayName}</h1>
        <div className="my-8 w-full">
          <p className="text-xl font-semibold">Your current range area:</p>
          <p className="text-right text-2xl font-semibold">{rangeArea[0]} meters</p>
          <Slider
            value={rangeArea}
            onValueChange={(value) => {
              setRangeArea(value);
            }}
            min={150}
            max={1000}
            step={50}
          />
        </div>
        <Button
          onClick={async () => {
            try {
              await logOut();
              return navigate({
                to: '/',
              });
            } catch (error) {
              console.error(error);
            }
          }}
        >
          Logout
        </Button>
      </section>
    </div>
  );
};
