import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { 
  Smartphone, 
  Github, 
  Twitter, 
  Linkedin,
  Mail,
  MessageCircle
} from 'lucide-react';

const footerLinks = [
  {
    title: 'Продукт',
    links: [
      { label: 'Возможности', href: '#features' },
      { label: 'Технологии', href: '#tech-stack' },
      { label: 'Архитектура', href: '#architecture' },
      { label: 'Скачать', href: '#download' },
    ],
  },
  {
    title: 'Ресурсы',
    links: [
      { label: 'Документация', href: '#' },
      { label: 'API', href: '#' },
      { label: 'Блог', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'О нас', href: '#' },
      { label: 'Карьера', href: '#' },
      { label: 'Контакты', href: '#' },
      { label: 'Партнерство', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: MessageCircle, href: '#', label: 'Telegram' },
  { icon: Mail, href: '#', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="relative bg-dark-800/50 border-t border-dark-600/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              {/* Logo */}
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">
                  Dev<span className="text-gradient">Qualify</span>
                </span>
              </a>
              
              <p className="text-gray-400 mb-6 max-w-sm">
                Мобильное приложение для проверки IT-компетенций. 
                Тесты, достижения, соревнования и персонализированный контент.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      'w-10 h-10 rounded-lg flex items-center justify-center',
                      'bg-dark-700 hover:bg-dark-600',
                      'text-gray-400 hover:text-white',
                      'transition-all duration-300'
                    )}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-dark-600/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 DevQualify. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
