import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function About() {
  const { t } = useTranslation()

  const features = [
    {
      title: t('about.feature1.title'),
      description: t('about.feature1.description'),
    },
    {
      title: t('about.feature2.title'),
      description: t('about.feature2.description'),
    },
    {
      title: t('about.feature3.title'),
      description: t('about.feature3.description'),
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('about.description')}
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-primary-700 dark:text-primary-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-lg shadow-xl overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20"
          >
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Person */}
              <circle cx="200" cy="120" r="35" fill="#1e40af" className="dark:fill-primary-400" />
              <path
                d="M150 280 Q150 200 200 200 Q250 200 250 280 L250 400 L150 400 Z"
                fill="#1e40af"
                className="dark:fill-primary-400"
              />
              
              {/* Laptop */}
              <rect
                x="120"
                y="240"
                width="160"
                height="100"
                rx="8"
                fill="#ffffff"
                className="dark:fill-gray-800"
              />
              <rect
                x="130"
                y="250"
                width="140"
                height="80"
                rx="4"
                fill="#1e40af"
                className="dark:fill-primary-600"
                opacity="0.1"
              />
              <line
                x1="140"
                y1="270"
                x2="260"
                y2="270"
                stroke="#1e40af"
                className="dark:stroke-primary-400"
                strokeWidth="2"
              />
              <line
                x1="140"
                y1="290"
                x2="260"
                y2="290"
                stroke="#1e40af"
                className="dark:stroke-primary-400"
                strokeWidth="2"
              />
              <line
                x1="140"
                y1="310"
                x2="220"
                y2="310"
                stroke="#1e40af"
                className="dark:stroke-primary-400"
                strokeWidth="2"
              />
              
              {/* Code brackets */}
              <text
                x="100"
                y="280"
                fontSize="24"
                fill="#1e40af"
                className="dark:fill-primary-400"
                fontFamily="monospace"
                fontWeight="bold"
              >
                {'{'}
              </text>
              <text
                x="300"
                y="280"
                fontSize="24"
                fill="#1e40af"
                className="dark:fill-primary-400"
                fontFamily="monospace"
                fontWeight="bold"
              >
                {'}'}
              </text>
              
              {/* Floating elements */}
              <circle cx="80" cy="150" r="8" fill="#3b82f6" opacity="0.6" className="dark:fill-primary-400" />
              <circle cx="320" cy="180" r="6" fill="#60a5fa" opacity="0.6" className="dark:fill-primary-300" />
              <circle cx="90" cy="320" r="5" fill="#93c5fd" opacity="0.6" className="dark:fill-primary-200" />
              
              {/* Phone in hand */}
              <rect
                x="260"
                y="200"
                width="30"
                height="50"
                rx="4"
                fill="#ffffff"
                className="dark:fill-gray-800"
              />
              <rect
                x="265"
                y="210"
                width="20"
                height="30"
                rx="2"
                fill="#1e40af"
                className="dark:fill-primary-600"
                opacity="0.2"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

