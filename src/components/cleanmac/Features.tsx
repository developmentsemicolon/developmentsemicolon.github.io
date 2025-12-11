import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const features = [
  { icon: '💾', key: 'system' },
  { icon: '🌐', key: 'browser' },
  { icon: '🗑️', key: 'temp' },
  { icon: '📋', key: 'logs' },
  { icon: '💻', key: 'dev' },
  { icon: '🗂️', key: 'trash' },
  { icon: '⏰', key: 'schedule' },
]

export default function Features() {
  const { t } = useTranslation()

  return (
    <section id="features" className="py-[100px] px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="text-center mb-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[42px] font-bold mb-4 text-gray-900">
            {t('cleanmac.features_title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('cleanmac.features_subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[50px]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              className="group bg-white py-[45px] px-[35px] rounded-3xl text-center shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-[400ms] border border-gray-200 relative overflow-hidden hover:translate-y-[-10px] hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(139,92,246,0.2)] hover:border-purple-600/30"
              style={{ transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-600/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 pointer-events-none"></div>
              
              <div className="text-[64px] mb-6 inline-block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-colors duration-300 group-hover:text-purple-600">
                {t(`cleanmac.feature_${feature.key}_title`)}
              </h3>
              <p className="text-base text-gray-600 leading-[1.8]">
                {t(`cleanmac.feature_${feature.key}_desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

