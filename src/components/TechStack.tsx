import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';

const clientStack = [
  { name: 'Kotlin', description: 'Основной язык разработки', category: 'Language' },
  { name: 'Jetpack Compose', description: 'Современный UI toolkit', category: 'UI' },
  { name: 'MVVM', description: 'Архитектурный паттерн', category: 'Architecture' },
  { name: 'Dagger Hilt', description: 'Dependency Injection', category: 'DI' },
  { name: 'Retrofit', description: 'HTTP клиент', category: 'Network' },
  { name: 'Protobuf', description: 'Сериализация данных', category: 'Serialization' },
  { name: 'Coil', description: 'Загрузка изображений', category: 'Media' },
  { name: 'Mockito', description: 'Тестирование', category: 'Testing' },
  { name: 'Detekt', description: 'Статический анализ', category: 'Quality' },
  { name: 'Orhanobut Logger', description: 'Логирование', category: 'Logging' },
];

const backendStack = [
  { name: 'Golang', description: 'Основной язык бэкенда', category: 'Language' },
  { name: 'Microservices', description: '4 микросервиса', category: 'Architecture' },
  { name: 'gRPC', description: 'Межсервисная коммуникация', category: 'Communication' },
  { name: 'Protobuf', description: 'Сериализация данных', category: 'Serialization' },
  { name: 'PostgreSQL', description: 'Основная БД', category: 'Database' },
  { name: 'Neo4j', description: 'Граф связей пользователей', category: 'Database' },
  { name: 'pgx', description: 'PostgreSQL драйвер', category: 'Database' },
  { name: 'sqlc', description: 'Генерация SQL', category: 'Database' },
  { name: 'Manticoresearch', description: 'Полнотекстовый поиск', category: 'Search' },
  { name: 'Redpanda', description: 'Message broker', category: 'Messaging' },
  { name: 'JWT', description: 'Аутентификация', category: 'Security' },
  { name: 'Dragonfly', description: 'Кэширование', category: 'Cache' },
  { name: 'Uber FX', description: 'DI Framework', category: 'DI' },
  { name: 'Uber Zap', description: 'Логирование', category: 'Logging' },
  { name: 'SMTP', description: 'Email уведомления', category: 'Notifications' },
];

const devopsStack = [
  { name: 'Docker', description: 'Контейнеризация', category: 'Containers' },
  { name: 'Docker Compose', description: 'Локальная разработка', category: 'Containers' },
  { name: 'Kubernetes', description: 'Оркестрация', category: 'Orchestration' },
  { name: 'Helm', description: 'Package manager для K8s', category: 'Orchestration' },
  { name: 'GitLab CI/CD', description: 'Пайплайны деплоя', category: 'CI/CD' },
  { name: 'Prometheus', description: 'Мониторинг метрик', category: 'Monitoring' },
  { name: 'Grafana', description: 'Визуализация', category: 'Monitoring' },
  { name: 'Loki', description: 'Агрегация логов', category: 'Logging' },
  { name: 'PGmigrate', description: 'Миграции БД', category: 'Database' },
  { name: 'Testcontainers', description: 'Интеграционные тесты', category: 'Testing' },
  { name: 'Task', description: 'Task runner', category: 'Tooling' },
  { name: 'Makefile', description: 'Автоматизация', category: 'Tooling' },
];

const tabs = [
  { id: 'client', label: 'Android', icon: '📱', stack: clientStack, color: 'from-green-500 to-emerald-500' },
  { id: 'backend', label: 'Backend', icon: '⚙️', stack: backendStack, color: 'from-blue-500 to-cyan-500' },
  { id: 'devops', label: 'DevOps', icon: '🚀', stack: devopsStack, color: 'from-purple-500 to-pink-500' },
];

export function TechStack() {
  const [activeTab, setActiveTab] = useState('client');

  return (
    <section id="tech-stack" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800/30" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/5 to-transparent rounded-full" />
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
            Технологии
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Современный
            <span className="text-gradient"> технологический стек</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Надежные и проверенные технологии для создания высокопроизводительного приложения
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <Tabs.List className="flex justify-center gap-2 sm:gap-4 mb-12">
            {tabs.map((tab) => (
              <Tabs.Trigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  'px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base',
                  'transition-all duration-300',
                  'data-[state=inactive]:bg-dark-700/50 data-[state=inactive]:text-gray-400',
                  'data-[state=inactive]:hover:bg-dark-600/50',
                  'data-[state=active]:bg-gradient-to-r data-[state=active]:text-white',
                  'data-[state=active]:shadow-lg',
                  activeTab === tab.id && tab.color
                )}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {tabs.map((tab) => (
            <Tabs.Content key={tab.id} value={tab.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
              >
                {tab.stack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className={cn(
                      'group p-4 rounded-xl',
                      'bg-dark-700/50 border border-dark-600/50',
                      'hover:border-primary-500/30 hover:bg-dark-600/50',
                      'transition-all duration-300 cursor-default'
                    )}
                  >
                    <div className="text-center">
                      <h4 className="font-semibold text-sm sm:text-base mb-1 group-hover:text-primary-400 transition-colors">
                        {tech.name}
                      </h4>
                      <p className="text-xs text-gray-500 hidden sm:block">
                        {tech.description}
                      </p>
                      <span className={cn(
                        'inline-block mt-2 px-2 py-0.5 rounded-full text-xs',
                        'bg-dark-600 text-gray-400'
                      )}>
                        {tech.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}
