// LoginPage.js

import { useNavigate } from '@tanstack/react-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

import { GoogleLoginButton } from '@/components/GoogleLoginButton.tsx';
import useAuthStore from '@/stores/useUserStore.ts';

import favicon from '../../public/favicon.svg';

const LoginForm = () => {
  const auth = getAuth();
  const { login } = useAuthStore(); // Désormais, on extrait login et logout

  const navigate = useNavigate();
  useEffect(() => {
    console.log('AuthButton useEffect');
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        login(user);
        navigate({
          to: '/dashboard',
        });
      }
    });

    return () => unsubscribe();
  }, [auth, login, navigate]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <div className="mb-8 flex justify-center">
          <img src={favicon} alt="App Logo" className="h-24 w-24 object-contain" />
        </div>
        <h1 className="mb-6 text-center text-2xl font-semibold">Connexion</h1>
        <div className="flex justify-center">
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
