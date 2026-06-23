'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import {
  Music,
  HeartHandshake,
  Zap,
  Smile,
  Video,
  ArrowLeft,
  CheckCircle2,
  Loader2,
} from 'lucide-react';

/* ─── Department Data ─────────────────────────────────── */
const departmentData = {
  choir: {
    name: 'Choir Department',
    slug: 'choir',
    icon: Music,
    color: '#06b6d4',
    colorRgb: '6, 182, 212',
    tagline: 'Where Voices Become Worship',
    image: '/choir.jpg',
    about:
      'The Choir Department is the heartbeat of worship at House of Mercy. Our team of dedicated singers and instrumentalists lead the congregation into powerful encounters with God through anointed praise and worship. We believe music is one of the most powerful ways to express devotion and create an atmosphere for the Holy Spirit to move.',
    mission:
      'To lead the church into transformative worship experiences that honour God, edify believers, and draw seekers into His presence.',
    responsibilities: [
      'Lead congregational praise and worship every Sunday',
      'Ministering special songs during key church services',
      'Consistent weekly rehearsals to maintain excellence',
      'Supporting visiting ministers and guest choirs',
      'Developing new worship songs and arrangements',
    ],
    activities: [
      { title: 'Praise & Worship', desc: 'Leading the church in vibrant Sunday worship sessions that set the tone for transformative services.' },
      { title: 'Special Ministration', desc: 'Preparing and delivering special musical presentations during conventions, crusades, and milestone services.' },
      { title: 'Choir Rehearsals', desc: 'Weekly intensive rehearsals focused on vocal excellence, harmony, and spiritual preparation.' },
      { title: 'Music Training', desc: 'Capacity building sessions covering music theory, voice training, and instrument mastery.' },
    ],
    whyJoin: [
      { title: 'Develop Your Gift', desc: 'Receive structured vocal and musical training from experienced ministers.' },
      { title: 'Deepen Your Worship', desc: 'Grow spiritually through consistent engagement with the presence of God.' },
      { title: 'Build Community', desc: 'Join a close-knit family of passionate worshippers who pray and serve together.' },
      { title: 'Impact Lives', desc: 'Your voice becomes a vessel for healing, deliverance, and transformation in the congregation.' },
    ],
    leader: 'Deaconess Esther Cole',
  },
  usher: {
    name: 'Usher Department',
    slug: 'usher',
    icon: HeartHandshake,
    color: '#6366f1',
    colorRgb: '99, 102, 241',
    tagline: 'First Impressions That Last a Lifetime',
    image: '/usher.jpg',
    about:
      'The Usher Department is the welcoming face of House of Mercy. Our dedicated ushers ensure that every person who walks through our doors — whether a long-standing member or a first-time visitor — feels warmly welcomed, guided, and at ease. We operate with excellence, warmth, and the love of Christ in everything we do.',
    mission:
      'To create a warm, orderly, and Spirit-filled environment that allows every member and guest to engage fully in worship without distraction.',
    responsibilities: [
      'Welcoming members and visitors at the entrance',
      'Guiding worshippers to available seating',
      'Assisting with service coordination and crowd management',
      'Distributing materials during services (bulletins, offering envelopes)',
      'Ensuring safety and accessibility for all attendees',
    ],
    activities: [
      { title: 'Welcoming Guests', desc: 'Receiving first-time visitors with warmth, providing information cards, and helping them feel at home.' },
      { title: 'Seating Assistance', desc: 'Efficiently guiding the congregation to their seats while maintaining order and decorum throughout services.' },
      { title: 'Service Coordination', desc: 'Working closely with church leadership to ensure smooth flow of every service and event.' },
      { title: 'Special Events', desc: 'Coordinating ushering duties during conventions, dedications, weddings, and major church programmes.' },
    ],
    whyJoin: [
      { title: 'Serve With Dignity', desc: 'Represent Christ as the first point of contact for every soul that enters the house of God.' },
      { title: 'Develop People Skills', desc: 'Build confidence, communication, and leadership abilities that extend beyond church.' },
      { title: 'Be Part of the First Impression', desc: 'Directly influence how newcomers perceive H.O.M and the love of God.' },
      { title: 'Grow in Excellence', desc: 'Learn protocols and skills in hospitality, crowd management, and event coordination.' },
    ],
    leader: 'Brother Emmanuel Duke',
  },
  youth: {
    name: 'Youth Department',
    slug: 'youth',
    icon: Zap,
    color: '#a78bfa',
    colorRgb: '167, 139, 250',
    tagline: 'A Generation on Fire for God',
    image: '/youth.jpg',
    about:
      'The Youth Department at House of Mercy is a dynamic community of young believers aged 16–35 committed to living boldly for Christ. We believe this generation is not the church of tomorrow — we are the church of today. Our department creates spaces for young people to encounter God, discover purpose, build friendships, and impact their world.',
    mission:
      'To raise a generation of passionate, purpose-driven young believers who are rooted in the Word, connected in community, and sent out as light in their world.',
    responsibilities: [
      'Organising weekly youth fellowship meetings',
      'Coordinating youth evangelism and community outreach',
      'Mentoring younger members and new converts',
      'Planning youth-specific events, conferences, and retreats',
      'Supporting the overall vision of the church',
    ],
    activities: [
      { title: 'Youth Fellowship', desc: 'Weekly gatherings filled with worship, the Word, discussion, and genuine community.' },
      { title: 'Evangelism', desc: 'Taking the Gospel to campuses, neighbourhoods, and public spaces through intentional outreach.' },
      { title: 'Leadership Training', desc: 'Developing the next generation of church leaders through mentorship, workshops, and practical ministry experience.' },
      { title: 'Retreats & Conferences', desc: 'Annual gatherings designed to refresh, refocus, and re-fire young believers for greater service.' },
    ],
    whyJoin: [
      { title: 'Discover Your Purpose', desc: 'Receive mentorship and guidance that helps you identify and walk in your God-given calling.' },
      { title: 'Build Lasting Friendships', desc: 'Connect with a community of like-minded young believers who will journey through life with you.' },
      { title: 'Develop as a Leader', desc: 'Take on responsibilities and roles that stretch you and build character, confidence, and competence.' },
      { title: 'Make an Impact', desc: 'Be part of community projects and evangelism that genuinely changes lives and transforms communities.' },
    ],
    leader: 'Brother Samuel & Sister Deborah',
  },
  children: {
    name: 'Children Ministry',
    slug: 'children',
    icon: Smile,
    color: '#f59e0b',
    colorRgb: '245, 158, 11',
    tagline: 'Planting Seeds That Bear Eternal Fruit',
    image: '/children.jpg',
    about:
      'The Children Ministry at House of Mercy is dedicated to nurturing the faith of our youngest members from ages 0–15. We create age-appropriate, engaging, and safe environments where children are taught the Word of God, shown the love of Christ, and encouraged to develop their own relationship with God. Our passionate team of teachers, helpers, and leaders are committed to excellence in children\'s ministry.',
    mission:
      'To lay a strong biblical foundation in the lives of children, creating an atmosphere where they encounter God\'s love, understand His Word, and grow into faith-filled believers.',
    responsibilities: [
      'Running Sunday School classes every week',
      'Preparing age-appropriate Bible lessons and activities',
      'Creating a safe and nurturing environment for all children',
      'Coordinating children\'s special programmes and events',
      'Engaging and communicating with parents on their children\'s spiritual growth',
    ],
    activities: [
      { title: 'Sunday School', desc: 'Age-grouped Bible classes that teach foundational truths through stories, crafts, songs, and interactive lessons.' },
      { title: "Children's Worship", desc: 'Vibrant, fun, and Spirit-filled worship sessions designed especially for our little ones.' },
      { title: 'Bible Learning', desc: 'Creative approaches to scripture memorisation, biblical storytelling, and applying the Word to everyday life.' },
      { title: 'Special Events', desc: 'Children\'s Day celebrations, Christmas pageants, Easter productions, and milestone dedication services.' },
    ],
    whyJoin: [
      { title: 'Shape Destinies', desc: 'The investment you make in a child\'s life today creates ripples that last for eternity.' },
      { title: 'Develop Your Teaching Gift', desc: 'Grow as a communicator and educator through practical, consistent ministry experience.' },
      { title: 'Be a Hero to a Child', desc: 'Become a trusted, faith-filled role model in the life of a young one who needs to see Christ.' },
      { title: 'Join a Passionate Team', desc: 'Work alongside devoted teachers who share your heart for the next generation.' },
    ],
    leader: 'Sister Sarah Johnson',
  },
  media: {
    name: 'Media Department',
    slug: 'media',
    icon: Video,
    color: '#3b82f6',
    colorRgb: '59, 130, 246',
    tagline: 'Broadcasting the Gospel With Excellence',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1600',
    about:
      'The Media Department at House of Mercy serves as the creative and technical backbone of the church\'s communication and outreach. Our team of skilled photographers, videographers, graphic designers, sound engineers, and social media managers work together to ensure the Gospel reaches beyond the four walls of our church with excellence and creativity.',
    mission:
      'To use every creative and technological tool available to extend the reach of H.O.M\'s ministry, ensuring the Gospel is broadcast with clarity, creativity, and excellence to the world.',
    responsibilities: [
      'Managing all photography and videography for church services and events',
      'Overseeing sound systems, projection, and technical equipment',
      'Creating graphics, flyers, and digital content for church communications',
      'Managing the church\'s social media platforms',
      'Archiving church media content and managing digital assets',
    ],
    activities: [
      { title: 'Photography', desc: 'Capturing powerful moments in services, events, and programmes to preserve memories and create content.' },
      { title: 'Livestream Operations', desc: 'Managing broadcast operations to extend services to members who worship remotely.' },
      { title: 'Graphics Design', desc: 'Creating compelling visual content — flyers, banners, social media graphics, presentations — that represent the church brand.' },
      { title: 'Sound & Projection', desc: 'Ensuring excellent audio quality and seamless visual projection in every service and event.' },
    ],
    whyJoin: [
      { title: 'Use Your Creativity for God', desc: 'Channel your artistic and technical skills into ministry that extends the kingdom of God.' },
      { title: 'Learn From Industry-Level Training', desc: 'Develop professional media skills in photography, video, design, and audio engineering.' },
      { title: 'Shape How the Church Is Seen', desc: 'Directly influence the public image and communication strategy of H.O.M.' },
      { title: 'Be Part of Every Service', desc: 'Your work behind the scenes makes every service possible, beautiful, and accessible.' },
    ],
    leader: 'Brother Tobi Alabi',
  },
};

/* ─── Fade-in variants ────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ─── Page Component ──────────────────────────────────── */
export default function DepartmentPage() {
  const { slug } = useParams();
  const dept = departmentData[slug];

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    ageRange: '',
    address: '',
    occupation: '',
    membershipStatus: '',
    experience: '',
    reason: '',
    availability: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  if (!dept) {
    return (
      <SmoothScroll>
        <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
          <Nav />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '80vh',
              gap: '1rem',
            }}
          >
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--fg)' }}>
              Department Not Found
            </h1>
            <Link href="/departments" className="btn-primary">
              View All Departments
            </Link>
          </div>
          <Footer />
        </main>
      </SmoothScroll>
    );
  }

  const IconComponent = dept.icon;

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.gender) e.gender = 'Please select your gender';
    if (!form.ageRange) e.ageRange = 'Please select your age range';
    if (!form.membershipStatus) e.membershipStatus = 'Please select your membership status';
    if (!form.reason.trim()) e.reason = 'Please tell us why you want to join';
    if (!form.availability) e.availability = 'Please select your availability';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // Simulate API / Firebase call
    await new Promise((r) => setTimeout(r, 1800));
    setSubmitting(false);
    setSubmitted(true);
    // Data ready for Firebase:
    const payload = { ...form, department: dept.name, submittedAt: new Date().toISOString() };
    console.log('Department Application:', payload);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const inputStyle = (hasError) => ({
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    padding: '0.85rem 1.1rem',
    background: 'var(--bg)',
    border: `1.5px solid ${hasError ? '#ef4444' : 'var(--glass-border)'}`,
    borderRadius: 'var(--radius-sm)',
    color: 'var(--fg)',
    fontSize: '0.9rem',
    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
    outline: 'none',
    fontFamily: 'inherit',
  });

  const labelStyle = {
    display: 'block',
    fontSize: '0.78rem',
    fontWeight: 700,
    color: 'var(--fg-2)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    marginBottom: '0.45rem',
  };

  return (
    <SmoothScroll>
      <main style={{ background: 'var(--bg)', minHeight: '100vh', transition: 'background 0.5s ease' }}>
        <Nav />

        {/* ── Hero ──────────────────────────────────────── */}
        <section
          style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'flex-end',
            paddingBottom: 'clamp(3rem, 6vw, 6rem)',
          }}
        >
          {/* Background Image */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image
              src={dept.image}
              alt={dept.name}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.25) 100%)',
              }}
            />
          </div>

          <div className="section-wrap" style={{ position: 'relative', zIndex: 1 }}>
            {/* Back breadcrumb */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '2rem' }}
            >
              <Link
                href="/departments"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'rgba(255,255,255,0.65)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                <ArrowLeft className="h-4 w-4" /> All Departments
              </Link>
            </motion.div>

            {/* Icon badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                background: `rgba(${dept.colorRgb}, 0.18)`,
                border: `1px solid rgba(${dept.colorRgb}, 0.35)`,
                borderRadius: '980px',
                padding: '0.45rem 1.1rem 0.45rem 0.6rem',
                marginBottom: '1.5rem',
              }}
            >
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: `rgba(${dept.colorRgb}, 0.25)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: dept.color,
                }}
              >
                <IconComponent className="h-4 w-4" />
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: dept.color,
                }}
              >
                H.O.M Department
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: '#ffffff',
                marginBottom: '1rem',
              }}
            >
              {dept.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.32, 0.72, 0, 1] }}
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 500,
                maxWidth: '600px',
                lineHeight: 1.5,
              }}
            >
              {dept.tagline}
            </motion.p>
          </div>
        </section>

        {/* ── About Section ─────────────────────────────── */}
        <section
          className="bg-bg-2 border-t border-border"
          style={{ padding: 'clamp(4rem, 8vw, 7rem) 1.5rem', transition: 'background 0.5s ease' }}
        >
          <div className="section-wrap">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'clamp(2rem, 5vw, 5rem)',
                alignItems: 'start',
              }}
            >
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <p className="label" style={{ marginBottom: '1rem' }}>
                  About This Department
                </p>
                <h2
                  style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.035em',
                    lineHeight: 1.15,
                    color: 'var(--fg)',
                    marginBottom: '1.5rem',
                  }}
                >
                  Purpose &{' '}
                  <span className="gradient-text">Mission</span>
                </h2>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--fg-2)',
                    lineHeight: 1.8,
                    marginBottom: '1.5rem',
                  }}
                >
                  {dept.about}
                </p>
                <div
                  style={{
                    background: `rgba(${dept.colorRgb}, 0.08)`,
                    borderLeft: `3px solid ${dept.color}`,
                    borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                    padding: '1.25rem 1.5rem',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: dept.color,
                      marginBottom: '0.5rem',
                    }}
                  >
                    Our Mission
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--fg)', lineHeight: 1.7, fontStyle: 'italic' }}>
                    {dept.mission}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <p className="label" style={{ marginBottom: '1rem' }}>
                  Key Responsibilities
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {dept.responsibilities.map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.85rem',
                        padding: '1rem 1.25rem',
                        background: 'var(--card-bg)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--card-border)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <span
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: `rgba(${dept.colorRgb}, 0.15)`,
                          color: dept.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          marginTop: '1px',
                        }}
                      >
                        {i + 1}
                      </span>
                      <p style={{ fontSize: '0.9rem', color: 'var(--fg)', lineHeight: 1.6 }}>{r}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Activities Section ────────────────────────── */}
        <section
          style={{ padding: 'clamp(4rem, 8vw, 7rem) 1.5rem', background: 'var(--bg)', transition: 'background 0.5s ease' }}
        >
          <div className="section-wrap">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ marginBottom: '3rem' }}
            >
              <p className="label" style={{ marginBottom: '1rem' }}>What We Do</p>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  color: 'var(--fg)',
                }}
              >
                Department <span className="gradient-text">Activities</span>
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {dept.activities.map((act, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="card"
                  style={{ padding: '2rem' }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-sm)',
                      background: `rgba(${dept.colorRgb}, 0.12)`,
                      border: `1px solid rgba(${dept.colorRgb}, 0.25)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: dept.color,
                      marginBottom: '1.25rem',
                      fontSize: '1.2rem',
                      fontWeight: 800,
                    }}
                  >
                    {i + 1}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--fg)',
                      marginBottom: '0.6rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {act.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--fg-2)', lineHeight: 1.65 }}>
                    {act.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Why Join Section ──────────────────────────── */}
        <section
          style={{
            padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
            background: 'var(--bg-2)',
            borderTop: '1px solid var(--glass-border)',
            transition: 'background 0.5s ease',
          }}
        >
          <div className="section-wrap">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ marginBottom: '3rem', textAlign: 'center' }}
            >
              <p className="label" style={{ marginBottom: '1rem' }}>Benefits of Serving</p>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  color: 'var(--fg)',
                }}
              >
                Why Join the{' '}
                <span className="gradient-text">{dept.name.replace(' Department', '').replace(' Ministry', ' Ministry')}?</span>
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {dept.whyJoin.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="card"
                  style={{
                    padding: '2rem',
                    textAlign: 'center',
                    borderTop: `3px solid ${dept.color}`,
                  }}
                >
                  <CheckCircle2
                    className="mx-auto mb-4"
                    style={{ color: dept.color, width: '36px', height: '36px' }}
                  />
                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--fg)',
                      marginBottom: '0.6rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--fg-2)', lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Application Form ──────────────────────────── */}
        <section
          id="join"
          style={{
            padding: 'clamp(3rem, 8vw, 7rem) clamp(1rem, 4vw, 1.5rem)',
            background: 'var(--bg)',
            transition: 'background 0.5s ease',
          }}
        >
          <div className="section-wrap">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ maxWidth: '720px', margin: '0 auto', width: '100%' }}
            >
              {/* Form Header */}
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p className="label" style={{ marginBottom: '1rem' }}>
                  Application
                </p>
                <h2
                  style={{
                    fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    color: 'var(--fg)',
                    marginBottom: '1rem',
                  }}
                >
                  Join This Department
                </h2>
                <p style={{ color: 'var(--fg-2)', fontSize: '1rem', lineHeight: 1.7 }}>
                  Complete the form below and our team will be in touch with you shortly. You are applying to join the{' '}
                  <strong style={{ color: dept.color }}>{dept.name}</strong>.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="card"
                  style={{
                    padding: 'clamp(2.5rem, 5vw, 4rem)',
                    textAlign: 'center',
                    borderTop: `3px solid ${dept.color}`,
                  }}
                >
                  <CheckCircle2
                    style={{ color: dept.color, width: '56px', height: '56px', margin: '0 auto 1.5rem' }}
                  />
                  <h3
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: 'var(--fg)',
                      letterSpacing: '-0.03em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Application Received!
                  </h3>
                  <p style={{ color: 'var(--fg-2)', lineHeight: 1.7, marginBottom: '2rem' }}>
                    Thank you for applying to join the <strong style={{ color: dept.color }}>{dept.name}</strong>. Our
                    department leader will review your application and reach out to you soon.
                  </p>
                  <Link href="/departments" className="btn-primary">
                    Explore Other Departments
                  </Link>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="card"
                  style={{ padding: 'clamp(1.25rem, 4vw, 3rem)', boxSizing: 'border-box', width: '100%' }}
                >
                  {/* Hidden department field */}
                  <input type="hidden" name="department" value={dept.name} />

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
                      gap: '1.25rem',
                    }}
                  >
                    {/* Full Name */}
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. John Adeyemi"
                        value={form.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        style={inputStyle(errors.fullName)}
                        onFocus={(e) => (e.target.style.borderColor = dept.color)}
                        onBlur={(e) => (e.target.style.borderColor = errors.fullName ? '#ef4444' : 'var(--glass-border)')}
                      />
                      {errors.fullName && (
                        <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        type="email"
                        placeholder="e.g. john@email.com"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        style={inputStyle(errors.email)}
                        onFocus={(e) => (e.target.style.borderColor = dept.color)}
                        onBlur={(e) => (e.target.style.borderColor = errors.email ? '#ef4444' : 'var(--glass-border)')}
                      />
                      {errors.email && (
                        <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label style={labelStyle}>Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="e.g. 08012345678"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        style={inputStyle(errors.phone)}
                        onFocus={(e) => (e.target.style.borderColor = dept.color)}
                        onBlur={(e) => (e.target.style.borderColor = errors.phone ? '#ef4444' : 'var(--glass-border)')}
                      />
                      {errors.phone && (
                        <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Gender */}
                    <div>
                      <label style={labelStyle}>Gender *</label>
                      <select
                        value={form.gender}
                        onChange={(e) => handleChange('gender', e.target.value)}
                        style={{ ...inputStyle(errors.gender), cursor: 'pointer' }}
                        onFocus={(e) => (e.target.style.borderColor = dept.color)}
                        onBlur={(e) => (e.target.style.borderColor = errors.gender ? '#ef4444' : 'var(--glass-border)')}
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      {errors.gender && (
                        <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                          {errors.gender}
                        </p>
                      )}
                    </div>

                    {/* Age Range */}
                    <div>
                      <label style={labelStyle}>Age Range *</label>
                      <select
                        value={form.ageRange}
                        onChange={(e) => handleChange('ageRange', e.target.value)}
                        style={{ ...inputStyle(errors.ageRange), cursor: 'pointer' }}
                        onFocus={(e) => (e.target.style.borderColor = dept.color)}
                        onBlur={(e) => (e.target.style.borderColor = errors.ageRange ? '#ef4444' : 'var(--glass-border)')}
                      >
                        <option value="">Select age range</option>
                        <option value="under-16">Under 16</option>
                        <option value="16-25">16 – 25</option>
                        <option value="26-35">26 – 35</option>
                        <option value="36-45">36 – 45</option>
                        <option value="46-60">46 – 60</option>
                        <option value="above-60">Above 60</option>
                      </select>
                      {errors.ageRange && (
                        <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                          {errors.ageRange}
                        </p>
                      )}
                    </div>

                    {/* Occupation */}
                    <div>
                      <label style={labelStyle}>Occupation</label>
                      <input
                        type="text"
                        placeholder="e.g. Teacher, Engineer, Student"
                        value={form.occupation}
                        onChange={(e) => handleChange('occupation', e.target.value)}
                        style={inputStyle(false)}
                        onFocus={(e) => (e.target.style.borderColor = dept.color)}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
                      />
                    </div>

                    {/* Membership Status */}
                    <div>
                      <label style={labelStyle}>Church Membership Status *</label>
                      <select
                        value={form.membershipStatus}
                        onChange={(e) => handleChange('membershipStatus', e.target.value)}
                        style={{ ...inputStyle(errors.membershipStatus), cursor: 'pointer' }}
                        onFocus={(e) => (e.target.style.borderColor = dept.color)}
                        onBlur={(e) => (e.target.style.borderColor = errors.membershipStatus ? '#ef4444' : 'var(--glass-border)')}
                      >
                        <option value="">Select status</option>
                        <option value="full-member">Full Member</option>
                        <option value="new-member">New Member (less than 6 months)</option>
                        <option value="regular-attendee">Regular Attendee (not yet a member)</option>
                        <option value="first-time">First-Time Visitor</option>
                      </select>
                      {errors.membershipStatus && (
                        <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                          {errors.membershipStatus}
                        </p>
                      )}
                    </div>

                    {/* Availability */}
                    <div>
                      <label style={labelStyle}>Availability *</label>
                      <select
                        value={form.availability}
                        onChange={(e) => handleChange('availability', e.target.value)}
                        style={{ ...inputStyle(errors.availability), cursor: 'pointer' }}
                        onFocus={(e) => (e.target.style.borderColor = dept.color)}
                        onBlur={(e) => (e.target.style.borderColor = errors.availability ? '#ef4444' : 'var(--glass-border)')}
                      >
                        <option value="">Select availability</option>
                        <option value="sundays-only">Sundays Only</option>
                        <option value="weekdays">Weekdays</option>
                        <option value="weekends">Weekends</option>
                        <option value="flexible">Flexible / Any Day</option>
                      </select>
                      {errors.availability && (
                        <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                          {errors.availability}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Full-width fields */}
                  <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {/* Address */}
                    <div>
                      <label style={labelStyle}>Home Address</label>
                      <input
                        type="text"
                        placeholder="Street, Area, City"
                        value={form.address}
                        onChange={(e) => handleChange('address', e.target.value)}
                        style={inputStyle(false)}
                        onFocus={(e) => (e.target.style.borderColor = dept.color)}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
                      />
                    </div>

                    {/* Previous Experience */}
                    <div>
                      <label style={labelStyle}>Previous Experience (Optional)</label>
                      <textarea
                        placeholder={`Have you served in a similar department before? Tell us a little about your background in ${dept.name.toLowerCase()}.`}
                        value={form.experience}
                        onChange={(e) => handleChange('experience', e.target.value)}
                        rows={3}
                        style={{ ...inputStyle(false), resize: 'vertical', minHeight: '90px' }}
                        onFocus={(e) => (e.target.style.borderColor = dept.color)}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
                      />
                    </div>

                    {/* Reason */}
                    <div>
                      <label style={labelStyle}>Why do you want to join this department? *</label>
                      <textarea
                        placeholder="Share your motivation, passion, or what you hope to contribute..."
                        value={form.reason}
                        onChange={(e) => handleChange('reason', e.target.value)}
                        rows={4}
                        style={{ ...inputStyle(errors.reason), resize: 'vertical', minHeight: '110px' }}
                        onFocus={(e) => (e.target.style.borderColor = dept.color)}
                        onBlur={(e) => (e.target.style.borderColor = errors.reason ? '#ef4444' : 'var(--glass-border)')}
                      />
                      {errors.reason && (
                        <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                          {errors.reason}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit */}
                  <div style={{ marginTop: '2rem' }}>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        fontWeight: 700,
                        background: submitting ? 'var(--fg-3)' : dept.color,
                        boxShadow: submitting ? 'none' : `0 8px 30px rgba(${dept.colorRgb}, 0.35)`,
                        cursor: submitting ? 'not-allowed' : 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting Application…
                        </>
                      ) : (
                        'Apply to Join'
                      )}
                    </button>
                    <p
                      style={{
                        textAlign: 'center',
                        fontSize: '0.75rem',
                        color: 'var(--fg-3)',
                        marginTop: '0.85rem',
                      }}
                    >
                      Your application goes directly to the {dept.name} leadership team.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
