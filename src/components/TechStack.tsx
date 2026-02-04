import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import {
  SiKotlin,
  SiJetpackcompose,
  SiAndroid,
  SiGradle,
  SiGo,
  SiPostgresql,
  SiNeo4j,
  SiApachekafka,
  SiJsonwebtokens,
  SiDocker,
  SiKubernetes,
  SiHelm,
  SiGitlab,
  SiPrometheus,
  SiGrafana,
} from '@icons-pack/react-simple-icons';
import { 
  Layers, 
  Syringe, 
  Globe, 
  FileJson, 
  ImageIcon, 
  TestTube,
  Search,
  Zap,
  Mail,
  Container,
  FileCode,
  ScrollText,
  Database
} from 'lucide-react';


const clientStack = [
  { name: 'Kotlin', description: 'Основной язык разработки', icon: SiKotlin, color: '#7F52FF' },
  { name: 'Jetpack Compose', description: 'Современный UI toolkit', icon: SiJetpackcompose, color: '#4285F4' },
  { name: 'MVVM', description: 'Архитектурный паттерн', icon: Layers, color: '#10B981' },
  { name: 'Dagger Hilt', description: 'Dependency Injection', icon: Syringe, color: '#FF6B6B' },
  { name: 'Retrofit', description: 'HTTP клиент', icon: Globe, color: '#48BB78' },
  { name: 'Protobuf', description: 'Сериализация данных', icon: FileJson, color: '#4299E1' },
  { name: 'Coil', description: 'Загрузка изображений', icon: ImageIcon, color: '#F59E0B' },
  { name: 'Mockito', description: 'Тестирование', icon: TestTube, color: '#8B5CF6' },
  { name: 'Gradle', description: 'Система сборки', icon: SiGradle, color: '#02303A' },
];


const backendStack = [
  { name: 'Golang', description: 'Основной язык бэкенда', icon: SiGo, color: '#00ADD8' },
  { name: 'gRPC', description: 'Межсервисная коммуникация', icon: Zap, color: '#244C5A' },
  { name: 'Protobuf', description: 'Сериализация данных', icon: FileJson, color: '#4299E1' },
  { name: 'PostgreSQL', description: 'Основная БД', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Neo4j', description: 'Граф связей пользователей', icon: SiNeo4j, color: '#008CC1' },
  { name: 'Manticoresearch', description: 'Полнотекстовый поиск', icon: Search, color: '#4F46E5' },
  { name: 'Redpanda', description: 'Message broker', icon: SiApachekafka, color: '#E4393C' },
  { name: 'JWT', description: 'Аутентификация', icon: SiJsonwebtokens, color: '#000000' },
  { name: 'Dragonfly', description: 'Кэширование', icon: Database, color: '#22C55E' },
  { name: 'SMTP', description: 'Email уведомления', icon: Mail, color: '#EC4899' },
];


const devopsStack = [
  { name: 'Docker', description: 'Контейнеризация', icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', description: 'Оркестрация', icon: SiKubernetes, color: '#326CE5' },
  { name: 'Helm', description: 'Package manager для K8s', icon: SiHelm, color: '#0F1689' },
  { name: 'GitLab CI/CD', description: 'Пайплайны деплоя', icon: SiGitlab, color: '#FC6D26' },
  { name: 'Prometheus', description: 'Мониторинг метрик', icon: SiPrometheus, color: '#E6522C' },
  { name: 'Grafana', description: 'Визуализация', icon: SiGrafana, color: '#F46800' },
  { name: 'Loki', description: 'Агрегация логов', icon: ScrollText, color: '#F4D03F' },
  { name: 'Testcontainers', description: 'Интеграционные тесты', icon: Container, color: '#2496ED' },
  { name: 'Makefile', description: 'Автоматизация', icon: FileCode, color: '#6366F1' },
];

const tabs = [
  { id: 'client', label: 'Android', icon: SiAndroid, stack: clientStack, color: 'from-green-500 to-emerald-500' },
  { id: 'backend', label: 'Backend', icon: SiGo, stack: backendStack, color: 'from-blue-500 to-cyan-500' },
  { id: 'devops', label: 'DevOps', icon: SiKubernetes, stack: devopsStack, color: 'from-purple-500 to-pink-500' },
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
                  'flex items-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base',
                  'transition-all duration-300',
                  'data-[state=inactive]:bg-dark-700/50 data-[state=inactive]:text-gray-400',
                  'data-[state=inactive]:hover:bg-dark-600/50',
                  'data-[state=active]:bg-gradient-to-r data-[state=active]:text-white',
                  'data-[state=active]:shadow-lg',
                  activeTab === tab.id && tab.color
                )}
              >
                <tab.icon className="w-5 h-5" />
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
                {tab.stack.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
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
                      <div className="flex flex-col items-center text-center">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                          style={{ backgroundColor: `${tech.color}20` }}
                        >
                          <IconComponent 
                            className="w-6 h-6" 
                            style={{ color: tech.color }}
                          />
                        </div>
                        <h4 className="font-semibold text-sm mb-1 group-hover:text-primary-400 transition-colors">
                          {tech.name}
                        </h4>
                        <p className="text-xs text-gray-500 hidden sm:block">
                          {tech.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}
