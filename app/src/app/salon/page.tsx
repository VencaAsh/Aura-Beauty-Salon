import React from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import image1 from '@/assets/images/salon/IMG_0985-min.jpeg';
import image2 from '@/assets/images/salon/IMG_0984-min.jpeg';
import image3 from '@/assets/images/salon/IMG_0981-min.jpeg';
import ownerImage from '@/assets/images/makrushyna.jpg';

export const metadata = {
  title: 'Salon | Aura Beauty Salon',
  description: 'Seznamte se s naším salonem a jeho majitelkou, která se postará o vaši krásu a pohodu.',
};

// Data pro salon
const salonInfo = {
  description: 'Aura Beauty je víc než jen kosmetický salon – je to prostor, kde se spojuje profesionální péče s odpočinkem a dobrým pocitem ze sebe sama. Věřím, že krása začíná uvnitř, a když se cítíme dobře, září to i navenek.',
  images: [
    {
      src: image1,
      alt: 'Interiér Aura Beauty Salonu'
    },
    {
      src: image2,
      alt: 'Ošetřovací místnost Aura Beauty Salonu'
    },
    {
      src: image3,
      alt: 'Recepce Aura Beauty Salonu'
    }
  ],
  address: 'Vítkovická 3080/10, 702 00 Ostrava',
  phone: '+420 773 054 563',
  email: 'info@aurabeauty.cz'
};

// Data pro majitelku salonu
const ownerInfo = {
  name: 'Alexandra Makrushyna',
  position: 'Majitelka & Kosmetička',
  bio: 'Jmenuji se Alexandra a jsem zakladatelka salonu Aura Beauty. Kosmetice se věnuji srdcem a s velkou vášní pro krásu, péči a ženskou energii. Mým cílem bylo vytvořit místo, kde si každá žena nejen odpočine, ale zároveň odejde s pocitem, že je krásná a opečovaná.',
  image: ownerImage,
  details: 'Jsem certifikovaná kosmetička, která absolvovala pokročilé kurzy ošetření pleti. Mám za sebou kurzy Brow Master, mám smysl pro detail a proto váš tvar vyměřím přesně podle obličeje a barvu vyberu pomocí coloristiky. Kurzy prodlužování řas a lash liftingu mě naučily dělat řasy precizně a vybrat přesně ten správný styl pro vaše oči, abychom zachovaly přirozenost.',
  philosophy: 'Sleduji moderní trendy, neustále se vzdělávám a zakládám si na individuálním přístupu ke každé klientce a detailech, které v sobě skrývá. Největší radost mi dělají ty krásné proměny, které vám pomůžou se cítit sebevědomě. Těším se na vás osobně!'
};

export default function SalonPage() {
  return (
    <main>
      <Breadcrumbs />
      {/* Hero sekce */}
      <section className="relative overflow-hidden bg-[#F8F6F4] py-24">
        {/* Dekorativní prvky */}
        <div className="absolute top-0 right-0 w-[15rem] h-[15rem] rounded-full bg-[#E6CCB2]/10 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[15rem] h-[15rem] rounded-full bg-[#E6CCB2]/10 blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-light text-[#121212] mb-6">O salonu</h1>
            <div className="h-[1px] w-16 bg-[#E6CCB2] mx-auto mb-6"></div>
            <p className="text-center text-[#121212]/70 mb-0 max-w-2xl mx-auto font-light">
              {salonInfo.description}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        {/* Fotky salonu */}
        <div className="max-w-6xl mx-auto mb-24">
          <h2 className="text-3xl font-serif font-light mb-12 text-[#121212] text-center">Náš salon</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {salonInfo.images.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-sm group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Profil majitelky */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-light mb-12 text-[#121212] text-center">O majitelce</h2>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Levá strana - fotografie */}
            <div className="w-full lg:w-2/5 relative">
              <div className="max-w-sm mx-auto lg:mx-0 aspect-square relative overflow-hidden rounded-sm">
                <Image
                  src={ownerInfo.image}
                  alt={ownerInfo.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/5"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#E6CCB2]/20 rounded-sm z-[-1] hidden lg:block"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 border border-[#E6CCB2]/20 rounded-sm z-[-1] hidden lg:block"></div>
            </div>

            {/* Pravá strana - informace */}
            <div className="w-full lg:w-3/5">
              <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 text-[#121212]">{ownerInfo.name}</h3>
              <p className="text-[#121212]/70 mb-6 text-lg">{ownerInfo.position}</p>
              <div className="h-[1px] w-16 bg-[#E6CCB2]/50 mb-8"></div>

              <div className="space-y-8">
                {/* Bio */}
                <div>
                  <p className="text-[#121212]/80 leading-relaxed mb-6">{ownerInfo.bio}</p>
                  <p className="text-[#121212]/80 leading-relaxed mb-6">{ownerInfo.details}</p>
                  <p className="text-[#121212]/80 leading-relaxed italic">{ownerInfo.philosophy}</p>
                </div>

                {/* Kontakt */}
                <div className="mt-12">
                  <h3 className="text-xl font-serif font-light mb-4 text-[#121212]">Kontakt</h3>
                  <div className="space-y-3">
                    <a href={`tel:${salonInfo.phone.replace(/\s/g, '')}`} className="flex items-center text-[#121212]/70 hover:text-[#121212] transition-colors duration-300">
                      <Phone className="w-5 h-5 mr-4" />
                      {salonInfo.phone}
                    </a>
                    <a href={`mailto:${salonInfo.email}`} className="flex items-center text-[#121212]/70 hover:text-[#121212] transition-colors duration-300">
                      <Mail className="w-5 h-5 mr-4" />
                      {salonInfo.email}
                    </a>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-4 mt-0.5" />
                      <span className="text-[#121212]/70">{salonInfo.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA sekce */}
        <div className="bg-[#F8F6F4] border border-[#E6CCB2]/20 p-12 md:p-16 mt-32 text-center rounded-sm">
          <h2 className="text-3xl font-serif font-light mb-4 text-[#121212]">Rezervujte si návštěvu</h2>
          <div className="h-[1px] w-20 bg-[#E6CCB2]/50 mx-auto mb-8"></div>
          <p className="mb-12 max-w-2xl mx-auto text-[#121212]/70 font-light text-lg">
            Chtěli byste se dozvědět více o našich službách nebo si rezervovat termín? Neváhejte nás kontaktovat. Těším se na vaši návštěvu.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/rezervace"
              className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden rounded-sm font-sans text-sm tracking-widest text-white transition-all duration-500 bg-[#E6CCB2] border border-[#E6CCB2] hover:bg-[#C9B8A8]"
            >
              <span className="relative z-10 flex items-center font-light">
                Rezervovat termín
              </span>
            </Link>
            <Link
              href="/kontakt"
              className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden rounded-sm font-sans text-sm tracking-widest text-[#121212] transition-all duration-500 group bg-transparent border border-[#E6CCB2]/50 hover:border-[#E6CCB2]"
            >
              <span className="relative z-10 flex items-center font-light">
                Kontaktujte nás
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#E6CCB2] group-hover:w-[calc(100%-20px)] transition-all duration-700 ease-out"></span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
