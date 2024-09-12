import { Link, useMatch, useRouter } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

import logo from '@/assets/images/logo-simple.svg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar = ({
  userName,
  clickAvatarDirection,
  userPhoto,
}: {
  userName: string;
  clickAvatarDirection: string;
  userPhoto?: string;
}) => {
  const { history } = useRouter();

  const userFallback = userName.slice(0, 3);
  const isHomePath = !!useMatch({ from: '/_auth/homepage', shouldThrow: false });

  return (
    <nav>
      <div className="mx-auto flex w-full items-center justify-between px-1 py-1">
        {!isHomePath && (
          <ArrowLeft
            onClick={() => history.go(-1)}
            className="text-primary"
            size={32}
            strokeWidth={2}
          />
        )}
        <img src={logo} alt="Logo" className="h-12 w-12" />
        <Link to={clickAvatarDirection}>
          <Avatar className="h-12 w-12 rounded-full border border-gray-300">
            <AvatarImage src={userPhoto} />
            <AvatarFallback>{userFallback}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
