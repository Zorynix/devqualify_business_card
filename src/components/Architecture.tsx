import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { 
  Database, 
  Smartphone, 
  Cloud,
  ArrowRight,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

const services = [
  { 
    name: 'Auth Service', 
    description: 'JWT аутентификация, управление сессиями',
    icon: Shield,
    color: 'from-red-500 to-orange-500'
  },
  { 
    name: 'Test Service', 
    description: 'Тесты, вопросы, оценка результатов',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    name: 'User Service', 
    description: 'Профили, достижения, статистика',
    icon: Globe,
    color: 'from-green-500 to-emerald-500'
  },
  { 
    name: 'Article Service', 
    description: 'Статьи по интересующим технологиям',
    icon: Database,
    color: 'from-purple-500 to-pink-500'
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
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
            Архитектура
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Микросервисная
            <span className="text-gradient"> архитектура</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Масштабируемая клиент-серверная архитектура с 4 независимыми микросервисами на Golang
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="relative">
          {/* Main Container */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8 items-center"
          >
            {/* Client Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className={cn(
                'w-full max-w-sm p-6 rounded-2xl',
                'bg-gradient-to-br from-dark-700 to-dark-800',
                'border border-dark-600',
                'shadow-2xl'
              )}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Smartphone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Android Client</h3>
                    <p className="text-sm text-gray-400">Kotlin + Jetpack Compose</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {['MVVM Architecture', 'Dagger Hilt DI', 'Retrofit + Protobuf', 'Material Design 3'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Connection Arrow (Desktop) */}
            <div className="hidden lg:flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="w-24 h-0.5 bg-gradient-to-r from-green-500 to-primary-500" />
                <div className="px-4 py-2 rounded-lg glass text-sm font-medium text-primary-400">
                  gRPC / REST
                </div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500" />
              </motion.div>
            </div>

            {/* Connection Arrow (Mobile) */}
            <div className="flex lg:hidden items-center justify-center py-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2"
              >
                <ArrowRight className="w-6 h-6 text-primary-500 rotate-90" />
                <span className="text-sm text-gray-400">gRPC / REST</span>
                <ArrowRight className="w-6 h-6 text-primary-500 rotate-90" />
              </motion.div>
            </div>

            {/* Backend Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className={cn(
                'w-full max-w-sm p-6 rounded-2xl',
                'bg-gradient-to-br from-dark-700 to-dark-800',
                'border border-dark-600',
                'shadow-2xl'
              )}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Cloud className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Backend</h3>
                    <p className="text-sm text-gray-400">Golang Microservices</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {['4 Microservices', 'gRPC + Protobuf', 'PostgreSQL + Neo4j', 'Kubernetes Ready'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Microservices Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Микросервисы</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={cn(
                    'group p-6 rounded-2xl',
                    'bg-dark-800/50 border border-dark-600/50',
                    'hover:border-primary-500/30',
                    'transition-all duration-300'
                  )}
                >
                  <div className={cn(
                    'w-12 h-12 rounded-xl mb-4 flex items-center justify-center',
                    'bg-gradient-to-br', service.color
                  )}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                    {service.name}
                  </h4>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Infrastructure Icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-8">Инфраструктура</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Docker', 'Kubernetes', 'Helm', 'Prometheus', 
                'Grafana', 'Loki', 'GitLab CI/CD', 'Redpanda'
              ].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1 }}
                  className={cn(
                    'px-4 py-2 rounded-xl',
                    'bg-dark-700/50 border border-dark-600/50',
                    'text-sm font-medium text-gray-300',
                    'hover:border-primary-500/30 hover:text-primary-400',
                    'transition-all duration-300 cursor-default'
                  )}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
