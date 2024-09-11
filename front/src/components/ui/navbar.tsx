import { useState, useEffect } from 'react';
import { useRouter, useRouterState } from '@tanstack/react-router';

import logo from '@/assets/images/logo-simple.svg';

const Navbar = () => {
  const [isHomePage, setIsHomePage] = useState(false);
  const { history } = useRouter();
  const router = useRouterState();

  useEffect(() => {
    if (router.location.pathname === '/home') {
      // Remplace par le chemin de la page d'accueil
      setIsHomePage(true);
    }
  }, [router]);

  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {!isHomePage ? (
          <button onClick={() => history.go(-1)} className="text-primary">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        ) : (
          <div></div>
        )}
        <img src={logo} alt="Logo" className="h-12 w-12" />
        <a>
          <img
            src="https://via.placeholder.com/40" // Remplacer par l'URL de l'image de l'utilisateur connecté
            alt="User Icon"
            className="h-10 w-10 rounded-full border border-gray-300"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
