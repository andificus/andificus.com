'use client'

import Image from 'next/image'
import { FadeUp, SectionHeading, StaggerGrid, StaggerCard } from './Motion'


const PHOTO_SRC: string | null = '/images/andy.jpg'

const FOCUS_AREAS = [
  {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    desc: 'Azure AD, identity management, and a deliberate multi-cloud path. AZ-104 in progress, with AWS and GCP certifications to follow.',
  },
  {
    icon: '🖥️',
    title: 'Systems Administration',
    desc: 'Windows Server, MDM, and endpoint management across large multi-location enterprise environments.',
  },
  {
    icon: '🔐',
    title: 'IT Security',
    desc: 'RACF, Windows security, GRC workflows, and security analysis in high-stakes enterprise settings.',
  },
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Next.js, React, TypeScript, and Tailwind. Building production applications with clean fundamentals and real deployments.',
  },
]



const JOURNEY = [
  `It started with a Tandy 1000HX. My uncle passed it down to us when I was a kid, and I thought I was one step closer to working on a starship. Growing up watching Star Trek, Star Wars, and the Alien films, I was convinced it was unfair that we did not have that level of technology yet. When that computer landed in our house, I spent endless hours learning MS-DOS and Windows 3.0, and eventually took the whole thing apart screw by screw just to see what was inside.`,
  `In high school I took keyboarding and Visual Basic 6 classes. Programming did not click right away, and I assumed IT would probably require a degree I did not have. So I took a path through customer service, where I ended up working with AS/400 systems and quietly became the person everyone came to when something did not work. A few years in, I applied for a helpdesk position on a whim. No formal training, no certifications. I did not expect to get it. I got the call, got the offer, and never looked back.`,
  `From the helpdesk I moved into remote job entry and batch processing in mainframe environments, working with JCL, COBOL, RACF, and QWS3270. That work led me to an enterprise IT security team, where I was introduced to Microsoft Azure for the first time. Azure AD clicked immediately and became a core focus.`,
  `Later, as part of a two-person IT team supporting a large multi-location organization, I took ownership of the full picture: infrastructure, Azure AD, MDM, SharePoint, and GRC. I also inherited the company website, a VB.NET Framework 3 application. I migrated it to ASP.NET Core, then again to WordPress, largely on my own initiative. Somewhere in that process I realized I genuinely enjoyed web development. That led directly to building Andificus, my current project built with Next.js, React, and TypeScript.`,
]

export default function AboutPageContent() {
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '60px 24px 80px' }}>

      {/* ── Hero ── */}
      <FadeUp>
        <div style={{ display: 'flex', gap: 40, alignItems: 'center', marginBottom: 64, flexWrap: 'wrap' }}>
          {PHOTO_SRC && (
            <Image
              src={PHOTO_SRC}
              alt="Andy Wentzloff"
              width={160}
              height={160}
              priority
              style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '3px solid var(--border)' }}
            />
          )}
          <div style={{ flex: 1, minWidth: 260 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--link)', margin: '0 0 8px' }}>
              IT Professional and Web Developer
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
              Andrew Wentzloff
            </h1>
            <p className="p" style={{ fontSize: 17, maxWidth: 580, margin: '0 0 20px' }}>
              15 years of hands-on IT experience spanning mainframe operations, enterprise
              security, cloud infrastructure, and modern web development. Based in the Quad
              Cities. Open to remote, hybrid, and local opportunities.
            </p>


            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/in/andywentzloff" target="_blank" rel="noopener noreferrer" className="btn btnPrimary">LinkedIn</a>
              <a href="https://github.com/andificus" target="_blank" rel="noopener noreferrer" className="btn btnGhost">GitHub</a>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* ── My Journey ── */}
      <FadeUp delay={0.1}>
        <section style={{ marginBottom: 64 }}>
          <SectionHeading title="My Journey" />
          <div className="card" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {JOURNEY.map((para, i) => (
              <div
                key={i}
                style={{
                  borderLeft: '3px solid var(--link)',
                  paddingLeft: 20,
                  marginBottom: i < JOURNEY.length - 1 ? 28 : 0,
                  opacity: 0.6 + i * 0.12,
                }}
              >
                <p className="p" style={{ margin: 0 }}>{para}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ── Areas of Focus ── */}
      <FadeUp delay={0.15}>
        <section style={{ marginBottom: 64 }}>
          <SectionHeading title="Areas of Focus" />
          <StaggerGrid style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16 }}>
            {FOCUS_AREAS.map((area) => (
              <StaggerCard key={area.title}>
                <div
                  className="card"
                  style={{
                    padding: 24,
                    borderTop: '3px solid var(--link)',
                    height: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: 'color-mix(in srgb, var(--link) 15%, transparent)',
                    fontSize: 24,
                    marginBottom: 16,
                  }}>
                    {area.icon}
                  </div>
                  <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700 }}>{area.title}</h3>
                  <p className="p" style={{ margin: 0 }}>{area.desc}</p>
                </div>
              </StaggerCard>
            ))}
          </StaggerGrid>
        </section>
      </FadeUp>



      {/* ── Beyond Work ── */}
      <FadeUp delay={0.25}>
        <section style={{ marginBottom: 64 }}>
          <SectionHeading title="Beyond Work" />
          <div className="card" style={{ padding: 32 }}>
            <p className="p" style={{ margin: 0 }}>
              Outside of technology I am working on a fantasy novel, a long-term project
              that takes as much patience and discipline as any technical challenge. I do
              art, graphic design, and photography, which is probably why I care as much
              about how things look as how they work. When I am not building or creating
              something I am reading or gaming. Same curiosity, different inputs.
            </p>
          </div>
        </section>
      </FadeUp>


    </main>
  )
}