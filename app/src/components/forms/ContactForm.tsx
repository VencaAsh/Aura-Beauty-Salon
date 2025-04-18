'use client'; // Označení jako klientská komponenta pro interaktivitu

import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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
        message: ''
      });
    } catch (error) {
      console.error('Chyba při odesílání formuláře:', error);
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Nastala chyba při odesílání.' });
    }
  };

  return (
    <div className="bg-[#F9F7F5] border border-[#E6CCB2]/20 p-8">
      <h3 className="text-lg font-light mb-6 text-[#121212]">Napište nám</h3>

      {status.type === 'loading' && (
        <div className="mb-6 p-4 bg-[#F5F3F0] text-[#121212]/80 border border-[#E6CCB2]/30 font-light">
          {status.message}
        </div>
      )}

      {status.type === 'success' && (
        <div className="mb-6 p-4 bg-[#F5F3F0] text-[#121212]/80 border border-[#E6CCB2]/30 font-light">
          {status.message}
        </div>
      )}

      {status.type === 'error' && (
        <div className="mb-6 p-4 bg-[#F5F3F0] text-[#121212]/80 border border-[#E6CCB2]/30 font-light">
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-[#121212]/80 font-light text-sm mb-2">
              Jméno a příjmení *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Vaše jméno"
              className={`w-full px-3 py-2 border ${errors.name ? 'border-[#C9B8A8]/50' : 'border-[#E6CCB2]/20'} bg-white/80 font-light text-[#121212] focus:outline-none focus:border-[#C9B8A8] transition-colors duration-300`}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-[#121212]/70 font-light">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-[#121212]/80 font-light text-sm mb-2">
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="vas@email.cz"
              className={`w-full px-3 py-2 border ${errors.email ? 'border-[#C9B8A8]/50' : 'border-[#E6CCB2]/20'} bg-white/80 font-light text-[#121212] focus:outline-none focus:border-[#C9B8A8] transition-colors duration-300`}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-[#121212]/70 font-light">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-[#121212]/80 font-light text-sm mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+420 xxx xxx xxx"
            className="w-full px-3 py-2 border border-[#E6CCB2]/20 bg-white/80 font-light text-[#121212] focus:outline-none focus:border-[#C9B8A8] transition-colors duration-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-[#121212]/80 font-light text-sm mb-2">
            Předmět *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Předmět zprávy"
            className={`w-full px-3 py-2 border ${errors.subject ? 'border-[#C9B8A8]/50' : 'border-[#E6CCB2]/20'} bg-white/80 font-light text-[#121212] focus:outline-none focus:border-[#C9B8A8] transition-colors duration-300`}
            aria-invalid={errors.subject ? 'true' : 'false'}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-xs text-[#121212]/70 font-light">
              {errors.subject}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-[#121212]/80 font-light text-sm mb-2">
            Zpráva *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Text vaší zprávy..."
            className={`w-full px-3 py-2 border ${errors.message ? 'border-[#C9B8A8]/50' : 'border-[#E6CCB2]/20'} bg-white/80 font-light text-[#121212] focus:outline-none focus:border-[#C9B8A8] transition-colors duration-300`}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          ></textarea>
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-[#121212]/70 font-light">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="relative inline-block group overflow-hidden mt-2"
        >
          <span className="relative z-10 inline-flex items-center font-light tracking-widest text-xs uppercase py-3 px-10 border border-[#C9B8A8]/50 transition-all duration-500">
            {status.type === 'loading' ? 'Odesílání...' : 'Odeslat zprávu'}
            {status.type !== 'loading' && <Send className="ml-2 h-4 w-4" />}
          </span>
          <div className="absolute inset-0 bg-[#C9B8A8]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </button>

        <p className="mt-4 text-xs text-[#121212]/50 font-light">
          * Povinné pole
        </p>
      </form>
    </div>
  );
}
