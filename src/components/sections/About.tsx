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
            className="bg-gradient-to-br from-primary-900 to-primary-700 h-96 rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}

