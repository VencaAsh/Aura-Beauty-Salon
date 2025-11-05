'use client';

import React, { useState } from 'react';
import { Calendar, Clock, User, MapPin, Scissors, CalendarCheck } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  branch: string;
  service: string;
  specialist: string;
  date: string;
  time: string;
  notes: string;
}

export default function ReservationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    branch: 'brno-reckovice',
    service: '',
    specialist: '',
    date: '',
    time: '',
    notes: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });
  
  const branches = [
    { id: 'brno-reckovice', name: 'Brno - Řečkovice' },
    { id: 'brno-husovice', name: 'Brno - Husovice' },
    { id: 'praha-nove-mesto', name: 'Praha - Nové Město' }
  ];
  
  const services = [
    { id: 'kosmetika', name: 'Kosmetika', specialists: ['Anna Nováková', 'Petra Svobodová'] },
    { id: 'manikura', name: 'Manikúra', specialists: ['Jana Dvořáková', 'Lucie Černá'] },
    { id: 'pedikura', name: 'Pedikúra', specialists: ['Martina Veselá', 'Tereza Horáková'] },
    { id: 'pristrojove-osetreni', name: 'Přístrojové ošetření', specialists: ['Anna Nováková', 'Petra Svobodová'] },
    { id: 'laser-epilace', name: 'Laser Delighter & Epilace Lycon', specialists: ['Jana Dvořáková', 'Lucie Černá'] },
    { id: 'rasy-oboci', name: 'Řasy a obočí', specialists: ['Martina Veselá', 'Tereza Horáková'] },
    { id: 'masaze-slim-body', name: 'Masáže & Slim Body', specialists: ['Anna Nováková', 'Petra Svobodová'] },
    { id: 'kadernictvi', name: 'Kadeřnictví', specialists: ['Jana Dvořáková', 'Lucie Černá'] }
  ];
  
  // Dostupné časy pro rezervaci
  const availableTimes = [
    '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', 
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', 
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Vyčistit chybu při změně hodnoty
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    
    // Pokud se změní služba, resetujeme specialistu
    if (name === 'service') {
      setFormData(prev => ({ ...prev, specialist: '' }));
    }
  };
  
  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (currentStep === 1) {
      if (!formData.branch) {
        newErrors.branch = 'Vyberte pobočku';
      }
      if (!formData.service) {
        newErrors.service = 'Vyberte službu';
      }
      if (!formData.specialist) {
        newErrors.specialist = 'Vyberte specialistu';
      }
    } else if (currentStep === 2) {
      if (!formData.date) {
        newErrors.date = 'Vyberte datum';
      }
      if (!formData.time) {
        newErrors.time = 'Vyberte čas';
      }
    } else if (currentStep === 3) {
      if (!formData.name.trim()) {
        newErrors.name = 'Jméno je povinné';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'E-mail je povinný';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Neplatný formát e-mailu';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Telefon je povinný';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };
  
  const handlePrevious = () => {
    setStep(prev => prev - 1);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(3)) {
      return;
    }
    
    setStatus({ type: 'loading', message: 'Odesílám rezervaci...' });
    
    try {
      // TODO: Implement API endpoint for reservation submission
      // The commented code below shows the intended API integration structure
      // Uncomment and configure when backend API is ready

      // const response = await fetch('/api/reservation', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // const result = await response.json();
      // if (!response.ok) {
      //   throw new Error(result.error || 'Neznámá chyba serveru.');
      // }

      // Temporary: Simulate successful submission (remove when API is implemented)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus({ type: 'success', message: 'Vaše rezervace byla úspěšně odeslána! Potvrzení jsme vám zaslali na e-mail.' });
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') console.error('Chyba při odesílání rezervace:', error);
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Nastala chyba při odesílání rezervace.' });
    }
  };
  
  // Získání specialistů pro vybranou službu
  const getSpecialistsForService = () => {
    const selectedService = services.find(service => service.id === formData.service);
    return selectedService ? selectedService.specialists : [];
  };
  
  // Formátování data pro zobrazení
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-brand-secondary-light p-6">
      <h2 className="text-2xl font-semibold text-brand-primary mb-6">Online rezervace</h2>
      
      {status.type === 'loading' && (
        <div className="mb-6 p-4 bg-blue-50 text-blue-700 rounded-md">
          {status.message}
        </div>
      )}
      
      {status.type === 'success' && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
          {status.message}
        </div>
      )}
      
      {status.type === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
          {status.message}
        </div>
      )}
      
      {status.type !== 'success' && (
        <>
          {/* Kroky rezervace */}
          <div className="flex mb-8">
            <div className={`flex-1 text-center ${step >= 1 ? 'text-brand-primary' : 'text-brand-secondary-dark'}`}>
              <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${step >= 1 ? 'bg-brand-primary text-white' : 'bg-brand-secondary-light text-brand-secondary-dark'}`}>
                1
              </div>
              <p className="text-sm">Služba</p>
            </div>
            <div className={`flex-1 text-center ${step >= 2 ? 'text-brand-primary' : 'text-brand-secondary-dark'}`}>
              <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${step >= 2 ? 'bg-brand-primary text-white' : 'bg-brand-secondary-light text-brand-secondary-dark'}`}>
                2
              </div>
              <p className="text-sm">Termín</p>
            </div>
            <div className={`flex-1 text-center ${step >= 3 ? 'text-brand-primary' : 'text-brand-secondary-dark'}`}>
              <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${step >= 3 ? 'bg-brand-primary text-white' : 'bg-brand-secondary-light text-brand-secondary-dark'}`}>
                3
              </div>
              <p className="text-sm">Kontakt</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Krok 1: Výběr služby */}
            {step === 1 && (
              <div>
                <h3 className="text-xl font-medium text-brand-black mb-4">Vyberte službu a specialistu</h3>
                
                <div className="mb-4">
                  <label htmlFor="branch" className="flex items-center text-brand-black font-medium mb-1">
                    <MapPin className="w-4 h-4 mr-2" />
                    Pobočka *
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.branch ? 'border-red-500' : 'border-brand-secondary-light'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                    aria-invalid={errors.branch ? 'true' : 'false'}
                    aria-describedby={errors.branch ? 'branch-error' : undefined}
                  >
                    <option value="">Vyberte pobočku</option>
                    {branches.map(branch => (
                      <option key={branch.id} value={branch.id}>
                        {branch.name}
                      </option>
                    ))}
                  </select>
                  {errors.branch && (
                    <p id="branch-error" className="mt-1 text-sm text-red-500">
                      {errors.branch}
                    </p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="flex items-center text-brand-black font-medium mb-1">
                    <Scissors className="w-4 h-4 mr-2" />
                    Služba *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.service ? 'border-red-500' : 'border-brand-secondary-light'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                    aria-invalid={errors.service ? 'true' : 'false'}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                  >
                    <option value="">Vyberte službu</option>
                    {services.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="service-error" className="mt-1 text-sm text-red-500">
                      {errors.service}
                    </p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="specialist" className="flex items-center text-brand-black font-medium mb-1">
                    <User className="w-4 h-4 mr-2" />
                    Specialista *
                  </label>
                  <select
                    id="specialist"
                    name="specialist"
                    value={formData.specialist}
                    onChange={handleChange}
                    disabled={!formData.service}
                    className={`w-full px-3 py-2 border ${errors.specialist ? 'border-red-500' : 'border-brand-secondary-light'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary ${!formData.service ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                    aria-invalid={errors.specialist ? 'true' : 'false'}
                    aria-describedby={errors.specialist ? 'specialist-error' : undefined}
                  >
                    <option value="">Vyberte specialistu</option>
                    {formData.service && getSpecialistsForService().map((specialist, index) => (
                      <option key={index} value={specialist}>
                        {specialist}
                      </option>
                    ))}
                  </select>
                  {errors.specialist && (
                    <p id="specialist-error" className="mt-1 text-sm text-red-500">
                      {errors.specialist}
                    </p>
                  )}
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold py-2 px-6 rounded-md transition duration-300"
                  >
                    Pokračovat
                  </button>
                </div>
              </div>
            )}
            
            {/* Krok 2: Výběr termínu */}
            {step === 2 && (
              <div>
                <h3 className="text-xl font-medium text-brand-black mb-4">Vyberte termín</h3>
                
                <div className="mb-4">
                  <label htmlFor="date" className="flex items-center text-brand-black font-medium mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Datum *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]} // Minimální datum je dnes
                    className={`w-full px-3 py-2 border ${errors.date ? 'border-red-500' : 'border-brand-secondary-light'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                    aria-invalid={errors.date ? 'true' : 'false'}
                    aria-describedby={errors.date ? 'date-error' : undefined}
                  />
                  {errors.date && (
                    <p id="date-error" className="mt-1 text-sm text-red-500">
                      {errors.date}
                    </p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="time" className="flex items-center text-brand-black font-medium mb-1">
                    <Clock className="w-4 h-4 mr-2" />
                    Čas *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    disabled={!formData.date}
                    className={`w-full px-3 py-2 border ${errors.time ? 'border-red-500' : 'border-brand-secondary-light'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary ${!formData.date ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                    aria-invalid={errors.time ? 'true' : 'false'}
                    aria-describedby={errors.time ? 'time-error' : undefined}
                  >
                    <option value="">Vyberte čas</option>
                    {formData.date && availableTimes.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p id="time-error" className="mt-1 text-sm text-red-500">
                      {errors.time}
                    </p>
                  )}
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="bg-white border border-brand-secondary text-brand-black font-semibold py-2 px-6 rounded-md transition duration-300 hover:bg-brand-secondary-light"
                  >
                    Zpět
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold py-2 px-6 rounded-md transition duration-300"
                  >
                    Pokračovat
                  </button>
                </div>
              </div>
            )}
            
            {/* Krok 3: Kontaktní údaje */}
            {step === 3 && (
              <div>
                <h3 className="text-xl font-medium text-brand-black mb-4">Zadejte kontaktní údaje</h3>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-brand-black font-medium mb-1">
                    Jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-brand-secondary-light'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-brand-black font-medium mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-brand-secondary-light'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-brand-black font-medium mb-1">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-brand-secondary-light'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="notes" className="block text-brand-black font-medium mb-1">
                    Poznámka (nepovinné)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-brand-secondary-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  ></textarea>
                </div>
                
                {/* Shrnutí rezervace */}
                <div className="mb-6 p-4 bg-brand-secondary-light rounded-md">
                  <h4 className="font-medium text-brand-black mb-2">Shrnutí rezervace</h4>
                  <ul className="space-y-2 text-brand-secondary-dark">
                    <li className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-1 text-brand-primary" />
                      <div>
                        <span className="font-medium">Pobočka:</span>{' '}
                        {branches.find(b => b.id === formData.branch)?.name || ''}
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Scissors className="w-4 h-4 mr-2 mt-1 text-brand-primary" />
                      <div>
                        <span className="font-medium">Služba:</span>{' '}
                        {services.find(s => s.id === formData.service)?.name || ''}
                      </div>
                    </li>
                    <li className="flex items-start">
                      <User className="w-4 h-4 mr-2 mt-1 text-brand-primary" />
                      <div>
                        <span className="font-medium">Specialista:</span>{' '}
                        {formData.specialist}
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="w-4 h-4 mr-2 mt-1 text-brand-primary" />
                      <div>
                        <span className="font-medium">Datum:</span>{' '}
                        {formatDate(formData.date)}
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 mr-2 mt-1 text-brand-primary" />
                      <div>
                        <span className="font-medium">Čas:</span>{' '}
                        {formData.time}
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="bg-white border border-brand-secondary text-brand-black font-semibold py-2 px-6 rounded-md transition duration-300 hover:bg-brand-secondary-light"
                  >
                    Zpět
                  </button>
                  <button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold py-2 px-6 rounded-md transition duration-300 inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status.type === 'loading' ? 'Odesílání...' : 'Dokončit rezervaci'}
                    {status.type !== 'loading' && <CalendarCheck className="ml-2 h-4 w-4" />}
                  </button>
                </div>
              </div>
            )}
          </form>
        </>
      )}
    </div>
  );
}
