import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initial: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.subject.trim()) errors.subject = 'Please add a subject.'
  if (!values.message.trim()) {
    errors.message = 'Please enter a message.'
  } else if (values.message.trim().length < 20) {
    errors.message = 'Message should be at least 20 characters.'
  }
  return errors
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initial)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    field: keyof FormState,
    value: string,
  ) {
    setValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSubmitted(true)
      setValues(initial)
    }
  }

  if (submitted) {
    return (
      <div
        className="flex flex-col items-start gap-4 border border-line bg-white p-8"
        role="status"
      >
        <CheckCircle2 className="text-copper" size={36} aria-hidden />
        <div>
          <h3 className="font-display text-2xl font-bold text-navy">
            Message received
          </h3>
          <p className="mt-2 text-ink-muted leading-relaxed">
            Thank you for reaching out. A member of the Ovwspelo team will
            respond within one business day.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-copper hover:text-copper-hover"
        >
          Send another message
        </button>
      </div>
    )
  }

  const fieldClass =
    'mt-1.5 w-full border border-line bg-surface px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-steel'

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-line bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-navy">
            Full name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-sm text-copper">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-sm text-copper">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="text-sm font-semibold text-navy">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          value={values.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          className={fieldClass}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject ? (
          <p id="subject-error" className="mt-1.5 text-sm text-copper">
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={`${fieldClass} resize-y`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-copper">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-copper px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-copper-hover sm:w-auto"
      >
        Send message
      </button>
    </form>
  )
}
