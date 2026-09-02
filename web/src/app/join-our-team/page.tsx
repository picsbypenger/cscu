import Link from 'next/link';
import Image from 'next/image';
import { getSiteSettings } from '@/lib/cms';
import styles from './page.module.css';

export default async function JoinOurTeam() {
  const settings = await getSiteSettings();

  return (
    <div className={styles.container}>
      <section className={`${styles.hero} section`}>
        <h1 className={styles.title}>We don&apos;t just bank students. We build leaders.</h1>
        <p className={styles.intro}>
          Joining Carolina Students' means building something real from the ground up while making an immediate impact on campus.
        </p>
        <div style={{ marginTop: '2rem', width: '100%' }}>
          <Image src="/images/fullteam2.avif" alt="Carolina Students Team" width={800} height={450} style={{ objectFit: 'cover', borderRadius: '3px', width: '100%', height: 'auto' }} />
        </div>
      </section>

      {/* CTA
      <section className={styles.footerCta}>
        <div className="section">
          <h2>We're recruiting. Help us to build the future.</h2>
          <a href={settings.joinTeamApplicationUrl} target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'var(--cscu-white)', color: 'var(--cscu-black)' }}>
            Apply Now
          </a>
        </div>
      </section> */}

      {/* CTA */}
      <section className={styles.footerCta}>
        <div className="section">
          <h2>Recruiting will reopen next spring.</h2>
          <a href={settings.joinTeamApplicationUrl} target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'var(--cscu-white)', color: 'var(--cscu-black)' }}>
            Follow for Updates
          </a>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--cscu-blue)', marginBottom: '1rem' }}>Join Our Team</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--cscu-dark-grey)', lineHeight: '1.6' }}>
            We're looking for 13–15 driven UNC-Chapel Hill students to help build something revolutionary: the proposed Carolina Students' Credit Union. <br /><br />

            As an associate, you'll get hands-on training in financial services and a seat at the table — serving on internal committees that shape how we operate. Once the credit union is chartered, you'll step into the role of teller, putting your training into practice for fellow students.<br /><br />

            We need everyone: if you're into <strong>law, finance, marketing, communications, UX/UI, web development, data management, or anything in between</strong>, we have a place for you here.<br /><br />

            And this isn't just a semester-long commitment: after two semesters on the team, associates become eligible for advancement into leadership positions.<br /><br />

            {/* <u>Applications close at 11:59 p.m. on Friday, August 28th — don't miss your chance to be a founder.</u> */}
          </p>
        </div>
      </section>

      {/* Job Description */}
      {/* <section className="section" style={{ backgroundColor: 'var(--cscu-light-grey)', marginBottom: '4rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--cscu-blue)', marginBottom: '1rem' }}>Role Description</h2>
          <div style={{ fontSize: '1.125rem', color: 'var(--cscu-dark-grey)', lineHeight: '1.6' }}>
            <div className="job-posting" style={{ marginBottom: '1rem' }}>
              <p>This year, Carolina Students' Financial is set to become the only student-run financial institution at a public university, and we're growing fast. We're scaling up operations, expanding outreach to our fellow Tar Heels, and moving forward with our application for a state charter and federal insurance on the path to becoming an independent credit union. If you want real ownership over something being built from scratch, look no further.</p> <br />

              <p>We hold ourselves to a high standard of commitment, integrity, and respect, both in how we operate as a team and in how each member carries themselves day to day. That standard is what makes Carolina Students' an effective, sustainable, and healthy institution, and it's what we're looking for in the people who join us.</p><br />

              <h2>What to Expect</h2>
              <p>This is a minimum 10 hours/week commitment, including over the summer. New associates are asked to independently raise $300 in their first month unless this poses a financial hardship. This is currently an unpaid role, but what you'll gain in real-world experience is hard to find anywhere else on campus.</p><br />

              <h2>New Associates Onboarding</h2>
              <p>Selected associates will undergo in-depth, hands-on training—orientation meetings, training modules, supervised on-the-job experience, and examinations—before serving as a teller for one semester. From there, you'll join one of five core committees, each running a different piece of the institution:</p><br />

              <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
                <li><strong>General Ledger</strong> — back-office operations, transaction processing, and financial recordkeeping</li>
                <li><strong>Credit</strong> — underwriting and reviewing loan applications, managing the loan portfolio</li>
                <li><strong>Member Services</strong> — teller operations and member-facing service delivery</li>
                <li><strong>Marketing</strong> — brand strategy, communications, digital presence, and outreach</li>
                <li><strong>Internal Controls</strong> — strengthening Carolina Students' internal controls across all departments</li>
              </ul>

              <p>As you grow with us, you'll have the chance to join four periphery committees—<strong>Investments, Information Systems, Human Resources,</strong> and <strong>Financial Literacy</strong>—and eventually pursue leadership roles on the <strong>Board of Directors, Supervisory Committee,</strong> or <strong>Executive Committee.</strong></p><br />

              <h2>Who We're Looking For</h2>
              <p>Open to all UNC-Chapel Hill undergraduate and graduate students, any major, any year—though we're especially excited about applicants who can commit to more than one year with us. Prior financial services experience isn't required (and isn't necessarily favored). What matters most is initiative, flexibility, creative thinking, and a commitment to public good.</p><br />

              <p>We'd love applicants who bring—or are eager to build—a working knowledge of the credit union movement's history, the state and federal regulations governing NC state-chartered credit unions, and current industry conversations. Most importantly, you should be able to speak personally to Carolina Students' mission and vision.</p><br />

              <p><em>Note: All applicants undergo a background and consumer credit check. Due to regulatory requirements, applicants should not have misdemeanor or felony convictions and should have a healthy credit history. We recognize this can create inequitable barriers, and we may be able to work with exceptional circumstances—reach out to Anashe Murphy if this might affect you.</em></p><br />

              <h2>Come Meet Us</h2>
              <p>Join us for an info session in the Campus Y (Anne Queen Lounge):</p>
              <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
                <li><a href="https://heellife.unc.edu/event/12534401" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cscu-blue)', textDecoration: 'underline' }}><strong>August 20th</strong></a>, 6:30-7:30 p.m.</li>
                <li><a href="https://heellife.unc.edu/event/12534402" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cscu-blue)', textDecoration: 'underline' }}><strong>August 24th</strong></a>, 6:30-7:30 p.m.</li>
              </ul>
              <p>This will be a great chance to learn more, ask questions, and get to know the team. Join our GroupMe for updates.</p><br />

              <p>Questions about the application process? Reach out to <a href="mailto:akmurph@unc.edu" style={{ color: 'var(--cscu-blue)', textDecoration: 'underline' }}><strong>Anashe Murphy</strong></a>, Vice President of Human Resources.</p>

              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <a href={settings.joinTeamApplicationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
