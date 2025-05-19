'use client'; // Označení jako klientská komponenta pro interaktivitu

import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  branch: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    branch: 'ostrava'
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Vyčistit chybu při změně hodnoty
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Jméno je povinné';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail je povinný';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Neplatný formát e-mailu';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Předmět je povinný';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Zpráva je povinná';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus({ type: 'loading', message: 'Odesílám...' });

    try {
      // Vytvoření FormData objektu pro Netlify Forms
      const formElement = e.target as HTMLFormElement;
      const formData = new FormData(formElement);

      // Zajistíme, že form-name je správně nastaveno
      formData.set('form-name', 'contact');

      // Odeslání formuláře pomocí fetch API s FormData
      const response = await fetch('/', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Nastala chyba při odesílání formuláře.');
      }

      setStatus({ type: 'success', message: 'Zpráva úspěšně odeslána!' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        branch: 'ostrava'
      });
    } catch (error) {
      console.error('Chyba při odesílání formuláře:', error);
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Nastala chyba při odesílání.' });
    }
  };

  return (
    <div className="p-8">
      {status.type === 'loading' && (
        <div className="mb-6 p-4 bg-[#F5F3F0] text-[#121212] rounded-sm border-2 border-[#E6CCB2]/40 shadow-sm">
          {status.message}
        </div>
      )}

      {status.type === 'success' && (
        <div className="mb-6 p-4 bg-[#F5F3F0] text-[#121212] rounded-sm border-2 border-[#E6CCB2]/40 shadow-sm">
          {status.message}
        </div>
      )}

      {status.type === 'error' && (
        <div className="mb-6 p-4 bg-[#F5F3F0] text-[#121212] rounded-sm border-2 border-[#E6CCB2]/40 shadow-sm">
          {status.message}
        </div>
      )}

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/kontakt/?success=true"
        onSubmit={handleSubmit}
      >
        {/* Skryté pole pro Netlify Forms */}
        <input type="hidden" name="form-name" value="contact" />
        <div className="hidden">
          <label>
            Nevyplňujte toto pole, pokud jste člověk: <input name="bot-field" />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-[#121212] text-sm uppercase tracking-wider font-medium mb-2">
              Jméno a příjmení *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Vaše jméno"
              className={`w-full px-4 py-3 border-2 ${errors.name ? 'border-[#C9B8A8]' : 'border-[#E6CCB2]/40'} rounded-sm focus:outline-none focus:border-[#C9B8A8] bg-white font-light text-[#121212]`}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-[#C9B8A8]">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-[#121212] text-sm uppercase tracking-wider font-medium mb-2">
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="vas@email.cz"
              className={`w-full px-4 py-3 border-2 ${errors.email ? 'border-[#C9B8A8]' : 'border-[#E6CCB2]/40'} rounded-sm focus:outline-none focus:border-[#C9B8A8] bg-white font-light text-[#121212]`}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-[#C9B8A8]">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="phone" className="block text-[#121212] text-sm uppercase tracking-wider font-medium mb-2">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+420 XXX XXX XXX"
              className="w-full px-4 py-3 border-2 border-[#E6CCB2]/40 rounded-sm focus:outline-none focus:border-[#C9B8A8] bg-white font-light text-[#121212]"
            />
            <input type="hidden" name="branch" value={formData.branch} />
          </div>

          <div>
            <label htmlFor="subject" className="block text-[#121212] text-sm uppercase tracking-wider font-medium mb-2">
              Předmět *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Předmět zprávy"
              className={`w-full px-4 py-3 border-2 ${errors.subject ? 'border-[#C9B8A8]' : 'border-[#E6CCB2]/40'} rounded-sm focus:outline-none focus:border-[#C9B8A8] bg-white font-light text-[#121212]`}
              aria-invalid={errors.subject ? 'true' : 'false'}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
            />
            {errors.subject && (
              <p id="subject-error" className="mt-1 text-sm text-[#C9B8A8]">
                {errors.subject}
              </p>
            )}
          </div>
        </div>

        <div className="mb-8">
          <label htmlFor="message" className="block text-[#121212] text-sm uppercase tracking-wider font-medium mb-2">
            Zpráva *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Text vaší zprávy..."
            className={`w-full px-4 py-3 border-2 ${errors.message ? 'border-[#C9B8A8]' : 'border-[#E6CCB2]/40'} rounded-sm focus:outline-none focus:border-[#C9B8A8] bg-white font-light text-[#121212]`}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          ></textarea>
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-[#C9B8A8]">
              {errors.message}
            </p>
          )}
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm text-[#121212] font-light">
            * Povinné pole
          </p>

          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="bg-[#E6CCB2] hover:bg-[#D8C3B0] text-[#121212] font-light py-3 px-8 rounded-sm transition-all duration-300 border-2 border-[#E6CCB2] inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide shadow-sm"
          >
            {status.type === 'loading' ? 'Odesílání...' : 'Odeslat zprávu'}
            {status.type !== 'loading' && <Send className="ml-3 h-5 w-5" />}
          </button>
        </div>
      </form>
    </div>
  );
}
