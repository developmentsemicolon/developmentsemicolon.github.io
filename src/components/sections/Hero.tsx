import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 to-primary-700 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container-custom text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          {t('hero.title')}
          <span className="block text-primary-400">{t('hero.titleHighlight')}</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-white text-primary-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-100 transition-colors"
          >
            {t('hero.cta1')}
          </a>
          <a
            href="#services"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-900 transition-colors"
          >
            {t('hero.cta2')}
          </a>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#services" className="animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </a>
      </motion.div>
    </section>
  )
}

