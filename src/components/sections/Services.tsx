import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Code, Smartphone, Server, Brain } from 'lucide-react'

export default function Services() {
  const { t } = useTranslation()

  const services = [
    {
      icon: Code,
      title: t('services.web.title'),
      description: t('services.web.description'),
      items: [
        t('services.web.items.0'),
        t('services.web.items.1'),
        t('services.web.items.2'),
      ],
    },
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      items: [
        t('services.mobile.items.0'),
        t('services.mobile.items.1'),
        t('services.mobile.items.2'),
      ],
    },
    {
      icon: Server,
      title: t('services.backend.title'),
      description: t('services.backend.description'),
      items: [
        t('services.backend.items.0'),
        t('services.backend.items.1'),
        t('services.backend.items.2'),
      ],
    },
    {
      icon: Brain,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      items: [
        t('services.ai.items.0'),
        t('services.ai.items.1'),
        t('services.ai.items.2'),
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-primary-700 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm">
                      <svg
                        className="h-5 w-5 text-primary-700 dark:text-primary-400 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

