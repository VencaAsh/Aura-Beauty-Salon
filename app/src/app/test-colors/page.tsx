import type { Metadata } from 'next';
import '../../styles/colors.css';

export const metadata: Metadata = {
  title: 'Test barev - Aura Beauty Salon',
  description: 'Testovací stránka pro barvy',
};

export default function TestColors() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Test barev</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Základní barvy</h2>

          <div className="space-y-4">
            <div className="p-4 bg-brand-primary text-white">bg-brand-primary</div>
            <div className="p-4 bg-brand-primary-light text-brand-black">bg-brand-primary-light</div>
            <div className="p-4 bg-brand-primary-dark text-white">bg-brand-primary-dark</div>

            <div className="p-4 bg-brand-secondary text-brand-black">bg-brand-secondary</div>
            <div className="p-4 bg-brand-secondary-light text-brand-black">bg-brand-secondary-light</div>
            <div className="p-4 bg-brand-secondary-dark text-brand-black">bg-brand-secondary-dark</div>

            <div className="p-4 bg-brand-gold text-white">bg-brand-gold</div>
            <div className="p-4 bg-brand-gold-light text-brand-black">bg-brand-gold-light</div>
            <div className="p-4 bg-brand-gold-dark text-white">bg-brand-gold-dark</div>

            <div className="p-4 bg-brand-black text-white">bg-brand-black</div>
            <div className="p-4 bg-brand-white text-brand-black">bg-brand-white</div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Textové barvy</h2>

          <div className="space-y-4">
            <div className="p-4 text-brand-primary">text-brand-primary</div>
            <div className="p-4 text-brand-primary-light">text-brand-primary-light</div>
            <div className="p-4 text-brand-primary-dark">text-brand-primary-dark</div>

            <div className="p-4 text-brand-secondary">text-brand-secondary</div>
            <div className="p-4 text-brand-secondary-light">text-brand-secondary-light</div>
            <div className="p-4 text-brand-secondary-dark">text-brand-secondary-dark</div>

            <div className="p-4 text-brand-gold">text-brand-gold</div>
            <div className="p-4 text-brand-gold-light">text-brand-gold-light</div>
            <div className="p-4 text-brand-gold-dark">text-brand-gold-dark</div>

            <div className="p-4 text-brand-black">text-brand-black</div>
            <div className="p-4 text-brand-white bg-brand-black">text-brand-white</div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Gradienty</h2>

        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-brand-gold-dark to-brand-gold text-white">bg-gradient-to-r from-brand-gold-dark to-brand-gold</div>
          <div className="p-4 bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-black">bg-gradient-to-r from-brand-gold to-brand-gold-light</div>
          <div className="p-4 bg-gradient-to-b from-brand-secondary-light to-white text-brand-black">bg-gradient-to-b from-brand-secondary-light to-white</div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">CSS Vlastní třídy</h2>

        <div className="space-y-4">
          <div className="p-4 text-brand-gold">text-brand-gold (CSS)</div>
          <div className="p-4 bg-brand-gold text-white">bg-brand-gold (CSS)</div>
          <div className="p-4 border-2 border-brand-gold">border-brand-gold (CSS)</div>
          <div className="p-4 bg-gradient-gold text-white">bg-gradient-gold (CSS)</div>
        </div>
      </div>
    </div>
  );
}
