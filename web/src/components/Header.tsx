import Link from 'next/link';
import Image from 'next/image';
import { getSiteSettings } from '@/lib/cms';
import styles from './Header.module.css';

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
        <nav className={styles.desktopNav}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/join-our-team">Get Involved</Link>
        </nav>
        <div className={styles.actions}>
          <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>{ctaText}</a>
          <details className={styles.mobileMenu}>
            <summary className={styles.menuIcon}>☰</summary>
            <nav className={styles.mobileNavItems}>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/join-our-team">Get Involved</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
