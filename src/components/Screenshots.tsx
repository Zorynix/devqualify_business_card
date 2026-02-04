import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const screenshots = [
  {
    id: 1,
    title: 'Главный экран',
    description: 'Список доступных тестов и навигация между разделами',
  },
  {
    id: 2,
    title: 'Прохождение теста',
    description: 'Удобный интерфейс для ответов на вопросы',
  },
  {
    id: 3,
    title: 'Статьи',
    description: 'Интересные статьи по выбранным технологиям',
  },
  {
    id: 4,
    title: 'Профиль',
    description: 'Статистика, достижения и история прохождений',
  },
  {
    id: 5,
    title: 'Лидерборд',
    description: 'Рейтинг и соревнования с другими разработчиками',
  },
  {
    id: 6,
    title: 'Интересы',
    description: 'Выбор интересующих технологий для персонализации',
  },
];

export function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="screenshots" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800/30" />

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
            Интерфейс
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Красивый и
            <span className="text-gradient"> интуитивный дизайн</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Material Design 3 с Jetpack Compose для современного пользовательского опыта
          </p>
        </motion.div>

        {/* Screenshots Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className={cn(
              'absolute left-0 top-1/2 -translate-y-1/2 z-20',
              'w-12 h-12 rounded-full glass flex items-center justify-center',
              'hover:bg-dark-600/80 transition-colors',
              '-translate-x-2 lg:translate-x-0'
            )}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className={cn(
              'absolute right-0 top-1/2 -translate-y-1/2 z-20',
              'w-12 h-12 rounded-full glass flex items-center justify-center',
              'hover:bg-dark-600/80 transition-colors',
              'translate-x-2 lg:translate-x-0'
            )}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="flex items-center justify-center gap-4 py-8 overflow-hidden">
            {screenshots.map((screenshot, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === activeIndex - 1 || (activeIndex === 0 && index === screenshots.length - 1);
              const isNext = index === activeIndex + 1 || (activeIndex === screenshots.length - 1 && index === 0);
              const isVisible = isActive || isPrev || isNext;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={screenshot.id}
                  animate={{
                    scale: isActive ? 1 : 0.8,
                    opacity: isActive ? 1 : 0.5,
                    x: isPrev ? -40 : isNext ? 40 : 0,
                    zIndex: isActive ? 10 : 5,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  onClick={() => setActiveIndex(index)}
                  className="cursor-pointer"
                >
                  {/* Phone Mockup */}
                  <div className={cn(
                    'relative w-[240px] sm:w-[280px] h-[480px] sm:h-[560px] rounded-[2.5rem]',
                    'bg-dark-800 border-4 border-dark-600',
                    'shadow-2xl overflow-hidden',
                    isActive && 'shadow-primary-500/20'
                  )}>
                    {/* Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-dark-900 rounded-full z-10" />
                    
                    {/* Screen Content - Placeholder */}
                    <div className="w-full h-full bg-gradient-to-b from-dark-700 to-dark-800 flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">{screenshot.id}</span>
                        </div>
                        <h4 className="text-lg font-semibold mb-2">{screenshot.title}</h4>
                        <p className="text-sm text-gray-400">{screenshot.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  index === activeIndex 
                    ? 'w-8 bg-primary-500' 
                    : 'bg-dark-600 hover:bg-dark-500'
                )}
              />
            ))}
          </div>
        </div>

        {/* Active Screenshot Info */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-8"
        >
          <h3 className="text-2xl font-bold mb-2">{screenshots[activeIndex].title}</h3>
          <p className="text-gray-400">{screenshots[activeIndex].description}</p>
        </motion.div>
      </div>
    </section>
  );
}
