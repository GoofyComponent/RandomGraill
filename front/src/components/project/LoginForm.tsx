import { useNavigate } from '@tanstack/react-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

import { GoogleLoginButton } from '@/components/project/GoogleLoginButton';
import { createOrGetUser } from '@/lib/firestore.ts';
import useAuthStore from '@/stores/useUserStore.ts';

const LoginForm = () => {
  const auth = getAuth();
  const { login } = useAuthStore();

  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        login(user);
        await createOrGetUser(user);
        await navigate({
          to: '/dashboard',
        });
      }
    });

    return () => unsubscribe();
  }, [auth, login, navigate]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-semibold">Connexion</h1>
        <div className="flex justify-center">
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
