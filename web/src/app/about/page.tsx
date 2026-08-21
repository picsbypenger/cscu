import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import { getTeamInfo } from '@/lib/cms';
import styles from './page.module.css';

const Headshot = ({ name }: { name: string }) => {
  const filename = name.toLowerCase().replace(/\s+/g, '_') + '.jpg';
  const filePath = path.join(process.cwd(), 'public', 'heads', filename);
  
  if (fs.existsSync(filePath)) {
    return (
      <div className={styles.photoPlaceholder} style={{ background: 'none' }}>
        <Image src={`/heads/${filename}`} alt={name} width={91} height={91} style={{ objectFit: 'cover', borderRadius: '50%', width: '100%', height: '100%' }} />
      </div>
    );
  }
  
  return (
    <div className={styles.photoPlaceholder}>
      <span className={styles.initials}>{name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}</span>
    </div>
  );
};

export default async function About() {
  const team = await getTeamInfo();

  return (
    <div className={styles.container}>
      {/* Intro */}
      <section className="section">
        <div className={styles.introText}>
          <h1>Banking by Tar Heels, for Tar Heels.</h1>
          <p className={styles.bodyText}>
            Carolina Students is an initiative in the process of chartering the proposed Carolina Students&apos; Credit Union. We are building the first student-run financial institution in the state—the only student-run financial institution at a public university in the nation—completely governed by the UNC community.
          </p>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className="section">
          <div className={styles.missionStack}>
            <div className={styles.missionItem}>
              <h2>Our Mission</h2>
              <p className={styles.bodyText}>
                Carolina Students promotes thrift and creates a source of credit for provident and productive purposes for students at the University of North Carolina at Chapel Hill by offering affordable, transparent financial services, and cultivating financial knowledge and wellness.
              </p>
            </div>
            <hr style={{ width: '90%', border: 'none', borderTop: '2px solid rgba(0,0,0,0.15)', margin: 0 }} />
            <div className={styles.missionItem}>
              <h2>Our Vision</h2>
              <p className={styles.bodyText}>
                We aspire to make UNC-Chapel Hill a beacon for economic democracy where students leverage their collective power to advance the public good and where no Tar Heel is left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`${styles.timelineSection} section`}>
        <h2>Our Story</h2>
        <div style={{ maxWidth: '800px' }}>
          <p className={styles.bodyText} style={{ marginBottom: '1.5rem' }}>
            Over the past several years, our team of dedicated students has worked closely with industry partners, the National Credit Union Administration (NCUA), and university leadership to turn the vision of a student-run credit union into reality. We have successfully secured initial startup capital, finalized vendor partnerships, and filed all necessary charter applications.
          </p>
          <p className={styles.bodyText}>
            Currently, our application is under active review by regulators. We anticipate receiving our official charter and deposit insurance approval soon, and expect to open our doors to the UNC community next Spring!
          </p>
        </div>
      </section>

      <hr className={styles.demarcation} />

      {/* CTA Footer
      <section className={styles.footerCta}>
        <div className="section">
          <h2>We're recruiting. Help us to build the future.</h2>
          <Link href="/join-our-team" className="btn" style={{ backgroundColor: 'var(--cscu-white)', color: 'var(--cscu-black)' }}>Apply Now</Link>
        </div>
      </section> */}

      {/* Team */}
      <section className={styles.teamSection}>
        <div className="section">
          <h2>Our Team</h2>
          <div className={styles.directory}>
            {[...team.leadership, ...team.associates].map((member, i) => (
              <div key={i} className={styles.directoryRow}>
                <div className={styles.directoryLeft}>
                  <Headshot name={member.name} />
                  <div>
                    <p className={styles.teamName}>{member.name}</p>
                    <p className={styles.teamRole}>{String(member.role)}</p>
                    {'email' in member && member.email ? (
                      <a href={`mailto:${String(member.email)}`} className={styles.contactLink}>{String(member.email)}</a>
                    ) : null}
                    {'linkedin' in member && member.linkedin ? (
                      <a href={String(member.linkedin)} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '0.4rem', color: 'var(--cscu-blue)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="var(--cscu-dark-grey)">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    ) : null}
                  </div>
                </div>
                {'bio' in member && member.bio ? (
                  <p className={styles.directoryBio}>{String(member.bio)}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board & Supervisory */}
      <section className={styles.boardSection}>
        <div className="section">
          <h2>Board of Directors</h2>
          <div className={styles.directory}>
            {team.board.map((member, i) => (
              <div key={i} className={styles.directoryRow}>
                <div className={styles.directoryLeft}>
                  <Headshot name={member.name} />
                  <div>
                    <p className={styles.teamName}>{member.name}</p>
                    <p className={styles.teamRole}>{String(member.role)}</p>
                    {'email' in member && member.email ? (
                      <a href={`mailto:${String(member.email)}`} className={styles.contactLink}>{String(member.email)}</a>
                    ) : null}
                    {'linkedin' in member && member.linkedin ? (
                      <a href={String(member.linkedin)} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '0.4rem', color: 'var(--cscu-blue)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    ) : null}
                  </div>
                </div>
                {'bio' in member && member.bio ? (
                  <p className={styles.directoryBio}>{String(member.bio)}</p>
                ) : null}
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: '3rem' }}>Supervisory Committee</h2>
          <div className={styles.directory}>
            {team.supervisory.map((member, i) => (
              <div key={i} className={styles.directoryRow}>
                <div className={styles.directoryLeft}>
                  <Headshot name={member.name} />
                  <div>
                    <p className={styles.teamName}>{member.name}</p>
                    <p className={styles.teamRole}>{String(member.role)}</p>
                    {'email' in member && member.email ? (
                      <a href={`mailto:${String(member.email)}`} className={styles.contactLink}>{String(member.email)}</a>
                    ) : null}
                    {'linkedin' in member && member.linkedin ? (
                      <a href={String(member.linkedin)} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '0.4rem', color: 'var(--cscu-blue)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    ) : null}
                  </div>
                </div>
                {'bio' in member && member.bio ? (
                  <p className={styles.directoryBio}>{String(member.bio)}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Advisors */}
      <section className={styles.advisorsSection}>
        <div className="section">
          <h2>Board of Advisors</h2>
          <div className={styles.directory}>
            {team.advisors.map((member, i) => (
              <div key={i} className={styles.directoryRow}>
                <div className={styles.directoryLeft}>
                  <Headshot name={member.name} />
                  <div>
                    <p className={styles.teamName}>{member.name}</p>
                    <p className={styles.teamRole}>{String(member.role)}</p>
                    {'email' in member && member.email ? (
                      <a href={`mailto:${String(member.email)}`} className={styles.contactLink}>{String(member.email)}</a>
                    ) : null}
                    {'linkedin' in member && member.linkedin ? (
                      <a href={String(member.linkedin)} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '0.4rem', color: 'var(--cscu-blue)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    ) : null}
                  </div>
                </div>
                {'bio' in member && member.bio ? (
                  <p className={styles.directoryBio}>{String(member.bio)}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
