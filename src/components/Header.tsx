import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { 
  Smartphone, 
  Menu, 
  X 
} from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '#features', label: 'Возможности' },
  { href: '#tech-stack', label: 'Технологии' },
  { href: '#architecture', label: 'Архитектура' },
  { href: '#screenshots', label: 'Скриншоты' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            </div>
            <span className="text-xl font-bold">
              Dev<span className="text-gradient">Qualify</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium',
                  'text-gray-400 hover:text-white',
                  'hover:bg-dark-600/50 transition-all duration-200'
                )}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'px-5 py-2.5 rounded-xl font-semibold text-sm',
                'bg-gradient-to-r from-primary-500 to-accent-500',
                'hover:from-primary-400 hover:to-accent-400',
                'text-white shadow-lg shadow-primary-500/25',
                'transition-all duration-300'
              )}
            >
              Скачать
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-dark-600/50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-dark-600/50 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#download"
                className={cn(
                  'mt-2 px-4 py-3 rounded-xl font-semibold text-center',
                  'bg-gradient-to-r from-primary-500 to-accent-500',
                  'text-white'
                )}
              >
                Скачать приложение
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
