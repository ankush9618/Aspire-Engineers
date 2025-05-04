// components/NavLink.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = (href === '/products'||href === '/services')
  ? pathname.startsWith(href)
  : pathname === href;


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
