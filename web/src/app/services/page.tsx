import Link from 'next/link';
import Image from 'next/image';
import { getServices, getSiteSettings } from '@/lib/cms';
import styles from './page.module.css';

export default async function Services() {
  const services = await getServices();
  const settings = await getSiteSettings();

  const ctaUrl = settings.foundingMemberSurveyUrl;
  const ctaText = "Become a Founding Member";

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <Image src="/images/debitcardmockup.jpg" alt="Debit Card Background" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Planned Products + Services</h1>
          <p className={styles.intro}>
            Built to be completely transparent, competitive, and uniquely adapted to our members' needs.
          </p>
        </div>
      </section>

      <section className="section">

        <div className={styles.grid}>
          {services.map((svc) => (
            <div key={svc.id} className={styles.card}>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{svc.name}</h2>
                <p className={styles.cardDesc}>{svc.description}</p>
              </div>

              {/* <div className={styles.statusBadge}>
                {svc.status}
              </div> */}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
