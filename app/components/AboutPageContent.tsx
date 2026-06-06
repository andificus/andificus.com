'use client'

import Image from 'next/image'
import { FadeUp, SectionHeading } from './Motion'

// Add your photo to /public/images/andy.jpg and change null to '/images/andy.jpg'
const PHOTO_SRC: string | null = null

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
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--link)', margin: '0 0 8px' }}>
              IT Professional and Web Developer
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
              Andrew Wentzloff
            </h1>
            <p className="p" style={{ fontSize: 17, maxWidth: 580, margin: '0 0 24px' }}>
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
          <div className="card" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p className="p">
              It started with a Tandy 1000HX. My uncle passed it down to us when I was a
              kid, and I thought I was one step closer to working on a starship. Growing up
              watching Star Trek, Star Wars, and the Alien films, I was convinced it was
              unfair that we did not have that level of technology yet. When that computer
              landed in our house, I spent endless hours learning MS-DOS and Windows 3.0,
              and eventually took the whole thing apart screw by screw just to see what
              was inside.
            </p>
            <p className="p">
              In high school I took keyboarding and Visual Basic 6 classes. Programming
              did not click right away, and I assumed IT would probably require a degree I
              did not have. So I took a path through customer service, where I ended up
              working with AS/400 systems and quietly became the person everyone came to
              when something did not work. A few years in, I applied for a helpdesk
              position on a whim. No formal training, no certifications. I did not expect
              to get it. I got the call, got the offer, and never looked back.
            </p>
            <p className="p">
              From the helpdesk I moved into remote job entry and batch processing in
              mainframe environments, working with JCL, COBOL, RACF, and QWS3270. That
              work led me to an enterprise IT security team, where I was introduced to
              Microsoft Azure for the first time. Azure AD clicked immediately and became
              a core focus.
            </p>
            <p className="p">
              Later, as part of a two-person IT team supporting a large multi-location
              organization, I took ownership of the full picture: infrastructure, Azure AD,
              MDM, SharePoint, and GRC. I also inherited the company website, a VB.NET
              Framework 3 application. I migrated it to ASP.NET Core, then again to
              WordPress, largely on my own initiative. Somewhere in that process I realized
              I genuinely enjoyed web development. That led directly to building Andificus,
              my current project built with Next.js, React, and TypeScript.
            </p>
          </div>
        </section>
      </FadeUp>

      {/* ── Areas of Focus ── */}
      <FadeUp delay={0.15}>
        <section style={{ marginBottom: 64 }}>
          <SectionHeading title="Areas of Focus" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {FOCUS_AREAS.map((area) => (
              <div key={area.title} className="card" style={{ padding: 24 }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{area.icon}</div>
                <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700 }}>{area.title}</h3>
                <p className="p" style={{ margin: 0 }}>{area.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ── Current Goals ── */}
      <FadeUp delay={0.2}>
        <section style={{ marginBottom: 64 }}>
          <SectionHeading title="Current Goals" />
          <div className="card" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p className="p">
              I am currently working toward AZ-104 as the first step in a deliberate
              multi-cloud strategy. Azure first, then AWS, then Google Cloud. The goal
              is not to skim the surface of all three but to build real, validated
              expertise across every major cloud platform and become the kind of engineer
              who can work confidently in any environment.
            </p>
            <p className="p">
              In parallel I am building Andificus, a personal web project built with
              Next.js, TypeScript, and deployed to production on Vercel. It is where I
              practice what I am learning in real conditions: architecture decisions,
              performance, security headers, and deployment pipelines. The goal is the
              same as it has always been. Understand how things actually work, not just
              how to use them.
            </p>
          </div>
        </section>
      </FadeUp>

      {/* ── Beyond Work ── */}
      <FadeUp delay={0.25}>
        <section style={{ marginBottom: 64 }}>
          <SectionHeading title="Beyond Work" />
          <div className="card" style={{ padding: 32 }}>
            <p className="p">
              Outside of technology I am working on a fantasy novel, a long-term project
              that takes as much patience and discipline as any technical challenge. I do
              art, graphic design, and photography, which is probably why I care as much
              about how things look as how they work. When I am not building or creating
              something I am reading or gaming. Same curiosity, different inputs.
            </p>
          </div>
        </section>
      </FadeUp>

      {/* ── Connect ── */}
      <FadeUp delay={0.3}>
        <section>
          <SectionHeading title="Let's Connect" />
          <div className="card" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p className="p">
              I am currently open to new opportunities in infrastructure, cloud, IT
              generalist, or web development roles. Remote, hybrid, or local to the
              Quad Cities area.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/in/andywentzloff" target="_blank" rel="noopener noreferrer" className="btn btnPrimary">View LinkedIn Profile</a>
            </div>
          </div>
        </section>
      </FadeUp>

    </main>
  )
}