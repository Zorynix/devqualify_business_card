import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

function AnimatedStat({ value, suffix = '', label, duration = 2 }: StatProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest);
    });

    const controls = animate(count, value, { duration });
    
    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [value, count, rounded, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-2">
        {displayValue.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-400 text-sm sm:text-base">{label}</div>
    </div>
  );
}

const stats = [
  { value: 50, suffix: '+', label: 'Технологий' },
  { value: 1000, suffix: '+', label: 'Вопросов' },
  { value: 500, suffix: '+', label: 'Активных пользователей' },
  { value: 98, suffix: '%', label: 'Положительных отзывов' },
];

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsVisible(true)}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className={cn(
          'grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12',
          'p-8 sm:p-12 rounded-3xl',
          'bg-dark-800/30 border border-dark-600/30'
        )}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {isVisible && (
                <AnimatedStat
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  duration={2 + index * 0.3}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
