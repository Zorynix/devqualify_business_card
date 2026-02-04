import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { useState } from 'react';
import { 
  Brain,
  Smartphone,
  Globe,
  Palette,
  X,
  Sparkles,
  BookOpen,
  MessageSquare,
  Lightbulb,
  Apple,
  Monitor
} from 'lucide-react';
import { SiApple } from '@icons-pack/react-simple-icons';

interface RoadmapItem {
  id: string;
  year: string;
  quarter: string;
  title: string;
  shortDescription: string;
  icon: React.ElementType;
  color: string;
  features: {
    icon: React.ElementType;
    title: string;
    description: string;
  }[];
  technologies?: string[];
}

const roadmapItems: RoadmapItem[] = [
  {
    id: 'ai-module',
    year: '2026',
    quarter: 'Q3',
    title: 'AI Engine',
    shortDescription: 'Интеграция нейросети',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    features: [
      {
        icon: Lightbulb,
        title: 'Умный подбор вопросов',
        description: 'AI анализирует историю ответов и подбирает оптимальные вопросы для обучения',
      },
      {
        icon: BookOpen,
        title: 'Рекомендации материалов',
        description: 'При неправильном ответе система предложит статьи и материалы для изучения темы',
      },
      {
        icon: MessageSquare,
        title: 'Детальный разбор',
        description: 'ИИ объяснит почему ответ правильный или неправильный с примерами кода',
      },
      {
        icon: Sparkles,
        title: 'Адаптивное обучение',
        description: 'Персональная траектория обучения на основе ваших сильных и слабых сторон',
      },
    ],
    technologies: ['Python', 'PyTorch', 'FastAPI', 'gRPC', 'Vector DB', 'LLM'],
  },
  {
    id: 'ui-redesign',
    year: '2026',
    quarter: 'Q4',
    title: 'UI 2.0',
    shortDescription: 'Полная переработка интерфейса',
    icon: Palette,
    color: 'from-cyan-500 to-blue-500',
    features: [
      {
        icon: Sparkles,
        title: 'Новый дизайн-система',
        description: 'Современный Material Design 3 с улучшенной анимацией и микровзаимодействиями',
      },
      {
        icon: Lightbulb,
        title: 'Темная и светлая темы',
        description: 'Полная поддержка системных настроек с плавным переключением',
      },
      {
        icon: Globe,
        title: 'Улучшенная навигация',
        description: 'Переработанная структура экранов для более интуитивного использования',
      },
      {
        icon: MessageSquare,
        title: 'Геймификация',
        description: 'Новые анимации достижений, уровни прокачки и визуальные награды',
      },
    ],
    technologies: ['Jetpack Compose', 'Material 3', 'Lottie', 'Figma'],
  },
  {
    id: 'ios-app',
    year: '2027',
    quarter: 'Q1',
    title: 'iOS App',
    shortDescription: 'Приложение для Apple',
    icon: SiApple,
    color: 'from-gray-400 to-gray-600',
    features: [
      {
        icon: Smartphone,
        title: 'Нативное приложение',
        description: 'Полноценное iOS приложение на Swift с SwiftUI для максимальной производительности',
      },
      {
        icon: Sparkles,
        title: 'Apple Design Guidelines',
        description: 'Интерфейс соответствует Human Interface Guidelines от Apple',
      },
      {
        icon: Globe,
        title: 'Синхронизация',
        description: 'Полная синхронизация прогресса между Android и iOS устройствами',
      },
      {
        icon: Lightbulb,
        title: 'Apple Watch',
        description: 'Виджеты и быстрые тесты для Apple Watch',
      },
    ],
    technologies: ['Swift', 'SwiftUI', 'Combine', 'CoreData', 'WatchKit'],
  },
  {
    id: 'web-app',
    year: '2027',
    quarter: 'Q2',
    title: 'Web App',
    shortDescription: 'Веб-версия платформы',
    icon: Monitor,
    color: 'from-green-500 to-emerald-500',
    features: [
      {
        icon: Globe,
        title: 'Полнофункциональный веб-клиент',
        description: 'Все возможности мобильного приложения доступны в браузере',
      },
      {
        icon: Sparkles,
        title: 'PWA',
        description: 'Progressive Web App с оффлайн режимом и push-уведомлениями',
      },
      {
        icon: Monitor,
        title: 'Десктоп-оптимизация',
        description: 'Расширенный интерфейс для больших экранов с дополнительными функциями',
      },
      {
        icon: BookOpen,
        title: 'Админ-панель',
        description: 'Веб-интерфейс для создания и управления тестами и контентом',
      },
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'PWA'],
  },
];

export function Roadmap() {
  const [selectedItem, setSelectedItem] = useState<RoadmapItem | null>(null);

  return (
    <section id="roadmap" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800/30" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-accent-400 mb-4">
            <Sparkles className="w-4 h-4" />
            Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Планы
            <span className="text-gradient"> развития</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Нажмите на точку, чтобы узнать подробности о предстоящих обновлениях
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* SVG Path - Desktop */}
          <svg 
            className="hidden lg:block absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 pointer-events-none"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 0 50 Q 150 10, 300 50 T 600 50 T 900 50 T 1200 50"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
          </svg>

          {/* Mobile vertical line */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 via-primary-500 to-success-500" />

          {/* Timeline Items */}
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={cn(
                  'relative',
                  'lg:pt-20', // Space for the curve
                  index % 2 === 1 && 'lg:pt-0 lg:pb-20' // Alternate up/down
                )}
              >
                {/* Mobile: Left aligned with line */}
                <div className="lg:hidden flex items-start gap-4 pl-4">
                  {/* Dot on line */}
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedItem(item)}
                    className={cn(
                      'relative z-10 w-12 h-12 rounded-full flex items-center justify-center',
                      'bg-gradient-to-br shadow-lg cursor-pointer',
                      item.color
                    )}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.button>

                  <div className="flex-1 pb-8">
                    <span className="text-sm font-bold text-accent-400">{item.year} {item.quarter}</span>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.shortDescription}</p>
                  </div>
                </div>

                {/* Desktop: Centered with curve */}
                <div className="hidden lg:flex flex-col items-center">
                  {/* Year label */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                    className={cn(
                      'mb-4',
                      index % 2 === 1 && 'order-3 mt-4 mb-0'
                    )}
                  >
                    <span className="px-3 py-1 rounded-full bg-dark-700/80 text-sm font-bold text-accent-400">
                      {item.year} {item.quarter}
                    </span>
                  </motion.div>

                  {/* Dot */}
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedItem(item)}
                    className={cn(
                      'relative z-10 w-16 h-16 rounded-full flex items-center justify-center',
                      'bg-gradient-to-br shadow-lg cursor-pointer',
                      'hover:shadow-xl transition-shadow',
                      item.color,
                      index % 2 === 1 && 'order-2'
                    )}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                    {/* Pulse effect */}
                    <span className={cn(
                      'absolute inset-0 rounded-full bg-gradient-to-br animate-ping opacity-20',
                      item.color
                    )} />
                  </motion.button>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedItem(item)}
                    className={cn(
                      'mt-4 p-4 rounded-xl cursor-pointer',
                      'bg-dark-700/50 border border-dark-600/50',
                      'hover:border-primary-500/30 hover:bg-dark-600/50',
                      'transition-all duration-300',
                      'w-full max-w-[200px]',
                      index % 2 === 1 && 'order-1 mt-0 mb-4'
                    )}
                  >
                    <h3 className="text-lg font-bold mb-1 text-center">{item.title}</h3>
                    <p className="text-xs text-gray-400 text-center">{item.shortDescription}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-2xl sm:max-h-[80vh] overflow-y-auto z-50 rounded-2xl bg-dark-800 border border-dark-600 shadow-2xl"
            >
              {/* Header */}
              <div className={cn(
                'sticky top-0 p-6 rounded-t-2xl bg-gradient-to-br',
                selectedItem.color
              )}>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                    <selectedItem.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-white/70">
                      {selectedItem.year} {selectedItem.quarter}
                    </span>
                    <h2 className="text-2xl font-bold text-white">{selectedItem.title}</h2>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6">{selectedItem.shortDescription}</p>

                {/* Features */}
                <div className="space-y-4 mb-6">
                  {selectedItem.features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 p-4 rounded-xl bg-dark-700/50"
                    >
                      <div className={cn(
                        'w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0',
                        'bg-gradient-to-br',
                        selectedItem.color
                      )}>
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                {selectedItem.technologies && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Технологии</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-dark-700 text-sm text-gray-300 border border-dark-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
