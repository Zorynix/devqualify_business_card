import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// Скриншоты приложения
// Чтобы добавить реальные скриншоты:
// 1. Положите PNG файлы в папку /public/screenshots/
// 2. Назовите их: 1.png, 2.png, 3.png и т.д.
// 3. Установите hasImage: true для соответствующего скриншота

const screenshots = [
  {
    id: 1,
    title: 'Главный экран',
    description: 'Список доступных тестов по технологиям и грейдам',
    image: '/screenshots/1.png',
    hasImage: true,
  },
  {
    id: 2,
    title: 'Профиль',
    description: 'Статистика пользователя и история прохождений тестов',
    image: '/screenshots/2.png',
    hasImage: true,
  },
  {
    id: 3,
    title: 'Достижения',
    description: 'Награды за активность, серии ответов и прогресс',
    image: '/screenshots/3.png',
    hasImage: true,
  },
  {
    id: 4,
    title: 'Лидерборд',
    description: 'Рейтинг и соревнования с другими разработчиками',
    image: '/screenshots/4.png',
    hasImage: true,
  },
  {
    id: 5,
    title: 'Статьи',
    description: 'Интересные статьи по выбранным технологиям из интернета',
    image: '/screenshots/5.png',
    hasImage: true,
  },
  {
    id: 6,
    title: 'Интересы',
    description: 'Выбор технологий для персонализации контента',
    image: '/screenshots/6.png',
    hasImage: true,
  },
  {
    id: 7,
    title: 'История статей',
    description: 'Просмотренные, понравившиеся и отклонённые статьи',
    image: '/screenshots/7.png',
    hasImage: true,
  },
];

export function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
  };

  const getVisibleIndices = () => {
    const indices = [];
    for (let i = -2; i <= 2; i++) {
      let index = activeIndex + i;
      if (index < 0) index = screenshots.length + index;
      if (index >= screenshots.length) index = index - screenshots.length;
      indices.push(index);
    }
    return indices;
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
              'absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-20',
              'w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center',
              'hover:bg-dark-600/80 transition-colors'
            )}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className={cn(
              'absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-20',
              'w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center',
              'hover:bg-dark-600/80 transition-colors'
            )}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Container */}
          <div className="flex items-center justify-center py-8 px-12 sm:px-16">
            <div className="relative flex items-center justify-center w-full max-w-4xl h-[500px] sm:h-[600px]">
              {getVisibleIndices().map((screenIndex, i) => {
                const screenshot = screenshots[screenIndex];
                const position = i - 2; // -2, -1, 0, 1, 2
                const isActive = position === 0;
                
                let xOffset = position * 180;
                let scale = isActive ? 1 : 0.75;
                let zIndex = isActive ? 20 : 10 - Math.abs(position);
                let opacity = isActive ? 1 : Math.abs(position) === 2 ? 0.3 : 0.6;

                // На мобильных показываем меньше
                if (Math.abs(position) === 2) {
                  opacity = 0;
                  scale = 0.5;
                }

                return (
                  <motion.div
                    key={`${screenIndex}-${i}`}
                    animate={{
                      x: xOffset,
                      scale,
                      opacity,
                      zIndex,
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    onClick={() => setActiveIndex(screenIndex)}
                    className="absolute cursor-pointer"
                  >
                    {/* Phone Mockup */}
                    <div className={cn(
                      'relative w-[200px] sm:w-[260px] h-[400px] sm:h-[520px] rounded-[2rem] sm:rounded-[2.5rem]',
                      'bg-dark-800 border-4 border-dark-600',
                      'shadow-2xl overflow-hidden',
                      isActive && 'shadow-primary-500/20'
                    )}>
                      {/* Screen Content */}
                      {screenshot.hasImage ? (
                        // Real Screenshot with blur effect
                        <div className="w-full h-full relative">
                          <img 
                            src={screenshot.image}
                            alt={screenshot.title}
                            className="w-full h-full object-cover"
                          />
                          {/* Subtle blur overlay for non-active items */}
                          {!isActive && (
                            <div className="absolute inset-0 backdrop-blur-[2px] bg-dark-900/10" />
                          )}
                        </div>
                      ) : (
                        // Placeholder when no image
                        <div className="w-full h-full bg-gradient-to-b from-dark-700 to-dark-800 flex items-center justify-center p-4 sm:p-6">
                          <div className="text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                              <span className="text-xl sm:text-2xl font-bold text-white">{screenshot.id}</span>
                            </div>
                            <h4 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">{screenshot.title}</h4>
                            <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">{screenshot.description}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-8">
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
          className="text-center mt-6 sm:mt-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-2">{screenshots[activeIndex].title}</h3>
          <p className="text-gray-400 text-sm sm:text-base">{screenshots[activeIndex].description}</p>
        </motion.div>
      </div>
    </section>
  );
}
