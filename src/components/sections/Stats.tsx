import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Stats() {
  const { t } = useTranslation()

  const stats = [
    { value: '8+', label: t('stats.experience') },
    { value: '50+', label: t('stats.projects') },
    { value: '30+', label: t('stats.clients') },
    { value: '100%', label: t('stats.commitment') },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold text-primary-700 dark:text-primary-400 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

