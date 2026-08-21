import Link from 'next/link';
import Image from 'next/image';
import { getSiteSettings } from '@/lib/cms';
import styles from './page.module.css';

export default async function Home() {
  const settings = await getSiteSettings();
  const ctaUrl = settings.foundingMemberSurveyUrl;
  const ctaText = "Become a Founding Member";

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image src="/images/well_blurred.png" alt="UNC Old Well" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Tar Heels<br />
            Bank Here.
          </h1>
          <p className={styles.heroSubhead}>
            Carolina Students&apos; is the student-run financial institution built from the ground up to serve students at the University of North Carolina at Chapel Hill and their families.
          </p>
          <div className={styles.heroActions}>
            <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-green">{ctaText}</a>
            <Link href="/services" className={styles.secondaryLink}>Learn More</Link>
          </div>
        </div>
      </section>


      {/* Student Run */}
      <section className={styles.textSection}>
        <div className={`section ${styles.splitLayout}`}>
          <div className={styles.splitText}>
            <h2>Student-run. <br />Student-first.</h2>
            <p className={styles.bodyText}>
              Operated entirely by UNC students, at the proposed Carolina Students&apos; Credit Union every decision is made with your financial wellbeing in mind.
              No more call centers, surprise fees, or minimums. With mobile and online banking and a location right off campus, we&apos;re here with you every step of the way.
            </p>
          </div>
          <div className={styles.splitVisual}>
            <Image src="/images/fullteam.avif" alt="Carolina Students Team" width={600} height={400} style={{ objectFit: 'cover', borderRadius: '3px', width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>


      {/* Not-for-profit comparison */}
      <section className={styles.compareSection}>
        <div className="section">
          <h2>Not-for-profit. <br />Yes-for-good.</h2>
          <div className={styles.bodyText}>
            <p style={{ marginBottom: '1.5rem' }}>
              For too long, for-profit financial institutions have taken students&apos; business for granted. They have trapped our generation in record-breaking debt, charged exorbitant fees, and used our money to finance climate breakdown and brutal warfare around the world.
            </p>
            <p>
              Tar Heels deserve a financial institution that invests in Carolina, not in multinational corporations. That&apos;s what the proposed Carolina Students&apos; Credit Union will offer. That means paying you a higher interest rate on your savings, eliminating operational fees, and designing services meant specifically for students at UNC-Chapel Hill and their families. And your money is backed by the full faith and credit of the U.S. government.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
