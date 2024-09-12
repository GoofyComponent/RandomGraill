import { SiGoogle } from '@icons-pack/react-simple-icons';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { Loader2 } from 'lucide-react';

import LOGO from '@/assets/images/LogoOrange.svg';
import { signInWithGoogle } from '@/lib/firebase';
import { createOrGetUser } from '@/lib/firestore.ts';
import useUserStore from '@/stores/useUserStore.ts';

import { Button } from '../components/ui/button';

const LoginPage = () => {
  const { login } = useUserStore();

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => signInWithGoogle(),
    onSuccess: async (data) => {
      if (data) {
        login(data);
        await createOrGetUser(data);
        return navigate({
          to: '/homepage',
        });
      }
    },
    onError: (error) => {
      console.error('Error while logging in with Google', error);
    },
  });

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-background">
      <div className="mx-4 my-4">
        <img src={LOGO} alt="Logo RandomGraill" />
      </div>

      <Button
        className="mx-auto space-x-4"
        onClick={() => {
          mutate();
        }}
        disabled={isPending}
      >
        {isPending && <Loader2 className="animate-spin" />}
        {!isPending && <SiGoogle className="text-background" />}

        <p className="text-background">Login or Register</p>
      </Button>
    </main>
  );
};

export default LoginPage;
