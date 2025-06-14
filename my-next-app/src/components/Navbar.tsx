'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? 'text-blue-500 font-semibold' : 'text-gray-700';

  return (
    <nav className="bg-white border-b shadow p-4 flex gap-6">
      <Link href="/" className={isActive('/')}>
        Home
      </Link>
      <Link href="/about" className={isActive('/about')}>
        About
      </Link>
      <Link href="/contact" className={isActive('/contact')}>
        Contact
      </Link>
    </nav>
  );
}
