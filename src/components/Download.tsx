import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Download as DownloadIcon, Smartphone } from 'lucide-react';

export function DownloadSection() {
  return (
    <section id="download" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary-500/20 via-accent-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            'relative p-8 sm:p-12 lg:p-16 rounded-3xl',
            'bg-gradient-to-br from-dark-700/80 to-dark-800/80',
            'border border-dark-600/50',
            'shadow-2xl backdrop-blur-xl',
            'text-center'
          )}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 blur-xl" />
          
          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 mb-8 shadow-lg shadow-primary-500/25"
            >
              <Smartphone className="w-10 h-10 text-white" />
            </motion.div>

            {/* Content */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Готов проверить свои
              <br />
              <span className="text-gradient">знания?</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
              Скачай DevQualify и начни прокачивать свои навыки уже сегодня. 
              Тысячи вопросов по всем популярным технологиям ждут тебя!
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Google Play Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'flex items-center gap-3 px-6 py-4 rounded-xl',
                  'bg-white text-dark-900',
                  'hover:bg-gray-100',
                  'transition-all duration-300',
                  'shadow-lg'
                )}
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Загрузить в</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </motion.a>

              {/* APK Download */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'flex items-center gap-3 px-6 py-4 rounded-xl',
                  'bg-gradient-to-r from-primary-500 to-accent-500',
                  'hover:from-primary-400 hover:to-accent-400',
                  'text-white',
                  'transition-all duration-300',
                  'shadow-lg shadow-primary-500/25'
                )}
              >
                <DownloadIcon className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs opacity-70">Скачать</div>
                  <div className="text-lg font-semibold">APK файл</div>
                </div>
              </motion.a>
            </div>

            {/* Version Info */}
            <p className="text-sm text-gray-500 mt-6">
              Версия 1.0.0 • Android 8.0+
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
