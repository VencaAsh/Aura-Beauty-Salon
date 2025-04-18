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

  // Používáme pobočky z konstant

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Neznámá chyba serveru.');
      }

      setStatus({ type: 'success', message: result.message || 'Zpráva úspěšně odeslána!' });
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
    <div className="p-6">
      {status.type === 'loading' && (
        <div className="mb-6 p-4 bg-[#F5F3F0] text-[#121212] rounded-sm border border-[#E6CCB2]/30">
          {status.message}
        </div>
      )}

      {status.type === 'success' && (
        <div className="mb-6 p-4 bg-[#F5F3F0] text-[#121212] rounded-sm border border-[#E6CCB2]/30">
          {status.message}
        </div>
      )}

      {status.type === 'error' && (
        <div className="mb-6 p-4 bg-[#F5F3F0] text-[#121212] rounded-sm border border-[#E6CCB2]/30">
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
              className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-[#E6CCB2]/30'} rounded-sm focus:outline-none focus:ring-1 focus:ring-[#E6CCB2] bg-[#F5F3F0]/30 font-light`}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-500">
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
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-[#E6CCB2]/30'} rounded-sm focus:outline-none focus:ring-1 focus:ring-[#E6CCB2] bg-[#F5F3F0]/30 font-light`}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-[#121212] text-sm uppercase tracking-wider font-medium mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#E6CCB2]/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#E6CCB2] bg-[#F5F3F0]/30 font-light"
          />
          <input type="hidden" name="branch" value={formData.branch} />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-[#121212] text-sm uppercase tracking-wider font-medium mb-2">
            Předmět *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${errors.subject ? 'border-red-500' : 'border-[#E6CCB2]/30'} rounded-sm focus:outline-none focus:ring-1 focus:ring-[#E6CCB2] bg-[#F5F3F0]/30 font-light`}
            aria-invalid={errors.subject ? 'true' : 'false'}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-sm text-red-500">
              {errors.subject}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-[#121212] text-sm uppercase tracking-wider font-medium mb-2">
            Zpráva *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-[#E6CCB2]/30'} rounded-sm focus:outline-none focus:ring-1 focus:ring-[#E6CCB2] bg-[#F5F3F0]/30 font-light`}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          ></textarea>
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="bg-[#E6CCB2]/80 hover:bg-[#E6CCB2] text-[#121212] font-light py-3 px-6 rounded-sm transition-all duration-300 border border-[#E6CCB2]/20 inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide"
        >
          {status.type === 'loading' ? 'Odesílání...' : 'Odeslat zprávu'}
          {status.type !== 'loading' && <Send className="ml-3 h-5 w-5 text-[#C9B8A8]" />}
        </button>

        <p className="mt-4 text-sm text-brand-secondary-dark font-light">
          * Povinné pole
        </p>
      </form>
    </div>
  );
}
