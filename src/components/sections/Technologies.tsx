import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { technologies } from '../../data/technologies'
import { ExternalLink } from 'lucide-react'

export default function Technologies() {
  const { t, i18n } = useTranslation()

  const categories = ['ai', 'frontend', 'backend', 'database', 'cloud', 'mobile'] as const

  const getCategoryTechs = (category: typeof categories[number]) => {
    return technologies.filter((tech) => tech.category === category)
  }

  return (
    <section id="technologies" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('technologies.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('technologies.subtitle')}
          </p>
        </div>

        {categories.map((category, categoryIndex) => {
          const categoryTechs = getCategoryTechs(category)
          if (categoryTechs.length === 0) return null

          return (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-primary-700 dark:text-primary-400">
                {t(`technologies.categories.${category}`)}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categoryTechs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: (categoryIndex * 0.1) + (techIndex * 0.05),
                    }}
                    className={`group relative bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-2 transition-all hover:border-primary-500 hover:shadow-lg ${
                      tech.featured
                        ? 'border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-transparent'
                    }`}
                  >
                    {tech.featured && (
                      <span className="absolute top-2 right-2 text-xs bg-primary-500 text-white px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-lg">{tech.name}</h4>
                      {tech.link && (
                        <a
                          href={tech.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {tech.description[i18n.language as 'en' | 'pt' | 'es']}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
