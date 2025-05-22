import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

// Importy ikon
import facialIcon from '@/assets/icon/pece-o-plet.png';
import browsIcon from '@/assets/icon/uprava-oboci.png';
import lashesIcon from '@/assets/icon/prodlouzeni ras.png';

interface CustomServiceIconProps {
  type: string;
  className?: string;
}

export default function CustomServiceIcon({ type, className = "w-16 h-16" }: CustomServiceIconProps) {
  let iconSrc: StaticImport;
  let alt: string;

  switch (type) {
    case 'facial':
      iconSrc = facialIcon;
      alt = "Ikona péče o pleť";
      break;
    case 'brows':
      iconSrc = browsIcon;
      alt = "Ikona úpravy obočí";
      break;
    case 'lashes':
      iconSrc = lashesIcon;
      alt = "Ikona prodlužování řas";
      break;
    default:
      iconSrc = facialIcon;
      alt = "Ikona služby";
  }

  return (
    <div className={className}>
      <Image
        src={iconSrc}
        alt={alt}
        width={64}
        height={64}
        className="w-full h-auto object-contain"
        style={{ height: 'auto' }}
      />
    </div>
  );
}
