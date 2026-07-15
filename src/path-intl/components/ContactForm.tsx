import { useState } from 'react'
import type { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

type FieldName = 'firstName' | 'lastName' | 'email' | 'subject' | 'message'

const emptyForm = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

const inputBase =
  'w-full rounded-md border bg-[#ebe7e1]/80 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-[#0f3d30]/30 focus:bg-white'

const subjectKeys = ['heart', 'nutrition', 'talks', 'other'] as const

export default function ContactForm() {
  const { t } = useTranslation()
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState<Partial<Record<FieldName, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)

  const updateField = (name: FieldName, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }))
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Partial<Record<FieldName, boolean>> = {
      firstName: !form.firstName.trim(),
      lastName: !form.lastName.trim(),
      email: !form.email.trim(),
      subject: !form.subject.trim(),
      message: !form.message.trim(),
    }
    setErrors(nextErrors)

    if (Object.values(nextErrors).some(Boolean)) {
      setSubmitted(false)
      return
    }

    setSubmitted(true)
    setForm(emptyForm)
  }

  const fieldClass = (name: FieldName) =>
    `${inputBase} ${errors[name] ? 'border-red-500' : 'border-transparent'}`

  return (
    <section id="contact" className="bg-[#faf8f5] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-[#e08b46] uppercase">
          {t('contacto.eyebrow')}
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b2c4a] sm:text-4xl">
          {t('contacto.title')}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">{t('contacto.description')}</p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-xl space-y-5" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="sr-only">
              {t('contacto.fields.firstName')}
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder={t('contacto.fields.firstName')}
              value={form.firstName}
              onChange={(e) => updateField('firstName', e.target.value)}
              className={fieldClass('firstName')}
            />
            {errors.firstName && (
              <p className="mt-1.5 text-left text-xs text-red-600">{t('contacto.required')}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="sr-only">
              {t('contacto.fields.lastName')}
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder={t('contacto.fields.lastName')}
              value={form.lastName}
              onChange={(e) => updateField('lastName', e.target.value)}
              className={fieldClass('lastName')}
            />
            {errors.lastName && (
              <p className="mt-1.5 text-left text-xs text-red-600">{t('contacto.required')}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            {t('contacto.fields.email')}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={t('contacto.fields.email')}
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            className={fieldClass('email')}
          />
          {errors.email && (
            <p className="mt-1.5 text-left text-xs text-red-600">{t('contacto.required')}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="sr-only">
            {t('contacto.fields.subject')}
          </label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={(e) => updateField('subject', e.target.value)}
            className={`${fieldClass('subject')} appearance-none`}
          >
            <option value="" disabled>
              {t('contacto.subjects.placeholder')}
            </option>
            {subjectKeys.map((key) => (
              <option key={key} value={key}>
                {t(`contacto.subjects.${key}`)}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p className="mt-1.5 text-left text-xs text-red-600">{t('contacto.required')}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            {t('contacto.fields.message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder={t('contacto.fields.message')}
            value={form.message}
            onChange={(e) => updateField('message', e.target.value)}
            className={`${fieldClass('message')} resize-y`}
          />
          {errors.message && (
            <p className="mt-1.5 text-left text-xs text-red-600">{t('contacto.required')}</p>
          )}
        </div>

        {submitted && (
          <p className="text-sm font-medium text-emerald-700">{t('contacto.success')}</p>
        )}

        <button
          type="submit"
          className="rounded-full bg-[#e08b46] px-8 py-3 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-[#c97a3b]"
        >
          {t('contacto.submitLabel')}
        </button>
      </form>
    </section>
  )
}
