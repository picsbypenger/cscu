import { getFaqs } from '@/lib/cms';
import styles from './page.module.css';

export default async function FAQ() {
  const faqs = await getFaqs();

  return (
    <div className={styles.container}>
      <section className="section">
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <p className={styles.intro}>
          Have questions? Here’s everything you need to know about our progress, membership, and what it means to be a student-run credit union.
        </p>

        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <details key={faq.id} className={styles.faqItem}>
              <summary className={styles.question}>
                {faq.question}
                <span className={styles.icon}>+</span>
              </summary>
              <div className={styles.answer}>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
