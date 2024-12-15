'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navigation: NavItem[] = [
  {
    label: 'Calculators',
    href: '#',
    children: [
      { label: 'Investment', href: '/calculators/investment' },
      { label: 'Loan', href: '/calculators/loan' },
      { label: 'Tax', href: '/calculators/tax' },
    ],
  },
  {
    label: 'Tools',
    href: '#',
    children: [
      { label: 'Goal Planning', href: '/tools/goal-planning' },
      { label: 'Portfolio Tracker', href: '/tools/portfolio' },
      { label: 'Budget Planner', href: '/tools/budget' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600 font-heading">Finocalci</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className="text-secondary-600 hover:text-primary-600 font-medium transition-colors"
                >
                  {item.label}
                </Link>

                {/* Dropdown Menu */}
                {item.children && activeMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1">
                      {item.children.map((child: { label: string; href: string }) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-secondary-600 hover:bg-primary-50 hover:text-primary-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-secondary-600 hover:text-primary-600 font-medium">
              Login
            </button>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-md"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4">
                      {item.children.map((child: { label: string; href: string }) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-sm font-medium text-secondary-500 hover:text-primary-600 hover:bg-primary-50 rounded-md"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col space-y-2">
                <button className="text-secondary-600 hover:text-primary-600 font-medium px-3 py-2">
                  Login
                </button>
                <button className="bg-primary-600 text-white px-3 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 