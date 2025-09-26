import Link from 'next/link';

interface LogoProps {
  className?: string;
  imageClassName?: string; // preserved to allow custom text styling where image class was used
  linkClassName?: string;
  width?: number; // preserved for API compatibility (not used for text)
  height?: number; // used to approximate font size
  mobileWidth?: number; // preserved for API compatibility (not used for text)
  mobileHeight?: number; // used to approximate mobile font size
}

export default function Logo({
  className = "",
  imageClassName = "",
  linkClassName = "",
  width = 120, // kept for compatibility
  height = 40,
  mobileWidth, // kept for compatibility
  mobileHeight
}: LogoProps) {
  // Convert px to rem for better scalability and consistent hierarchy
  const pxToRem = (px: number) => `${(px / 16).toFixed(4)}rem`;

  // Target hierarchy: logo ~1.5–2x nav links (nav is text-xs = 0.75rem)
  // Defaults: desktop ~1.375rem (22px), mobile ~1.25rem (20px)
  const desktopFontSize = height ? pxToRem(height) : '1.375rem';
  const mobileFontSize = mobileHeight ? pxToRem(mobileHeight) : '1.25rem';

  return (
    <div className={`relative ${className}`}>
      <Link href="/" className={`block ${linkClassName}`} aria-label="aurabeauty - home">
        {/* Desktop */}
        <span className="hidden md:inline-block">
          <span
            className={`font-light tracking-wide ${imageClassName}`}
            style={{ fontSize: desktopFontSize, lineHeight: 1, color: '#000000', display: 'inline-block', fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif", fontWeight: 300 }}
          >
            aurabeauty
          </span>
        </span>
        {/* Mobile */}
        <span className="inline-block md:hidden">
          <span
            className={`font-light tracking-wide ${imageClassName}`}
            style={{ fontSize: mobileFontSize, lineHeight: 1, color: '#000000', display: 'inline-block', fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif", fontWeight: 300 }}
          >
            aurabeauty
          </span>
        </span>
      </Link>
    </div>
  );
}
