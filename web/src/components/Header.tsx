import Link from 'next/link';
import Image from 'next/image';
import { getSiteSettings } from '@/lib/cms';
import styles from './Header.module.css';
import { DesktopNav, MobileNav } from './NavLinks';

export default async function Header() {
  const settings = await getSiteSettings();
  const ctaUrl = settings.foundingMemberSurveyUrl;
  const ctaText = "Become a Founding Member";

  return (
    <header className={styles.header}>

      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image src="/logos/wide_blue_white.png" alt="CS Logo" width={200} height={50} style={{ objectFit: 'contain' }} />
        </Link>
        <DesktopNav />
        <div className={styles.actions}>
          <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>{ctaText}</a>
          <details className={styles.mobileMenu}>
            <summary className={styles.menuIcon}>☰</summary>
            <MobileNav />
          </details>
        </div>
      </div>
    </header>
  );
}
