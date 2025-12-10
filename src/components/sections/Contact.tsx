import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-8">{t('contact.info.title')}</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-medium mb-4 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2 text-primary-700 dark:text-primary-400" />
                  {t('contact.info.email')}
                </h4>
                <a
                  href="mailto:developmentsemicolon@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors text-lg"
                >
                  developmentsemicolon@gmail.com
                </a>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">{t('contact.info.social')}</h4>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://www.linkedin.com/company/semicolondev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-8 h-8" />
                  </a>
                  <a
                    href="https://github.com/developmentsemicolon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

