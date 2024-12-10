import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

export function NavLink({ href, children, mobile, onClick }: NavLinkProps) {
  const baseClasses = "font-medium text-gray-600 hover:text-orange-500 transition-colors";
  const mobileClasses = mobile ? "py-3 block" : "";
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      onClick?.();
    }
  };

  if (href.startsWith('#')) {
    return (
      <a 
        href={href} 
        className={`${baseClasses} ${mobileClasses}`}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={`${baseClasses} ${mobileClasses}`}>
      {children}
    </Link>
  );
}