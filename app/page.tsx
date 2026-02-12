'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const howItWorks = [
    {
      step: '01',
      title: 'Upload Media',
      description: 'Securely upload images, videos, or audio files. All data is encrypted end-to-end during transmission and processing.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
    {
      step: '02',
      title: 'AI Detection',
      description: 'Our advanced neural networks analyze facial artifacts, frequency anomalies, and behavioral patterns to detect manipulation.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      step: '03',
      title: 'Results & Insights',
      description: 'Receive detailed analysis including authenticity probability, confidence scores, and comprehensive risk classification reports.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const technologies = [
    {
      title: 'Deepfake Detection Models',
      description: 'State-of-the-art neural networks trained on millions of samples to identify synthetic media.',
    },
    {
      title: 'Facial Artifact Analysis',
      description: 'Advanced algorithms detect inconsistencies in facial features, lighting, and micro-expressions.',
    },
    {
      title: 'Frequency Analysis',
      description: 'Examines audio and visual frequency patterns that are imperceptible to human perception.',
    },
    {
      title: 'Behavioral Anomaly Detection',
      description: 'Identifies unnatural movements, speech patterns, and temporal inconsistencies.',
    },
  ];

  const useCases = [
    {
      title: 'Enterprise',
      description: 'Protect your organization from fraud, identity theft, and reputation damage with automated deepfake detection.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Law Enforcement',
      description: 'Accelerate criminal investigations with facial recognition and media authenticity verification tools.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Media & Journalism',
      description: 'Verify content authenticity before publication and maintain editorial integrity in digital reporting.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
    {
      title: 'Individuals',
      description: 'Protect your personal identity and verify suspicious media with enterprise-grade security tools.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  const securityFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Zero Data Retention',
      description: 'No permanent storage of uploaded media. All files are deleted immediately after analysis.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption protects data during transmission and processing.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Compliance Ready',
      description: 'Built to meet GDPR, SOC 2, and industry security standards.',
    },
  ];

  const stats = [
    { value: '99.2%', label: 'Detection Accuracy' },
    { value: '2.3s', label: 'Average Processing Time' },
    { value: '10M+', label: 'Media Files Analyzed' },
    { value: '24/7', label: 'Uptime Guarantee' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
        {/* Animated Background */}
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 150, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <Image
                src="/logo.webp"
                alt="Fakion AI"
                width={140}
                height={140}
                className="object-contain"
              />
            </motion.div>

            {/* Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold heading-font tracking-tight">
              <span className="gradient-text">Fakion AI</span>
            </h1>

            {/* Tagline */}
            <p className="text-3xl md:text-4xl text-white max-w-3xl mx-auto font-light display-font">
              Defending Digital Truth
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Detect deepfake media, verify authenticity, and protect digital trust with advanced AI-powered cyber-forensic analysis
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            >
              <Link href="/detect">
                <Button variant="primary" className="text-lg px-10 py-4 font-semibold">
                  Start Detection
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="secondary" className="text-lg px-10 py-4 font-semibold">
                  Explore Platform
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mt-16 text-sm text-zinc-500"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>ISO 27001</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-zinc-500 uppercase tracking-wider">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 heading-font"
            >
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 max-w-2xl mx-auto"
            >
              Three simple steps to verify media authenticity and detect deepfakes
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <GlassCard key={index} delay={index * 0.15} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-indigo-500/10 text-indigo-400 mb-6">
                  {item.icon}
                </div>
                <div className="text-5xl font-bold text-indigo-400/30 mb-4 display-font">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 heading-font">
                  {item.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Technology Explanation */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 heading-font"
            >
              Powered by Advanced AI
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 max-w-3xl mx-auto"
            >
              Our platform leverages cutting-edge neural networks and forensic analysis techniques to provide unparalleled accuracy
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <GlassCard key={index} delay={index * 0.1} hover={false}>
                <h3 className="text-xl font-bold text-white mb-3 heading-font">
                  {tech.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {tech.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Motive Section */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="text-center p-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white heading-font">
                The Digital Trust Crisis
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                We live in an era where synthetic media threatens the foundation of digital trust. Deepfake technology has evolved from a novelty to a serious cybersecurity threat.
              </p>
              <div className="grid md:grid-cols-4 gap-6 mt-12">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-cyan-400 display-font">300%</div>
                  <div className="text-sm text-zinc-500">Increase in deepfake fraud cases (2023)</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-cyan-400 display-font">$250M</div>
                  <div className="text-sm text-zinc-500">Lost to identity theft annually</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-cyan-400 display-font">96%</div>
                  <div className="text-sm text-zinc-500">Of deepfakes are malicious content</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-cyan-400 display-font">78%</div>
                  <div className="text-sm text-zinc-500">Of consumers can't detect deepfakes</div>
                </div>
              </div>
              <p className="text-lg text-zinc-400 max-w-3xl mx-auto mt-8">
                Fakion AI was built to combat this crisis—protecting individuals, enterprises, and institutions from the devastating impacts of synthetic media manipulation.
              </p>
            </motion.div>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Use Cases */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 heading-font"
            >
              Trusted Across Industries
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 max-w-2xl mx-auto"
            >
              From enterprises to law enforcement, our platform serves diverse security needs
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <GlassCard key={index} delay={index * 0.1}>
                <div className="text-indigo-400 mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 heading-font">
                  {useCase.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Security & Privacy */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 heading-font"
            >
              Security & Privacy First
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 max-w-2xl mx-auto"
            >
              Your data security and privacy are our top priorities
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <GlassCard key={index} delay={index * 0.15} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500/10 text-green-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 heading-font">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Insights Preview */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 heading-font"
            >
              Real-Time Insights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 max-w-2xl mx-auto"
            >
              Comprehensive analytics dashboard with detection stats and trend visualization
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <GlassCard key={index} delay={index * 0.1} className="text-center" hover={false}>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="text-4xl md:text-5xl font-bold text-gradient mb-2 display-font"
                >
                  {stat.value}
                </motion.div>
                <div className="text-zinc-500 text-sm">{stat.label}</div>
              </GlassCard>
            ))}
          </div>

          {/* Dashboard Preview */}
          <GlassCard className="p-8" hover={false}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2 heading-font">
                Advanced Analytics Dashboard
              </h3>
              <p className="text-zinc-400">
                Track detections, view historical data, and analyze trends
              </p>
            </div>
            <div className="relative aspect-video bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 rounded-xl border border-white/5 overflow-hidden">
              <Image
                src="/dashboard-preview.png"
                alt="Advanced Analytics Dashboard Preview"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
            <div className="flex justify-center mt-6">
              <Link href="/insights">
                <Button variant="primary" className="px-8 py-4">
                  View Dashboard Preview
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-5xl mx-auto">
          <GlassCard className="text-center p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white heading-font">
                Protect Digital Truth Today
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                Join thousands of organizations and individuals defending against deepfake fraud and digital manipulation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <Link href="/detect">
                  <Button variant="primary" className="text-lg px-10 py-4 font-semibold">
                    Start Using Fakion AI
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" className="text-lg px-10 py-4 font-semibold">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </motion.div>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <Footer />
    </div>
  );
}
