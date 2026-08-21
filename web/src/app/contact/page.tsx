import { getSiteSettings } from '@/lib/cms';
import styles from './page.module.css';

export default async function Contact() {
  const settings = await getSiteSettings();

  return (
    <div className={styles.container}>
      <section className="section">
        <h1 className={styles.title}>Get in Touch</h1>
        
        <div className={styles.grid}>
          {/* Contact Details */}
          <div className={styles.details}>
            <h2>Our Office</h2>
            <p className={styles.address}>{settings.contact.address}</p>
            <p className={styles.phone}>{settings.contact.phone}</p>
            
            <div className={styles.socials}>
              <h3>Follow Us</h3>
              <a href={settings.contact.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={settings.contact.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>

            <div className={styles.mapPlaceholder}>
              <p style={{ fontSize: '0.875rem', color: 'var(--cscu-dark-grey)' }}>Campus location coming soon.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formWrapper}>
            <h2>Send a message</h2>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input type="text" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label>Topic</label>
                <select name="topic">
                  <option>General</option>
                  <option>Membership</option>
                  <option>Partnership</option>
                  <option>Media</option>
                  <option>Careers</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea name="message" rows={5} required></textarea>
              </div>
              <button type="button" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
