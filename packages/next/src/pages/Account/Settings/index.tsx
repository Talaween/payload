'use client'
import { Label, ReactSelect } from '@payloadcms/ui'
import { useTranslation } from '@payloadcms/ui/providers'
import React from 'react'

import { ToggleTheme } from '../ToggleTheme'
import './index.scss'

const baseClass = 'payload-settings'

export const Settings: React.FC<{
  className?: string
}> = (props) => {
  const { className } = props

  const { i18n, languageOptions, t } = useTranslation()

  return (
    <div className={[baseClass, className].filter(Boolean).join(' ')}>
      <h3>{t('general:payloadSettings')}</h3>
      <div className={`${baseClass}__language`}>
        <Label htmlFor="language-select" label={t('general:language')} />
        <ReactSelect
          inputId="language-select"
          // TODO(i18n): wire up onChange / changeLanguage fn
          // onChange={({ value }) => i18n.changeLanguage(value)}
          options={languageOptions}
          value={languageOptions.find((language) => language.value === i18n.language)}
        />
      </div>
      <ToggleTheme />
    </div>
  )
}
