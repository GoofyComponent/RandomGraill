import { Link } from '@tanstack/react-router';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = ({
  userName,
  clickAvatarDirection,
  userPhoto,
}: {
  userName: string;
  clickAvatarDirection: string;
  userPhoto?: string;
}) => {
  const userFallback = userName.slice(0, 3);

  return (
    <header>
      <div className="mx-auto flex w-full items-center justify-between px-1 py-1">
        <Link to={clickAvatarDirection}>
          <Avatar className="h-12 w-12 rounded-full border border-gray-300">
            <AvatarImage src={userPhoto} />
            <AvatarFallback>{userFallback}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  );
};

export default Header;
