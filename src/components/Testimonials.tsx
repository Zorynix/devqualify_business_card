import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Александр К.',
    role: 'Senior Python Developer',
    company: 'Яндекс',
    avatar: 'AK',
    rating: 5,
    text: 'Отличное приложение для подготовки к собеседованиям! Вопросы актуальные и хорошо структурированы по уровням сложности.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Мария С.',
    role: 'Middle Java Developer',
    company: 'Сбер',
    avatar: 'МС',
    rating: 5,
    text: 'Благодаря DevQualify смогла оценить свои знания и понять, над чем нужно работать. Рекомендую всем разработчикам!',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    name: 'Дмитрий В.',
    role: 'DevOps Engineer',
    company: 'VK',
    avatar: 'ДВ',
    rating: 5,
    text: 'Тесты по Kubernetes и Docker — то, что нужно! Удобно проходить в метро по дороге на работу.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    name: 'Елена П.',
    role: 'Junior Go Developer',
    company: 'Ozon',
    avatar: 'ЕП',
    rating: 5,
    text: 'Приложение помогло мне подготовиться к первому техническому собеседованию. Теперь я работаю разработчиком!',
    color: 'from-orange-500 to-red-500',
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
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
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary-400 mb-4">
            Отзывы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Что говорят
            <span className="text-gradient"> разработчики</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Присоединяйся к сообществу IT-специалистов, которые уже используют DevQualify
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={cn(
                'group relative p-6 rounded-2xl',
                'bg-dark-800/50 border border-dark-600/50',
                'hover:border-primary-500/30',
                'transition-all duration-300'
              )}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-dark-600 group-hover:text-dark-500 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={cn(
                  'w-12 h-12 rounded-full flex items-center justify-center',
                  'bg-gradient-to-br text-white font-semibold',
                  testimonial.color
                )}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
