import { FaCog, FaHome, FaPlus } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-50 flex w-full items-center justify-between border-t border-gray-200 bg-white px-4 py-2">
      <Button variant="ghost" className="flex items-center justify-center text-gray-500">
        <FaHome size={24} />
      </Button>
      <Button
        variant="default"
        className="flex h-14 w-14 -translate-y-3 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg"
      >
        <FaPlus size={32} />
      </Button>
      <Button variant="ghost" className="flex items-center justify-center text-gray-500">
        <FaCog size={24} />
      </Button>
    </footer>
  );
};

export default Footer;
