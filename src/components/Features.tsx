import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { 
  Brain,
  Trophy,
  BarChart3,
  Newspaper,
  Layers,
  Zap,
  Target,
  Users
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Тесты по технологиям',
    description: 'Проверяй знания по Python, Java, Go, Kubernetes, Docker и многим другим технологиям',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Layers,
    title: 'Грейды и уровни',
    description: 'Выбирай уровень сложности: Junior, Middle, Senior. Расти профессионально',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Trophy,
    title: 'Система достижений',
    description: 'Получай награды за прохождение тестов, серии правильных ответов и активность',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: BarChart3,
    title: 'Интерактивный дашборд',
    description: 'Отслеживай свой прогресс, анализируй статистику и сравнивай результаты',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Соревнования',
    description: 'Соревнуйся с другими разработчиками по количеству правильных ответов и времени',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: Newspaper,
    title: 'Персональные статьи',
    description: 'Получай подборку интересных статей по выбранным технологиям из интернета',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Target,
    title: 'Точная оценка',
    description: 'Выбирай тесты по технологии и грейду — вопросы точно соответствуют выбранному уровню',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Быстрые тесты',
    description: 'Проходи короткие тесты на 5-10 минут в любое удобное время',
    gradient: 'from-amber-500 to-yellow-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary-400 mb-4">
            Возможности
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Всё для профессионального
            <br />
            <span className="text-gradient">роста разработчика</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            DevQualify предоставляет полный набор инструментов для проверки и улучшения 
            ваших технических навыков
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={cn(
                'group relative p-6 rounded-2xl',
                'bg-dark-800/50 border border-dark-600/50',
                'hover:border-primary-500/30 hover:bg-dark-700/50',
                'transition-all duration-300',
                index === 0 && 'sm:col-span-2 lg:col-span-1'
              )}
            >
              {/* Icon */}
              <div className={cn(
                'w-14 h-14 rounded-xl mb-5 flex items-center justify-center',
                'bg-gradient-to-br', feature.gradient,
                'shadow-lg',
                'group-hover:scale-110 transition-transform duration-300'
              )}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className={cn(
                'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100',
                'bg-gradient-to-br', feature.gradient,
                'blur-2xl -z-10 transition-opacity duration-300'
              )} style={{ opacity: 0.1 }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
