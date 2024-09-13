import { Loader2 } from 'lucide-react';

import Logo from '@/assets/images/LogoOrange.svg';

const LoaderPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-8 bg-background">
      <img src={Logo} alt="Logo" className="loader__logo" />
      <Loader2 className="animate-spin" color="#FF684D" size={45} />
    </div>
  );
};

export default LoaderPage;
