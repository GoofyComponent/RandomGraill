import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

import { logOut } from '@/lib/firebase.ts';

export const Route = createFileRoute('/logout')({
  component: () => <LogoutPage />,
});

const LogoutPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    logOut().then(() => {
      console.log('Logged out');

      navigate({
        to: '/',
        replace: true,
      });
    });
  }, [navigate]);

  return (
    <>
      <p>Logging out...</p>
    </>
  );
};
