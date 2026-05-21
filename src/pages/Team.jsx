import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import CTAButton from '../components/CTAButton';
import useSEO from '../hooks/useSEO';

export default function Team() {
  useSEO(
    'Our Clinical Specialists & Directors',
    'Meet the medical directors and consultants at ALMACURA, leading integrative wellness, pelvic floor rehabilitation, non-surgical pain management, and preventive women’s healthcare.'
  );
  const teamMembers = [
    {
      name: 'Dr. K. Vijaya Shekar Reddy',
      credentials: ['MBBS', 'MS'],
      role: 'Founder & Mentor – ALMACURA',
      specialty: 'General Surgeon | Integrative Medicine Advocate',
      bio: 'Dr. K. Vijaya Shekar Reddy is a senior General Surgeon with more than three decades of clinical, general and laparoscopic surgical experience. Through years of managing complex chronic and lifestyle-related health conditions, he recognized the growing need for a broader healthcare approach that extends beyond conventional symptom-based treatment and supports long-term recovery, resilience, and overall well-being.',
      fullBio: 'This vision led to the establishment of ALMACURA — a specialized institute focused on Integrative Medicine, Healthspan Optimization, Functional & Regenerative Gynecology, and advanced non-invasive wellness therapies. His approach combines modern clinical medicine with evidence-informed supportive and regenerative technologies designed to help individuals improve functional health, vitality, recovery, and quality of life through structured and personalized care pathways.',
      clinicalFocus: [
        'Integrative & Preventive Healthcare',
        'Healthspan Optimization',
        'Functional & Regenerative Wellness',
        'Recovery & Rehabilitation Support',
        'Personalized Wellness Pathways',
        'Non-Surgical Advanced Therapies',
        'Metabolic & Circulatory Wellness Support',
        'Long-Term Functional Health Improvement'
      ],
      areas: [
        'Hyperbaric Oxygen Therapy (HBOT)',
        'EECP Therapy',
        'Photobiomodulation Therapy',
        'Ozone Therapy',
        'Hydrogen Therapy',
        'Functional Recovery Programs',
        'Lifestyle & Wellness Optimization',
        'Regenerative Supportive Therapies'
      ],
      note: 'At ALMACURA, our goal is not only to support recovery from illness, but also to help individuals improve vitality, functional wellness, and long-term quality of life through integrative, patient-centric healthcare.'
    },
    {
      name: 'Dr. K. Lalitha Reddy',
      credentials: ['MBBS', 'DGO'],
      role: 'Director – Nightingale Hospital | Senior Functional & Regenerative Gynaecology Consultant',
      specialty: 'Gynaecology & Obstetrics | Functional & Regenerative Gynaecology | Women’s Wellness | Pelvic Floor Rehabilitation | Preventive Women’s Healthcare',
      bio: 'Dr. K. Lalitha Reddy is a senior Gynaecologist & Obstetrician with over 32 years of clinical experience in women’s healthcare, pregnancy care, functional gynaecology, and regenerative wellness. She currently serves as the Director of Nightingale Hospital and is actively involved in both clinical care and healthcare leadership, with a strong focus on patient-centric and technology-supported women’s wellness services.',
      fullBio: 'Her clinical practice combines conventional gynaecological expertise with modern non-surgical and minimally invasive regenerative approaches aimed at improving pelvic wellness, intimate health, post-pregnancy recovery, and quality of life in women across different age groups. She has a special interest in Functional & Regenerative Gynaecology utilizing advanced supportive technologies such as HIFEM and HIFU-based wellness therapies as part of structured pelvic rehabilitation and women’s wellness programs. Dr. Lalitha Reddy’s approach emphasizes confidential, individualized, and function-oriented care, integrating preventive women’s healthcare with modern wellness-focused treatment pathways tailored to each patient’s clinical and lifestyle needs.',
      clinicalFocus: [
        'Functional & Regenerative Gynaecology',
        'Pelvic Floor Rehabilitation',
        'Women’s Preventive Healthcare',
        'Menopausal Wellness Support',
        'Post-Pregnancy Recovery Support',
        'Non-Surgical Women’s Wellness Therapies',
        'Hormonal Wellness Support',
        'Intimate Wellness & Pelvic Health',
        'High-Risk Pregnancy Care',
        'Integrative Women’s Wellness Programs'
      ],
      conditions: [
        'Stress Urinary Incontinence Support',
        'Vaginal Laxity & Pelvic Support Concerns',
        'Cystocele & Rectocele',
        'Postmenopausal Dryness & Discomfort',
        'PCOS / Hormonal Wellness Concerns',
        'Pelvic Floor Weakness',
        'Postpartum Recovery Concerns',
        'Functional Intimate Wellness Issues',
        'Menopausal Wellness-Related Concerns',
        'Recurrent White Discharge'
      ],
      therapies: [
        'HIFEM Pelvic Floor Strengthening Programs',
        'HIFU-Based Women’s Wellness Therapies',
        'Functional Gynaecology Consultations',
        'Non-Surgical Pelvic Wellness Programs',
        'Vaginal Rejuvenation & Wellness Support Procedures',
        'Vaginoplasty',
        'Stretch Marks Reduction Procedures',
        'Warts & Skin Tags Removal',
        'Preventive Women’s Health Assessments',
        'Integrative Women’s Wellness Support'
      ],
      approach: 'Dr. Lalitha Reddy follows a patient-centric and function-oriented approach focused on improving women’s wellness, pelvic health, comfort, and quality of life through personalized and minimally invasive care pathways. Her philosophy combines traditional gynaecological expertise with regenerative and wellness-focused technologies to support long-term functional health and confidence in women across all stages of life.',
      experience: '32+ Years'
    },
    {
      name: 'Dr. Srujit Kumar Kaparthy',
      credentials: ['MBBS', 'MS (Orthopaedics)', 'FIA'],
      role: 'Integrative Pain Management & Orthopaedic Consultant',
      specialty: 'Orthopaedics | Non-Surgical Pain Management | DSCB Therapy | Musculoskeletal Rehabilitation | Spine & Joint Care',
      bio: 'Dr. Srujit Kumar Kaparthy is an Orthopaedic and Integrative Pain Management Consultant with clinical expertise in musculoskeletal disorders, spine and joint conditions, sports injuries, and minimally invasive pain management approaches. His practice focuses on improving functional mobility, reducing pain burden, and helping patients return to daily activity through structured, non-surgical, and rehabilitation-oriented care pathways.',
      areas: ['Orthopaedics', 'Pain Management', 'DSCB Therapy', 'Spine & Joint Care', 'Sports Injury Rehabilitation', 'Functional Mobility Restoration'],
      fullBio: 'He has a special interest in Distal Sodium Channel Block (DSCB) Therapy, a minimally invasive pain management approach used in selected chronic musculoskeletal and neuropathic pain conditions. Dr. Srujit\'s approach emphasizes conservative and evidence-informed management wherever appropriate, particularly for patients seeking alternatives or supportive pathways before considering major surgical intervention.',
      clinicalFocus: ['Chronic Musculoskeletal Pain Management', 'Distal Sodium Channel Block (DSCB) Therapy', 'Spine & Joint Disorders', 'Sciatica & Nerve-Related Pain Support', 'Shoulder, Knee & Back Pain Management', 'Sports Injury Rehabilitation', 'Functional Mobility Restoration', 'Orthopaedic Rehabilitation Support', 'Integrative Recovery Protocols', 'Non-Surgical Orthopaedic Care'],
      conditions: ['Chronic Back Pain', 'Sciatica & Radicular Pain', 'Cervical & Lumbar Spondylosis', 'Disc Bulge-Related Pain', 'Frozen Shoulder & Shoulder Pain', 'Knee Pain & Degenerative Joint Conditions', 'Tendon & Ligament Injuries', 'Musculoskeletal Pain Syndromes', 'Sports Injuries', 'Functional Mobility Limitations'],
      therapies: ['Distal Sodium Channel Block (DSCB) Therapy', 'Non-Surgical Pain Management Procedures', 'Trigger Point & Localized Pain Interventions', 'Orthopaedic Assessment & Rehabilitation Planning', 'Joint & Musculoskeletal Care', 'Regenerative Support-Based Recovery Approaches', 'Functional Recovery Guidance', 'Integrative Pain Support Protocols']
    },
    {
      name: 'Dr. Ch. Nishitha Reddy',
      credentials: ['MBBS', 'MS (OBGYN)'],
      role: 'Functional & Regenerative Gynaecology Consultant',
      specialty: 'Functional Gynaecology | Regenerative Women\'s Wellness | Pelvic Floor Rehabilitation | Non-Surgical Intimate Wellness | Preventive Women\'s Health',
      bio: 'Dr. Ch. Nishitha Reddy is a Functional and Regenerative Gynaecology Consultant with expertise in women\'s wellness, pelvic health, hormonal well-being, and non-surgical functional gynaecological care. Her clinical approach focuses on helping women improve comfort, confidence, pelvic support, and overall intimate wellness through personalized, function-oriented treatment strategies.',
      areas: ['Functional Gynaecology', 'Pelvic Floor Rehabilitation', 'Women\'s Wellness', 'HIFU & HIFEM Therapies', 'Post-Pregnancy Recovery', 'Menopausal Wellness'],
      fullBio: 'She has a special interest in advanced non-invasive women\'s wellness technologies including High-Intensity Focused Ultrasound (HIFU) and High-Intensity Focused Electromagnetic (HIFEM) therapies, which are utilized as part of structured pelvic floor strengthening, tissue support, and rehabilitation-focused wellness programs. Dr. Nishitha emphasizes patient privacy, comfort, and individualized care planning.',
      clinicalFocus: ['Functional & Regenerative Gynaecology', 'Pelvic Floor Wellness & Rehabilitation', 'Non-Surgical Intimate Wellness Therapies', 'Women\'s Preventive Health', 'Post-Pregnancy Recovery Support', 'Menopausal Wellness Support', 'Hormonal Wellness Guidance', 'Pelvic Muscle Strengthening Programs', 'Integrative Women\'s Health Care', 'Functional Recovery-Based Gynaecology'],
      conditions: ['Pelvic Floor Weakness', 'Stress Urinary Incontinence Support', 'Postpartum Pelvic Wellness Concerns', 'Vaginal Laxity & Tissue Support Concerns', 'Menopausal Vaginal Dryness & Discomfort', 'Pelvic Muscle Weakness', 'Functional Intimate Wellness Concerns', 'Hormonal Transition-Related Wellness Issues', 'Reduced Pelvic Support & Core Stability'],
      therapies: ['HIFU-Based Women\'s Wellness Therapies', 'HIFEM Pelvic Floor Strengthening Programs', 'Functional Gynaecology Consultations', 'Non-Surgical Pelvic Wellness Protocols', 'Regenerative Women\'s Wellness Support', 'Pelvic Rehabilitation Guidance', 'Preventive Women\'s Health Assessments', 'Integrative Hormonal Wellness Support']
    },
    {
      name: 'Dr. K. B. Hareesh Kumar',
      credentials: ['MBBS', 'DNB'],
      role: 'Integrative & Functional Medicine Consultant',
      specialty: 'Integrative Medicine | Functional Medicine | Family Medicine | Healthspan Optimization | Preventive & Regenerative Wellness',
      bio: 'Dr. K. B. Hareesh Kumar is an Integrative & Functional Medicine Consultant and Family Physician focused on preventive healthcare, chronic disease management, regenerative wellness, and long-term health optimization. At ALMACURA, he oversees individualized wellness and recovery programs integrating advanced non-invasive supportive therapies including HBOT, Medical Ozone Therapy, Hydrogen Therapy, EECP, and lifestyle-focused wellness protocols.',
      areas: ['Integrative Medicine', 'Functional Medicine', 'Healthspan Optimization', 'Preventive Healthcare', 'HBOT', 'Ozone Therapy', 'EECP'],
      fullBio: 'His clinical approach combines modern evidence-based medicine with personalized integrative care strategies designed to support recovery, improve functional health, and enhance overall quality of life. Dr. Hareesh Kumar adopts a holistic and patient-centric approach, focusing not only on symptom management but also on improving resilience, vitality, and long-term functional well-being.',
      clinicalFocus: ['Integrative & Functional Medicine', 'Family & Preventive Medicine', 'Healthspan Optimization', 'Lifestyle & Metabolic Wellness', 'Chronic Disease Wellness Support', 'Cellular Recovery & Wellness Support', 'Functional Health Optimization', 'Recovery & Rehabilitation Support', 'Non-Surgical Wellness Therapies', 'Personalized Integrative Care Programs'],
      conditions: ['Diabetes & Metabolic Syndrome', 'Hypertension & Lifestyle Disorders', 'Thyroid & Hormonal Wellness Concerns', 'Chronic Fatigue & Low Energy', 'Stress-Related Wellness Concerns', 'Sleep & Recovery Issues', 'Chronic Inflammation Support', 'General Wellness & Preventive Care', 'Age-Related Functional Health Concerns', 'Recovery & Rehabilitation Support Needs'],
      therapies: ['Hyperbaric Oxygen Therapy (HBOT)', 'Medical Ozone Therapy', 'Hydrogen Therapy', 'EECP Therapy', 'Infrared Sauna Therapy', 'Integrative Recovery Programs', 'Functional Wellness Protocols', 'Preventive Health Evaluations', 'Lifestyle Optimization Programs', 'Personalized Wellness Planning']
    },
    {
      name: 'Dr. Yellewar Niharika',
      credentials: ['BNYS'],
      role: 'Integrative Medicine & Lifestyle Consultant',
      specialty: 'Lifestyle Medicine | Functional Wellness | Metabolic Health Support | Integrative Rehabilitation | Preventive Healthcare',
      bio: 'Dr. Yellewar Niharika is an Integrative Medicine and Lifestyle Wellness Specialist focused on preventive healthcare, metabolic wellness, functional rehabilitation, and sustainable lifestyle transformation. Her clinical approach combines naturopathy, therapeutic yoga, lifestyle medicine, wellness counselling, and integrative supportive therapies to help individuals improve overall health, resilience, and long-term well-being.',
      areas: ['Lifestyle Medicine', 'Metabolic Health', 'Therapeutic Yoga', 'Functional Wellness', 'Stress Management', 'Weight Management'],
      fullBio: 'She works closely with individuals managing metabolic imbalance, obesity, stress-related wellness concerns, hormonal health issues, fatigue, and chronic lifestyle-associated conditions. Dr. Niharika emphasizes holistic wellness, patient education, and individualized lifestyle interventions aimed at improving functional health, recovery, and quality of life.',
      clinicalFocus: ['Lifestyle & Preventive Medicine', 'Functional Wellness Optimization', 'Metabolic Health Support', 'Weight & Obesity Wellness Support', 'Stress & Sleep Wellness Programs', 'Hormonal Wellness Support', 'Integrative Rehabilitation Support', 'Therapeutic Yoga & Mobility Wellness', 'Fatigue & Lifestyle Disorder Support', 'Wellness Counselling & Lifestyle Modification'],
      conditions: ['Obesity & Metabolic Syndrome', 'Diabetes Wellness Support', 'PCOS & Hormonal Wellness Concerns', 'Stress & Burnout-Related Wellness Issues', 'Chronic Fatigue & Low Energy', 'Sleep & Lifestyle Imbalance', 'Joint & Musculoskeletal Wellness Support', 'Cervical & Lumbar Discomfort Support', 'Migraine & Stress-Related Concerns', 'Lifestyle-Associated Health Conditions'],
      therapies: ['Lifestyle & Wellness Programs', 'Therapeutic Yoga Sessions', 'Hydrotherapy', 'Mud Therapy', 'Integrative Detoxification Programs', 'Wellness Rehabilitation Support', 'Ozone Therapy Support Programs', 'HBOT Supportive Wellness Programs', 'Functional Lifestyle Counselling', 'Stress Management & Wellness Protocols']
    },
    {
      name: 'Dr. B. Krishna',
      credentials: ['BHMS'],
      role: 'Integrative Medicine & Cellular Wellness Co-ordinator',
      specialty: 'Integrative Medicine | Cellular Wellness Support | Recovery Optimization | HBOT | Ozone Therapy | Hydrogen Therapy',
      bio: 'Dr. B. Krishna is an Integrative Medicine professional focused on recovery optimization, cellular wellness support, and non-invasive integrative therapies aimed at improving overall functional well-being. At ALMACURA, he is actively involved in coordinating integrative wellness and recovery programs utilizing advanced supportive technologies including HBOT, Medical Ozone Therapy, and Hydrogen Therapy.',
      areas: ['Cellular Wellness', 'HBOT Support', 'Ozone Therapy', 'Recovery Optimization', 'Hydrogen Therapy', 'Sports Recovery'],
      fullBio: 'His clinical approach combines structured wellness coordination with supportive recovery-focused therapies designed to assist individuals seeking improved resilience, vitality, and rehabilitation support. Dr. Krishna\'s approach prioritizes patient comfort, holistic support, and individualized wellness planning.',
      clinicalFocus: ['Integrative Recovery Support', 'Cellular Wellness Optimization', 'Hyperbaric Oxygen Therapy (HBOT) Support', 'Medical Ozone Therapy Support', 'Hydrogen Therapy Support', 'Recovery & Rehabilitation Assistance', 'Fatigue & Energy Wellness Support', 'Sports Recovery Support', 'Wellness Coordination Programs', 'Functional Recovery Assistance'],
      conditions: ['Fatigue & Low Energy', 'Recovery & Rehabilitation Support Needs', 'Sports Recovery & Performance Recovery Support', 'Wellness Optimization Goals', 'Stress & Recovery Imbalance', 'General Functional Wellness Concerns', 'Chronic Recovery Support Requirements', 'Post-Illness Recovery Support', 'Lifestyle-Related Fatigue Concerns'],
      therapies: ['Hyperbaric Oxygen Therapy (HBOT)', 'Medical Ozone Therapy', 'Hydrogen Therapy', 'Integrative Recovery Protocols', 'Cellular Wellness Support Programs', 'Functional Recovery Assistance Programs', 'Wellness Rehabilitation Support', 'Recovery Monitoring & Coordination']
    },
    {
      name: 'Dr. K.K. Tilak Chakravarthy',
      credentials: ['BHMS'],
      role: 'Homeopathic & Integrative Medicine Consultant',
      specialty: 'Homeopathy | Integrative Medicine | Allergy Management | Neurological Wellness Support | Chronic Disease Support',
      bio: 'Dr. K.K. Tilak Chakravarthy is a Homeopathic and Integrative Medicine Consultant with over 20 years of clinical experience in managing chronic and lifestyle-related health conditions through individualized and holistic care approaches. His practice focuses on supporting long-term wellness, recovery, and overall functional health through personalized homeopathic treatment strategies.',
      areas: ['Classical Homeopathy', 'Allergy Management', 'Chronic Disease Support', 'Neurological Wellness', 'Autism Support', 'Skin Disorders'],
      fullBio: 'He has extensive experience in managing allergic conditions, chronic skin disorders, neurological wellness concerns, and developmental support cases including autism spectrum-related care support. Dr. Tilak Chakravarthy emphasizes detailed patient evaluation, individualized treatment planning, and long-term wellness-oriented care.',
      clinicalFocus: ['Classical Homeopathy', 'Integrative Medicine Support', 'Allergy & Immune Wellness Support', 'Neurological Wellness Support', 'Autism Supportive Care', 'Chronic Skin Disorder Support', 'Pediatric Wellness Support', 'Lifestyle & Chronic Disease Support', 'Holistic Recovery Assistance', 'Long-Term Wellness Management'],
      conditions: ['Allergic Rhinitis & Recurrent Allergies', 'Sinus & Respiratory Allergy Concerns', 'Eczema & Chronic Skin Conditions', 'Psoriasis Wellness Support', 'Autism Spectrum-Related Supportive Care', 'Neurological Wellness Concerns', 'Migraine & Stress-Related Wellness Issues', 'Chronic Fatigue & Functional Wellness Concerns', 'Recurrent Lifestyle-Related Health Issues'],
      therapies: ['Classical Homeopathic Consultations', 'Individualized Holistic Treatment Planning', 'Integrative Wellness Support', 'Chronic Disease Wellness Support', 'Long-Term Functional Wellness Monitoring', 'Lifestyle & Wellness Guidance', 'Recovery & Rehabilitation Support Assistance']
    }
  ];

  const [expanded, setExpanded] = useState(null);

  return (
    <div className="bg-brand-white pt-24">
      {/* Hero */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <SectionLabel>MEDICAL TEAM</SectionLabel>
            <h1 className="font-cormorant text-6xl md:text-7xl text-brand-navy mb-6 italic">
              Expert Consultants & Specialists
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed max-w-3xl mx-auto">
              Our multidisciplinary team brings together expertise in integrative medicine, advanced therapeutics, and personalized patient care.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {teamMembers.map((member, index) => {
              const isOpen = expanded === index;
              return (
                <ScrollReveal key={member.name} delay={index * 0.05}>
                  <div className={`glass-card transition-all duration-300 ${isOpen ? 'border-brand-teal' : 'hover:border-brand-teal/50'}`}>
                    {/* Header - always visible */}
                    <button
                      onClick={() => setExpanded(isOpen ? null : index)}
                      className="w-full text-left p-8 flex items-start justify-between gap-6"
                    >
                      <div className="flex-1">
                        <h3 className="font-cormorant text-3xl text-brand-navy mb-1">{member.name}</h3>
                        <div className="flex flex-wrap items-center gap-1 mb-3">
                          {member.credentials.map((cred, i) => (
                            <span key={i} className="flex items-center gap-1">
                              <span className="font-mono text-brand-teal text-xs uppercase tracking-wider">{cred}</span>
                              {i < member.credentials.length - 1 && <span className="text-brand-border">·</span>}
                            </span>
                          ))}
                          {member.experience && (
                            <span className="ml-2 px-2 py-0.5 bg-brand-teal/10 text-brand-teal text-[10px] font-mono font-bold rounded-sm uppercase tracking-wider">
                              {member.experience} Experience
                            </span>
                          )}
                        </div>
                        <p className="text-brand-blue font-dm font-semibold text-sm mb-1">{member.role}</p>
                        <p className="text-brand-muted text-xs italic">{member.specialty}</p>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-brand-teal flex-shrink-0 mt-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Expanded Content */}
                    {isOpen && (
                      <div className="px-8 pb-8 border-t border-brand-border">
                        {/* Bio */}
                        <div className="pt-6 mb-6">
                          <p className="text-brand-muted leading-relaxed">{member.bio}</p>
                          {member.fullBio && <p className="text-brand-muted leading-relaxed mt-3">{member.fullBio}</p>}
                          {member.approach && (
                            <div className="mt-4 p-5 bg-brand-ice/40 rounded-2xl border border-brand-teal/10">
                              <h5 className="font-dm font-bold text-brand-teal text-[10px] uppercase tracking-[0.2em] mb-1.5">Approach to Care</h5>
                              <p className="text-brand-muted text-sm leading-relaxed italic">"{member.approach}"</p>
                            </div>
                          )}
                          {member.note && (
                            <div className="mt-4 p-5 bg-brand-ice/40 rounded-2xl border border-brand-teal/10">
                              <h5 className="font-dm font-bold text-brand-teal text-[10px] uppercase tracking-[0.2em] mb-1.5">Founder's Note</h5>
                              <p className="text-brand-muted text-sm leading-relaxed italic">"{member.note}"</p>
                            </div>
                          )}
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          {/* Clinical Focus */}
                          {member.clinicalFocus && (
                            <div>
                              <h4 className="font-dm font-semibold text-brand-navy text-xs uppercase tracking-widest mb-3 pb-2 border-b border-brand-border">Clinical Focus</h4>
                              <ul className="space-y-1.5">
                                {member.clinicalFocus.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-brand-muted text-sm">
                                    <span className="text-brand-teal mt-1.5 flex-shrink-0" style={{width:'4px',height:'4px',borderRadius:'50%',background:'#0B6E6E',display:'inline-block'}}></span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Conditions */}
                          {member.conditions && (
                            <div>
                              <h4 className="font-dm font-semibold text-brand-navy text-xs uppercase tracking-widest mb-3 pb-2 border-b border-brand-border">Conditions Managed</h4>
                              <ul className="space-y-1.5">
                                {member.conditions.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-brand-muted text-sm">
                                    <span className="text-brand-teal mt-1.5 flex-shrink-0" style={{width:'4px',height:'4px',borderRadius:'50%',background:'#0B6E6E',display:'inline-block'}}></span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Therapies */}
                          {member.therapies && (
                            <div>
                              <h4 className="font-dm font-semibold text-brand-navy text-xs uppercase tracking-widest mb-3 pb-2 border-b border-brand-border">Therapies & Procedures</h4>
                              <ul className="space-y-1.5">
                                {member.therapies.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-brand-muted text-sm">
                                    <span className="text-brand-teal mt-1.5 flex-shrink-0" style={{width:'4px',height:'4px',borderRadius:'50%',background:'#0B6E6E',display:'inline-block'}}></span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Fallback: areas only (for Dr. Vijay) */}
                          {!member.conditions && !member.therapies && (
                            <div className="md:col-span-2">
                              <h4 className="font-dm font-semibold text-brand-navy text-xs uppercase tracking-widest mb-3 pb-2 border-b border-brand-border">Areas of Expertise</h4>
                              <div className="flex flex-wrap gap-2">
                                {member.areas.map((area, i) => (
                                  <span key={i} className="px-3 py-1 bg-brand-ice text-brand-teal text-xs rounded-sm">{area}</span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-8">
              Schedule a Consultation
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Connect with our medical team to discuss your health goals and explore personalized treatment protocols tailored to your needs.
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
