import type { Metadata } from 'next'
import AboutPageContent from '../components/AboutPageContent'

export const metadata: Metadata = {
  title: 'About',
  description: 'Andy Wentzloff — IT professional and developer with 15+ years of experience in infrastructure, cloud, and web development.',
}

export default function AboutPage() {
  return <AboutPageContent />
}