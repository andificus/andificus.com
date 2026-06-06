'use client'

import Script from 'next/script'
import { FadeUp, SectionHeading } from './Motion'

const FOCUS_AREAS = [
  {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    desc: 'Azure AD, identity management, and a deliberate multi-cloud strategy — AZ-104 in progress, with AWS and GCP to follow.',
  },
  {
    icon: '🖥️',
    title: 'Systems Administration',
    desc: 'Windows Server, MDM, endpoint management, and enterprise infrastructure across large multi-location organizations.',
  },
  {
    icon: '🔐',
    title: 'IT Security',
    desc: 'RACF, Windows security, GRC workflows, and security analysis in high-stakes enterprise environments.',
  },
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Next.js, React, TypeScript, and Tailwind — building production-grade applications with clean fundamentals and real deployments.',
  },
  {
    icon: '🪪',
    title: 'Identity & Access Management',
    desc: 'Azure AD, RACF, and MDM — managing identity at scale across enterprise Windows and mainframe environments.',
  },
]

export default function AboutPageContent() {
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '60px 24px 80px' }}>

      {/* ── Hero ── */}
      <FadeUp>
        <div style={{ marginBottom: 64 }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            margin: '0 0 16px',
          }}>
            About Me
          </h1>
          <p className="p" style={{ fontSize: 18, maxWidth: 640, margin: 0 }}>
            IT professional with 15+ years of experience, a self-taught background, and a
            genuine curiosity for how things work — from mainframe batch jobs to modern
            cloud infrastructure to building web apps from scratch.
          </p>
        </div>
      </FadeUp>

      {/* ── My Journey ── */}
      <FadeUp delay={0.1}>
        <section style={{ marginBottom: 64 }}>
          <SectionHeading title="My Journey" />
          <div className="card" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p className="p">
              It started with a Tandy 1000HX. My uncle passed it down to us when I was a
              kid, and I thought I was one step closer to working on a starship. I'd grown
              up watching Star Trek, Star Wars, and the Alien films, completely convinced
              it was unfair that we didn't have that level of technology yet. When that
              computer landed in our house, I spent endless hours learning MS-DOS and
              Windows 3.0, and eventually took the whole thing apart screw by screw just
              to see what was inside. My mother was furious!
            </p>
            <p className="p">
              In high school I took keyboarding and Visual Basic 6 classes. Programming
              didn't click right away, and I assumed IT would probably require a degree I
              didn't have. So I took a path through customer service, where I ended up
              working with AS/400 systems and quietly becoming the person everyone came to
              when something didn't work. A few years in, I applied for a helpdesk position
              on a whim. No formal training, no certifications. I didn't expect to get it.
              I got the call, got the offer, and never looked back.
            </p>
            <p className="p">
              From the helpdesk I moved into remote job entry and batch processing
              mainframe environments, JCL, COBOL, RACF, QWS3270. Not exactly what the kid
              watching Star Trek had in mind, but it built a technical foundation that most
              people in modern IT have never seen. That work eventually led me to an
              enterprise IT security team, where I was introduced to Microsoft Azure for
              the first time. Azure AD clicked immediately and became a core focus.
            </p>
            <p className="p">
              Later, as part of a two-person IT team supporting a large multi-location
              organization, I took ownership of the full picture infrastructure, Azure
              AD, MDM, SharePoint, GRC, and the company website. That website was a VB.NET
              Framework 3 application when I inherited it. I migrated it to ASP.NET Core,
              then again to WordPress, largely on my own initiative. Somewhere in that
              process I realized I genuinely enjoyed web development.
            </p>
          </div>
        </section>
      </FadeUp>

      {/* ── Areas of Focus ── */}
      <FadeUp delay={0.15}>
        <section style={{ marginBottom: 64 }}>
          <SectionHeading title="Areas of Focus" />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 16,
          }}>
            {FOCUS_AREAS.map((area) => (
              <div key={area.title} className="card" style={{ padding: 24 }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{area.icon}</div>
                <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700 }}>
                  {area.title}
                </h3>
                <p className="p">{area.desc}</p>
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
              I'm currently working toward AZ-104 as the first step in a deliberate
              multi-cloud strategy. Azure first, then AWS, then Google Cloud. The goal
              isn't to skim the surface of all three — it's to build real, validated
              expertise across every major cloud platform and become the kind of engineer
              who can work confidently in any environment.
            </p>
            <p className="p">
              In parallel, I'm building Andificus — a full-stack personal web application
              built with Next.js, TypeScript, and deployed to production on Vercel. It's
              where I practice what I'm learning in real conditions: architecture decisions,
              performance, security headers, deployment pipelines. The goal is the same as
              it's always been — understand how things actually work, not just how to use
              them.
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
              Outside of technology, I'm writing a fantasy novel — a long-term project
              that takes as much patience and discipline as any technical challenge. I do
              art, graphic design, and photography, which is probably why I care as much
              about how things look as how they work. When I'm not building or creating
              something, I'm reading or gaming. Same curiosity, different inputs.
            </p>
          </div>
        </section>
      </FadeUp>

      {/* ── Connect ── */}
      <FadeUp delay={0.3}>
        <section>
          <SectionHeading title="Let's Connect" />
          <div className="card" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p className="p">
              I'm currently open to new opportunities — infrastructure, cloud, IT
              generalist, or web development roles. Remote, hybrid, or local to the
              Quad Cities area.
            </p>
            <div
              className="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="medium"
              data-theme="light"
              data-type="HORIZONTAL"
              data-vanity="andywentzloff"
              data-version="v1"
            />
            <Script
              src="https://platform.linkedin.com/badges/js/profile.js"
              strategy="lazyOnload"
            />
          </div>
        </section>
      </FadeUp>

    </main>
  )
}