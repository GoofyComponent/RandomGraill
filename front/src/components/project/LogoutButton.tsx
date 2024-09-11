import { useMutation } from '@tanstack/react-query';

import { Button, ButtonProps } from '@/components/ui/button.tsx';
import { logOut } from '@/lib/firebase.ts';

type LogoutButtonProps = {
  buttonProps?: ButtonProps;
};

export const LogoutButton = ({ buttonProps }: LogoutButtonProps) => {
  const mutation = useMutation({
    mutationFn: async () => {
      await logOut();
    },
  });

  return (
    <Button variant="destructive" {...buttonProps} onClick={() => mutation.mutate()}>
      Logout
    </Button>
  );
};
