'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Send } from 'lucide-react';

export default function SimpleContactForm() {
  const searchParams = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (searchParams.has('success')) {
      setShowSuccess(true);
    }
  }, [searchParams]);

  return (
    <div className="p-8">
      {showSuccess ? (
        <div className="mb-6 p-4 bg-[#F5F3F0] text-[#121212] rounded-sm border-2 border-[#E6CCB2]/40 shadow-sm">
          Zpráva úspěšně odeslána! Děkujeme za kontaktování.
        </div>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/kontakt-formular/?success=true"
        >
          {/* Skryté pole pro Netlify Forms */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot pole pro ochranu proti spamu */}
          <div style={{ display: 'none' }}>
            <label>
              Nevyplňujte toto pole: <input name="bot-field" />
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
                placeholder="Vaše jméno"
                className="w-full px-4 py-3 border-2 border-[#E6CCB2]/40 rounded-sm focus:outline-none focus:border-[#C9B8A8] bg-white font-light text-[#121212]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#121212] text-sm uppercase tracking-wider font-medium mb-2">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="vas@email.cz"
                className="w-full px-4 py-3 border-2 border-[#E6CCB2]/40 rounded-sm focus:outline-none focus:border-[#C9B8A8] bg-white font-light text-[#121212]"
                required
              />
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
                placeholder="+420 XXX XXX XXX"
                className="w-full px-4 py-3 border-2 border-[#E6CCB2]/40 rounded-sm focus:outline-none focus:border-[#C9B8A8] bg-white font-light text-[#121212]"
              />
              <input type="hidden" name="branch" value="ostrava" />
            </div>

            <div>
              <label htmlFor="subject" className="block text-[#121212] text-sm uppercase tracking-wider font-medium mb-2">
                Předmět *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Předmět zprávy"
                className="w-full px-4 py-3 border-2 border-[#E6CCB2]/40 rounded-sm focus:outline-none focus:border-[#C9B8A8] bg-white font-light text-[#121212]"
                required
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-[#121212] text-sm uppercase tracking-wider font-medium mb-2">
              Zpráva *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Text vaší zprávy..."
              className="w-full px-4 py-3 border-2 border-[#E6CCB2]/40 rounded-sm focus:outline-none focus:border-[#C9B8A8] bg-white font-light text-[#121212]"
              required
            ></textarea>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm text-[#121212] font-light">
              * Povinné pole
            </p>

            <button
              type="submit"
              className="bg-[#E6CCB2] hover:bg-[#D8C3B0] text-[#121212] font-light py-3 px-8 rounded-sm transition-all duration-300 border-2 border-[#E6CCB2] inline-flex items-center text-sm tracking-wide shadow-sm"
            >
              Odeslat zprávu
              <Send className="ml-3 h-5 w-5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
