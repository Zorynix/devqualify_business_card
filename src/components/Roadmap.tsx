import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { 
  Brain,
  Sparkles,
  BookOpen,
  MessageSquare,
  Lightbulb,
  Rocket
} from 'lucide-react';

const roadmapItems = [
  {
    icon: Brain,
    title: 'AI-микросервис',
    description: 'Интеграция нейросети для интеллектуального анализа и персонализации',
    status: 'planned',
    features: [
      'Умный подбор вопросов на основе истории ответов',
      'Персонализированные рекомендации статей',
      'Анализ паттернов ошибок пользователя',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Материалы для изучения',
    description: 'Автоматические рекомендации при неправильных ответах',
    status: 'planned',
    features: [
      'Подборка статей по теме вопроса',
      'Ссылки на документацию',
      'Видео-туториалы от экспертов',
    ],
  },
  {
    icon: MessageSquare,
    title: 'AI-объяснения',
    description: 'Детальный разбор каждого вопроса с помощью нейросети',
    status: 'planned',
    features: [
      'Почему ответ правильный/неправильный',
      'Примеры кода и best practices',
      'Связь с реальными кейсами',
    ],
  },
  {
    icon: BookOpen,
    title: 'Адаптивное обучение',
    description: 'AI анализирует прогресс и строит индивидуальную траекторию',
    status: 'planned',
    features: [
      'Определение слабых мест',
      'Оптимальный порядок изучения тем',
      'Прогнозирование готовности к собеседованию',
    ],
  },
];

export function Roadmap() {
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
            <Rocket className="w-4 h-4" />
            В разработке
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Что мы
            <span className="text-gradient"> планируем</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Интеграция искусственного интеллекта для персонализированного обучения 
            и максимально эффективной подготовки к собеседованиям
          </p>
        </motion.div>

        {/* AI Service Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            'relative p-8 rounded-3xl mb-12',
            'bg-gradient-to-br from-accent-500/10 to-primary-500/10',
            'border border-accent-500/20'
          )}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center shadow-lg shadow-accent-500/25"
            >
              <Brain className="w-12 h-12 text-white" />
            </motion.div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-3">
                Новый микросервис: <span className="text-gradient">AI Engine</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Полноценный микросервис с нейросетью, который будет интегрирован в архитектуру приложения. 
                Персональный ИИ-помощник для каждого пользователя, который учится на его ответах 
                и помогает эффективнее готовиться к техническим собеседованиям.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {['Python', 'PyTorch', 'FastAPI', 'gRPC', 'Vector DB'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 rounded-full bg-dark-700/50 text-sm text-gray-300 border border-dark-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Roadmap Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={cn(
                'group relative p-6 rounded-2xl',
                'bg-dark-800/50 border border-dark-600/50',
                'hover:border-accent-500/30',
                'transition-all duration-300'
              )}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent-500/20 text-xs font-medium text-accent-400">
                  <Sparkles className="w-3 h-3" />
                  Скоро
                </span>
              </div>

              {/* Icon */}
              <div className={cn(
                'w-12 h-12 rounded-xl mb-4 flex items-center justify-center',
                'bg-gradient-to-br from-accent-500/20 to-primary-500/20',
                'group-hover:from-accent-500/30 group-hover:to-primary-500/30',
                'transition-all duration-300'
              )}>
                <item.icon className="w-6 h-6 text-accent-400" />
              </div>

              {/* Content */}
              <h4 className="text-xl font-semibold mb-2 group-hover:text-accent-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                {item.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
