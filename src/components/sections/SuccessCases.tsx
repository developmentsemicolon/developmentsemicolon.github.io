import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { successCases } from '../../data/successCases'
import { ExternalLink } from 'lucide-react'

export default function SuccessCases() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language as 'en' | 'pt' | 'es'

  return (
    <section id="cases" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('successCases.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('successCases.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {successCases.map((caseItem, index) => (
            <motion.a
              key={caseItem.id}
              href={caseItem.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-500 dark:hover:border-primary-400"
            >
              {caseItem.featured && (
                <span className="absolute top-2 right-2 text-xs bg-primary-500 text-white px-2 py-1 rounded z-10">
                  Featured
                </span>
              )}
              <div className="flex flex-col items-center justify-center h-full min-h-[120px]">
                {caseItem.id === 'goprimy' ? (
                  <div className="w-full max-h-12 object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                    <a href="https://goprimy.com/#home" class="flex items-center space-x-4 hover:opacity-80 transition-opacity duration-200"><div class="w-11 h-11 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles w-6 h-6 text-white"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg></div><span class="text-2xl font-black text-slate-900 tracking-tight">GoPrimy</span></a>
                  </div>
                ) : (
                  <img
                    src={caseItem.companyLogo}
                    alt={caseItem.companyName}
                    className="w-full max-h-12 object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                  {caseItem.description[currentLang]}
                </p>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

