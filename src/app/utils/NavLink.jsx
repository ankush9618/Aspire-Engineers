'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash);
    updateHash();

    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  const fullPath = `${pathname}${currentHash}`;
  const isActive = fullPath === href;

  return (
    <Link
      href={href}
      className={isActive ? 'text-yellow-500' : ''}
    >
      {children}
    </Link>
  );
};

export default NavLink;
