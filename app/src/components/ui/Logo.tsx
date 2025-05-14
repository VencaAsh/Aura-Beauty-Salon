import Image from 'next/image';
import Link from 'next/link';
import logoImage from '@/assets/icon/logo/aurabeauty-logo.png';

interface LogoProps {
  className?: string;
  imageClassName?: string;
  linkClassName?: string;
  width?: number;
  height?: number;
  mobileWidth?: number;
  mobileHeight?: number;
}

export default function Logo({
  className = "",
  imageClassName = "",
  linkClassName = "",
  width = 120,
  height = 40,
  mobileWidth,
  mobileHeight
}: LogoProps) {
  // Use mobile dimensions if provided, otherwise use the default dimensions
  const mobileW = mobileWidth || Math.round(width * 0.8);
  const mobileH = mobileHeight || Math.round(height * 0.8);

  return (
    <div className={`relative ${className}`}>
      <Link href="/" className={`block ${linkClassName}`}>
        <div className="hidden md:block">
          <Image
            src={logoImage}
            alt="Aura Beauty Salon Logo"
            width={width}
            height={height}
            className={`object-contain ${imageClassName}`}
            priority
          />
        </div>
        <div className="block md:hidden">
          <Image
            src={logoImage}
            alt="Aura Beauty Salon Logo"
            width={mobileW}
            height={mobileH}
            className={`object-contain ${imageClassName}`}
            priority
          />
        </div>
      </Link>
    </div>
  );
}
