import { Award, BookOpen, Heart, Microscope, TrendingUp, Users } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import CTAButton from '../components/CTAButton';
import useSEO from '../hooks/useSEO';

export default function Founder() {
  useSEO(
    'Dr. K. Vijaya Shekar Reddy - Founder & Mentor',
    'Learn about Dr. K. Vijaya Shekar Reddy, senior General Surgeon and Founder & Mentor of ALMACURA, advocate of Integrative Medicine & Healthspan Optimization.'
  );
  const timeline = [
    {
      year: '1990s',
      title: 'Medical Foundation',
      description: 'Completed MBBS and MS in General Surgery, establishing strong clinical foundation in surgical medicine.'
    },
    {
      year: '2000s',
      title: 'Clinical Practice',
      description: 'Extensive surgical practice with focus on patient outcomes, recovery optimization, and long-term health.'
    },
    {
      year: '2010s',
      title: 'Integrative Medicine',
      description: 'Expanded into integrative approaches, exploring advanced therapeutic technologies and regenerative medicine.'
    },
    {
      year: '2020s',
      title: 'Longevity Medicine',
      description: 'Specialized in health span optimization, biological age reversal, and preventive medical interventions.'
    },
    {
      year: '2025',
      title: 'ALMACURA Founded',
      description: 'Established institute dedicated to integrative medicine, advanced diagnostics, and evidence-based regenerative therapies.'
    }
  ];

  const clinicalVision = [
    'Integrative & Preventive Healthcare',
    'Healthspan Optimization',
    'Functional & Regenerative Wellness',
    'Recovery & Rehabilitation Support',
    'Personalized Wellness Pathways',
    'Non-Surgical Advanced Therapies',
    'Metabolic & Circulatory Wellness Support',
    'Long-Term Functional Health Improvement'
  ];

  const integrativeFocus = [
    'Hyperbaric Oxygen Therapy (HBOT)',
    'EECP Therapy',
    'Photobiomodulation Therapy',
    'Ozone Therapy',
    'Hydrogen Therapy',
    'Functional Recovery Programs',
    'Lifestyle & Wellness Optimization',
    'Regenerative Supportive Therapies'
  ];

  return (
    <div className="bg-brand-white pt-24">
      {/* Hero */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="fadeLeft">
              <div className="relative">
                <img
                  src="/07_round_signage_mockup.png"
                  alt="ALMACURA Institute Signage"
                  className="w-full max-w-sm rounded-sm object-cover mx-auto"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div>
                <SectionLabel>FOUNDER & MENTOR – ALMACURA</SectionLabel>
                <h1 className="font-cormorant text-6xl md:text-7xl text-brand-navy mb-6 italic">
                  Dr. K. Vijaya Shekar Reddy
                </h1>
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="glass-card px-4 py-2">
                    <span className="font-mono text-brand-teal text-sm uppercase tracking-wider">
                      MBBS
                    </span>
                  </div>
                  <div className="glass-card px-4 py-2">
                    <span className="font-mono text-brand-teal text-sm uppercase tracking-wider">
                      MS
                    </span>
                  </div>
                </div>
                <div className="space-y-6 text-brand-muted leading-relaxed">
                  <p>
                    Dr. K. Vijaya Shekar Reddy is a senior General Surgeon with more than three decades of clinical, general and laparoscopic surgical experience. Through years of managing complex chronic and lifestyle-related health conditions, he recognized the growing need for a broader healthcare approach that extends beyond conventional symptom-based treatment and supports long-term recovery, resilience, and overall well-being.
                  </p>
                  <p>
                    This vision led to the establishment of ALMACURA — a specialized institute focused on Integrative Medicine, Healthspan Optimization, Functional & Regenerative Gynecology, and advanced non-invasive wellness therapies.
                  </p>
                  <p className="text-brand-navy font-dm font-medium">
                    His approach combines modern clinical medicine with evidence-informed supportive and regenerative technologies designed to help individuals improve functional health, vitality, recovery, and quality of life through structured and personalized care pathways.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <SectionLabel>PROFESSIONAL JOURNEY</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-16">
              Three Decades of Medical Excellence
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-24 top-0 bottom-0 w-px bg-brand-teal/30"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <ScrollReveal key={item.year} delay={index * 0.1}>
                  <div className="relative pl-12 md:pl-40">
                    {/* Year Badge */}
                    <div className="absolute left-0 md:left-0 top-0 w-20 glass-card px-4 py-2 -translate-x-1/2 md:translate-x-0">
                      <div className="font-mono text-brand-teal text-sm text-center">
                        {item.year}
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="absolute left-0 md:left-24 top-3 w-3 h-3 bg-brand-teal rounded-full -translate-x-1/2"></div>
                    {/* Content */}
                    <div className="glass-card p-6">
                      <h3 className="font-dm font-semibold text-brand-navy text-xl mb-3">
                        {item.title}
                      </h3>
                      <p className="text-brand-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <SectionLabel>FOUNDER'S NOTE</SectionLabel>
            <div className="border-l-4 border-brand-teal pl-8 md:pl-12">
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-cormorant italic text-brand-teal leading-tight mb-8">
                "At ALMACURA, our goal is not only to support recovery from illness, but also to help individuals improve vitality, functional wellness, and long-term quality of life through integrative, patient-centric healthcare."
              </blockquote>
              <div className="text-brand-navy font-dm font-medium">
                – Dr. K. Vijaya Shekar Reddy
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Clinical Vision & Integrative Focus */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <ScrollReveal variant="fadeLeft">
              <div>
                <SectionLabel>CLINICAL VISION</SectionLabel>
                <h2 className="font-cormorant text-5xl text-brand-navy mb-8">
                  Founder's Clinical Vision
                </h2>
                <div className="space-y-3">
                  {clinicalVision.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-brand-ice/25 rounded-sm border border-brand-border hover:border-brand-teal/30 transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0"></span>
                      <span className="text-brand-navy font-dm font-medium text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div>
                <SectionLabel>INTEGRATIVE FOCUS</SectionLabel>
                <h2 className="font-cormorant text-5xl text-brand-navy mb-8">
                  Areas of Integrative Focus
                </h2>
                <div className="space-y-3">
                  {integrativeFocus.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-brand-ice/25 rounded-sm border border-brand-border hover:border-brand-teal/30 transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0"></span>
                      <span className="text-brand-navy font-dm font-medium text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Clinical Team Identity */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>INSTITUTE IDENTITY</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-16">
              Clinical Excellence, Branded Experience
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="relative rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-brand-white/40 z-10"></div>
                <img
                  src="/08_scrubs_front.png"
                  alt="ALMACURA Clinical Staff Uniform - Front"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-brand-white/40 z-10"></div>
                <img
                  src="/09_scrubs_back.png"
                  alt="ALMACURA Clinical Staff Uniform - Back"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center max-w-2xl mx-auto">
              <p className="text-brand-muted leading-relaxed">
                Every detail reflects our commitment to clinical excellence — from branded uniforms that establish professional identity to premium facilities that ensure patient comfort and confidence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionLabel>MEDICAL PHILOSOPHY</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-12">
              Principles of Practice
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {[
              {
                principle: 'Diagnostics Before Therapy',
                description: 'Never guess. Always assess. Every therapeutic intervention must be preceded by comprehensive diagnostic evaluation.'
              },
              {
                principle: 'Evidence-Informed Protocols',
                description: 'Therapies must have established mechanisms of action and clinical evidence. No unproven treatments. No exaggerated claims.'
              },
              {
                principle: 'Personalized Medicine',
                description: 'No two patients are identical. Protocols must be tailored to individual biomarkers, health status, and therapeutic goals.'
              },
              {
                principle: 'Measured Outcomes',
                description: 'What gets measured gets optimized. Track biomarkers, assess clinical response, and adjust protocols based on data.'
              }
            ].map((item, index) => (
              <ScrollReveal key={item.principle} delay={index * 0.1}>
                <div className="glass-card p-8">
                  <h3 className="font-dm font-semibold text-brand-navy text-xl mb-3 uppercase tracking-wide">
                    {item.principle}
                  </h3>
                  <p className="text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-8">
              Experience Integrative Medicine
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Reddy to discuss your health optimization goals and explore personalized therapeutic protocols.
            </p>
            <CTAButton variant="primary" to="/contact">
              Book Consultation
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
