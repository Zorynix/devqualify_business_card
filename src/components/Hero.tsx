import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { 
  Play,
  ChevronRight,
  Sparkles,
  Trophy,
  Users
} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/5 to-transparent rounded-full" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-gray-300">
                Новое поколение IT-сертификации
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Проверь свои
              <br />
              <span className="text-gradient">IT-компетенции</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              DevQualify — мобильное приложение для тестирования знаний разработчиков. 
              Тесты по технологиям, грейдам, соревнования и персонализированный контент.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10"
            >
              {[
                { icon: Users, value: '50+', label: 'Технологий' },
                { icon: Trophy, value: '100+', label: 'Тестов' },
                { icon: Sparkles, value: '30+', label: 'Достижений' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'inline-flex items-center gap-2 px-8 py-4 rounded-2xl',
                  'bg-gradient-to-r from-primary-500 to-accent-500',
                  'hover:from-primary-400 hover:to-accent-400',
                  'text-white font-semibold text-lg',
                  'shadow-2xl shadow-primary-500/25',
                  'transition-all duration-300'
                )}
              >
                <Play className="w-5 h-5" />
                Начать бесплатно
              </motion.a>
              
              <motion.a
                href="#features"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'inline-flex items-center gap-2 px-8 py-4 rounded-2xl',
                  'bg-dark-700 hover:bg-dark-600',
                  'text-white font-semibold text-lg',
                  'border border-dark-500',
                  'transition-all duration-300'
                )}
              >
                Узнать больше
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center px-8 sm:px-16"
          >
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-full blur-3xl" />
            
            {/* Phone Frame */}
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                {/* Phone */}
                <div className="w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] rounded-[3rem] bg-dark-800 border-4 border-dark-600 shadow-2xl overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-dark-900 rounded-full z-20" />
                  
                  {/* Screen Content */}
                  <div className="w-full h-full bg-gradient-to-b from-dark-700 to-dark-800 p-4 pt-12">
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-xs text-gray-500">Привет,</p>
                        <p className="text-lg font-semibold">Разработчик 👋</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500" />
                    </div>

                    {/* Progress Card */}
                    <div className="glass rounded-2xl p-4 mb-4">
                      <p className="text-xs text-gray-400 mb-2">Ваш прогресс</p>
                      <div className="flex items-end justify-between mb-2">
                        <span className="text-2xl font-bold">87%</span>
                        <span className="text-sm text-success-400">+12% за неделю</span>
                      </div>
                      <div className="w-full h-2 bg-dark-600 rounded-full overflow-hidden">
                        <div className="w-[87%] h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
                      </div>
                    </div>

                    {/* Test Cards */}
                    <p className="text-sm font-medium mb-3">Рекомендуемые тесты</p>
                    <div className="space-y-3">
                      {[
                        { title: 'Python', level: 'Senior', color: 'from-yellow-500 to-yellow-600' },
                        { title: 'Kubernetes', level: 'Middle', color: 'from-blue-500 to-blue-600' },
                        { title: 'Go', level: 'Junior', color: 'from-cyan-500 to-cyan-600' },
                      ].map((test) => (
                        <div key={test.title} className="glass rounded-xl p-3 flex items-center gap-3">
                          <div className={cn('w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center text-white font-bold text-sm', test.color)}>
                            {test.title[0]}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{test.title}</p>
                            <p className="text-xs text-gray-500">{test.level}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 sm:-right-16 top-20 z-20 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="text-sm font-semibold">Достижение!</p>
                    <p className="text-xs text-gray-400">Python Master</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -left-4 sm:-left-16 bottom-32 z-20 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-success-400 to-success-500 flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <div>
                    <p className="text-sm font-semibold">+150 XP</p>
                    <p className="text-xs text-gray-400">Тест пройден</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
