import { useEffect, useRef, useState } from 'react';
import './index.css';

const NAV_SECTIONS = ['hero', 'about', 'education', 'skills', 'projects', 'certifications', 'contact'];
const TOP_NAV_ITEMS = [
  { label: 'Introduction', section: 'hero' },
  { label: 'About', section: 'about' },
  { label: 'Education', section: 'education' },
  { label: 'Skills', section: 'skills' },
  { label: 'Projects', section: 'projects' },
  { label: 'Certifications', section: 'certifications' },
  { label: 'Contact', section: 'contact' },
];

const STATS = [
  { num: '#1',   label: 'Topper — Sem 2 & Sem 3, Entire BCA Batch' },
  { num: '3×',   label: 'Consecutive Semesters of Academic Excellence' },
  { num: '100+', label: 'Hours Building Real-World React Projects' },
  { num: '2027', label: 'Expected BCA Graduation Year' },
];

const EDUCATION = [
  {
    badge: 'SSC — Start',
    year:  '2021 — 2022',
    degree: 'Secondary Education',
    school: 'Abhyudaya Education Society High School, Mumbai',
    grades: ['SSC Board — 90%'],
    achievement: 'Secured 90% in SSC — consistently ranked among the top performers in class, building the discipline and hunger for excellence that defines every step of my journey.',
  },
  {
    badge: 'HSC — Level Up',
    year:  '2023 — 2024',
    degree: 'Higher Secondary',
    school: 'D.G. Ruparel College, Matunga Road, Mumbai',
    grades: ['HSC Board — 88%'],
    achievement: "Scored 88% in HSC Board from one of Mumbai's most competitive colleges — proving that consistent effort outperforms overnight cramming, every single time.",
  },
  {
    badge: 'BCA — Current ✦',
    year:  '2024 — PRESENT',
    degree: 'Bachelor of Computer Applications',
    school: 'Pillai College of Arts, Commerce & Science, New Panvel',
    grades: ['S1: 9.68', 'S2: 9.9', 'S3: 10.0 ★','S4: 9.9'],
    achievement: 'Ranked #1 topper in the entire BCA batch two semesters running. Scored a perfect 10.0 SGPA in Sem 3 — the highest in the department — while simultaneously building real-world projects in React and Node.js.',
  },
];

const SKILL_GROUPS = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React.js',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',          featured: true  },
      { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',             featured: true  },
      { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',           featured: false },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',    featured: false },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',  featured: false },

    ],
  }, {
    label: 'Database',
    skills: [
      { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',      featured: false },
      { name: 'MongoDB',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',  featured: false },
      { name: 'Oracle SQL',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',     featured: false },
    ],
  },
  {
    label: 'Languages',
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', featured: false },
      { name: 'Java',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',     featured: false },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', featured: true  },
    ],
  },
  {
    label: 'Tools & Platforms',
    skills: [
      { name: 'GitHub',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',        featured: false },
      { name: 'Vercel',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',        featured: false },
      { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',            featured: false },
      { name: 'VS Code',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',        featured: false },
      { name: 'NetBeans', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg',         featured: false },
    ],
  },
];

const PROJECTS = [
  {
    num: '01', title: 'Workflow Orchestor',
    desc: 'A smart workflow automation platform that streamlines task management, team collaboration, and process orchestration for modern development teams.',
    stack: ['MongoDB','React','Express.js', 'Node.js' ],
images: [

'/screenshots/project1b.png',
'/screenshots/project1h.png',
'/screenshots/project1c.png',
'/screenshots/project1d.png',
'/screenshots/project1e.png',
'/screenshots/project1f.png',
'/screenshots/project1g.png',
'/screenshots/project1i.png',
'/screenshots/project1j.png',
'/screenshots/project1k.png',
'/screenshots/project1l.png',
'/screenshots/project1a.png',
'/screenshots/project1m.png',
'/screenshots/project1n.png',
'/screenshots/project1o.png',
'/screenshots/project1p.png',
'/screenshots/project1q.png',
'/screenshots/project1r.png'
],  },
  {
    num: '02', title: 'ScholarSphere',
    desc: 'An academic resource hub connecting students with curated study materials, peer notes, and collaborative learning tools — built for the next generation of scholars.',
    stack: ['MySQL','React', 'Node.js','Express.js', 'CSS3'],
    images: ['/screenshots/project2a.png','/screenshots/project2b.png','/screenshots/project2c.png','/screenshots/project2d.png','/screenshots/project2e.png','/screenshots/project2f.png','/screenshots/project2g.png','/screenshots/project2h.png','/screenshots/project2i.png','/screenshots/project2j.png','/screenshots/project2k.png','/screenshots/project22.png','/screenshots/project2m.png'],
  },
  {
    num: '03', title: 'Evra Website',
    desc: 'A sleek, high-performance marketing website for Evra — featuring smooth animations, responsive layouts, and a modern design system built with pixel-perfect precision.',
    stack: ['React', 'CSS3', 'JavaScript', ],
images: [
  '/screenshots/img1.png', '/screenshots/img2.png', '/screenshots/img3.png', 
  '/screenshots/img4.png', '/screenshots/img5.png', '/screenshots/img6.png', 
  '/screenshots/img7.png', '/screenshots/img8.png', '/screenshots/img9.png', 
  '/screenshots/img10.png', '/screenshots/img11.png', '/screenshots/img12.png', 
  '/screenshots/img13.png', '/screenshots/img14.png', '/screenshots/img15.png', 
  '/screenshots/img16.png', '/screenshots/img17.png', '/screenshots/img18.png',
  '/screenshots/img27.png', 
  '/screenshots/img28.png', '/screenshots/img29.png', '/screenshots/img30.png', 
  '/screenshots/img19.png', '/screenshots/img20.png', '/screenshots/img21.png', 
  '/screenshots/img22.png', '/screenshots/img23.png', '/screenshots/img24.png', 
  '/screenshots/img25.png', '/screenshots/img26.png'
],  },
  {
    num: '04', title: ' CampusRetain',
    desc: 'CampusLostFound is a centralized web platform designed to help students and faculty report lost items and claim found property within a campus ecosystem.',
    stack: ['Java', 'NetBeans', 'MySQL', 'Apache Tomcat', 'jBCrypt', 'JDBC', 'CSS3', 'JavaScript'],
    images: ['/screenshots/c1.png', '/screenshots/c2.png', '/screenshots/c3.png', '/screenshots/c4.png', '/screenshots/c5.png', '/screenshots/c6.png'],  },

];

const CERTIFICATIONS = [
  {
    num: '01',
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Coursera',
    desc: 'In Progress (Expected 2026)',
    image: '/screenshots/certifiction.jpg',
  },
  {
    num: '02',
    title: 'Meta Back-End Developer Professional Certificate',
    issuer: 'Coursera',
    desc: 'In Progress (Expected 2026)',
    image: '/screenshots/certifiction.jpg',
  },

];

function ProjectsSlider() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeSlide,   setActiveSlide]   = useState(0);

  useEffect(() => {
    const p = PROJECTS[activeProject];
    if (!p.images?.length) return;
    const t = setInterval(() => setActiveSlide(s => (s + 1) % p.images.length), 2500);
    return () => clearInterval(t);
  }, [activeProject]);

  const goToProject = (i) => { setActiveProject(i); setActiveSlide(0); };
  const p = PROJECTS[activeProject];

  return (
<section className="section" id="projects">
  <div className="proj-slider">

    {}
    <div className="proj-image-wrap">
      {p.images.map((src, i) => (
        <img key={i} src={src} alt={`${p.title} screenshot ${i + 1}`} className={`proj-image${i === activeSlide ? ' active' : ''}`} />
      ))}
      <div className="proj-image-overlay" />
    </div>

    {}
    <div className="proj-info">
  <p className="proj-eyebrow">What I've Done</p>
  <span className="proj-num">{p.num}</span>
  <div className="proj-info-right">
    <div className="proj-title-row">
      <h3 className="proj-title">{p.title}</h3>
      <div className="proj-stack">
        {p.stack.map((t, j) => <span className="project-tech" key={j}>{t}</span>)}
      </div>
    </div>
    <p className="proj-desc">{p.desc}</p>
    <div className="proj-dots">
      {PROJECTS.map((_, i) => (
        <button key={i} className={`proj-dot${i === activeProject ? ' active' : ''}`} onClick={() => goToProject(i)} aria-label={`Project ${i + 1}`} />
      ))}
    </div>
  </div>
</div>

  </div>
  <span className="section-label">Projects</span>
  <span className="section-number">05 / 07</span>
</section>
  );
}

function CertificationsSlider() {
  const [activeCertification, setActiveCertification] = useState(0);
  const certificate = CERTIFICATIONS[activeCertification];

  return (
    <section className="section" id="certifications">
      <div className="cert-slider">
        <p className="proj-eyebrow">Certifications</p>

        <div className="cert-image-wrap">
          {CERTIFICATIONS.map((item, index) => (
            <img
              key={item.num}
              src={item.image}
              alt={`${item.title} certificate`}
              className={`cert-image${index === activeCertification ? ' active' : ''}`}
            />
          ))}
        </div>

        <div className="cert-info">
          <h3 className="proj-title cert-title">{certificate.title}</h3>
          <p className="cert-issuer">{certificate.issuer}</p>
          <p className="proj-desc cert-desc">{certificate.desc}</p>
          <div className="proj-dots">
            {CERTIFICATIONS.map((item, index) => (
              <button
                key={item.num}
                className={`proj-dot${index === activeCertification ? ' active' : ''}`}
                onClick={() => setActiveCertification(index)}
                aria-label={`Certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <span className="section-label">Certifications</span>
      <span className="section-number">06 / 07</span>
    </section>
  );
}

export default function App() {
  const matrixRef     = useRef(null);
  const cursorRef     = useRef(null);
  const cursorRingRef = useRef(null);
  const dotsRef       = useRef([]);
  const navbarRef     = useRef(null);
  const indicatorRef  = useRef(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [typedHeroIntro, setTypedHeroIntro] = useState('');

  const heroIntroText = 'High-achieving BCA student specialising in React.js, JavaScript ES6+, and CSS3. Building pixel-perfect, responsive interfaces that feel as good as they look.';

useEffect(() => {
    const canvas = matrixRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chars = 'ｦｱｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓ0123456789';
    const fontSize = 14;
    let drops = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = Math.floor(window.innerWidth / fontSize);
      drops = Array(columns).fill(0).map(() => Math.random() * -100);
    };

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#8B0000';
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];

        if (y * fontSize > 0) {
          ctx.fillText(text, i * fontSize, y * fontSize);
        }

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += 1;
      });
    };

    resize();
    const interval = window.setInterval(drawMatrix, 50);
    window.addEventListener('resize', resize);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = e => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', onMove);
    let raf;
    const loop = () => {
      if (cursorRef.current) { cursorRef.current.style.left = mx+'px'; cursorRef.current.style.top = my+'px'; }
      rx += (mx-rx)*0.15; ry += (my-ry)*0.15;
      if (cursorRingRef.current) { cursorRingRef.current.style.left = rx+'px'; cursorRingRef.current.style.top = ry+'px'; }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    const sectionEls = NAV_SECTIONS.map(id => document.getElementById(id)).filter(Boolean);
    const dotObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = NAV_SECTIONS.indexOf(entry.target.id);
          dotsRef.current.forEach((d, i) => d && d.classList.toggle('active', i === idx));
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });
    sectionEls.forEach(s => dotObs.observe(s));

    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal, .mask-reveal, .skill-group').forEach(el => revealObs.observe(el));
    document.querySelectorAll('.skill-group').forEach((g, i) => { g.style.transitionDelay = (i*0.1)+'s'; });

    function activateStep(i) {
      const allSteps = document.querySelectorAll('.step');
      if (i >= allSteps.length) return;
      const step = allSteps[i];
      const isLast = i === allSteps.length - 1;
      step.classList.add('active');
      if (!isLast) {
        const line = step.querySelector('.step-line');
        setTimeout(() => {
          line.classList.add('filled');
          setTimeout(() => { step.classList.remove('active'); step.classList.add('done'); activateStep(i+1); }, 750);
        }, 550);
      }
    }
    const stepperObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { stepperObs.disconnect(); setTimeout(() => activateStep(0), 400); }
      });
    }, { threshold: 0.3 });
    const eduSection = document.getElementById('education');
    if (eduSection) stepperObs.observe(eduSection);

const contactObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.contact-reveal').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 130);
      });
    } else {
      entry.target.querySelectorAll('.contact-reveal').forEach(el => {
        el.classList.remove('visible');
      });
    }
  });
}, { threshold: 0.4 });
const contactSection = document.getElementById('contact');
if (contactSection) contactObs.observe(contactSection);

return () => { dotObs.disconnect(); revealObs.disconnect(); contactObs.disconnect(); };  }, []);

  useEffect(() => {
    const navbar = navbarRef.current;
    const indicator = indicatorRef.current;
    if (!navbar || !indicator) return;

    const activeIndex = TOP_NAV_ITEMS.findIndex(item => item.section === activeSection);
    const navItems = navbar.querySelectorAll('li');
    const activeItem = navItems[activeIndex] || navItems[0];
    if (!activeItem) return;

    indicator.style.width = `${activeItem.offsetWidth}px`;
    indicator.style.height = `${activeItem.offsetHeight}px`;
    indicator.style.transform = `translateX(${activeItem.offsetLeft}px)`;
  }, [activeSection]);

  useEffect(() => {
    let index = 0;
    let timer;

    const startTypingDelay = window.setTimeout(() => {
      timer = window.setInterval(() => {
        index += 1;
        setTypedHeroIntro(heroIntroText.slice(0, index));

        if (index >= heroIntroText.length) {
          window.clearInterval(timer);
        }
      }, 28);
    }, 1100);

    return () => {
      window.clearTimeout(startTypingDelay);
      window.clearInterval(timer);
    };
  }, []);

  const handleCtaMove  = e => { const btn = e.currentTarget; const r = btn.getBoundingClientRect(); btn.style.transform = `translate(${(e.clientX-(r.left+r.width/2))*0.35}px,${(e.clientY-(r.top+r.height/2))*0.35}px) scale(1.04)`; };
  const handleCtaLeave = e => { e.currentTarget.style.transform = 'translate(0,0) scale(1)'; };
  const scrollTo = id => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <canvas
        id="matrix"
        ref={matrixRef}
        style={{ position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}
      ></canvas>

      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={cursorRingRef}></div>

      <div className="nav-wrapper">
        <ul className="navbar" id="navbar" ref={navbarRef}>
          <div className="indicator" id="indicator" ref={indicatorRef}></div>
          {TOP_NAV_ITEMS.map(item => (
            <li
              key={`${item.label}-${item.section}`}
              className={activeSection === item.section ? 'active' : ''}
              data-section={item.section}
              onClick={() => scrollTo(item.section)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <nav id="nav-dots">
        {NAV_SECTIONS.map((id, i) => (
          <div key={id} className={`dot${i===0?' active':''}`} ref={el => dotsRef.current[i]=el} onClick={() => scrollTo(id)} />
        ))}
      </nav>

{}
<section className="section" id="hero">
  <div className="hero-bg"></div>
  <div className="hero-line"></div>
  <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%', maxWidth: 'none', left: 0 }}>
    <p className="hero-intro">Full Stack Developer &nbsp;·&nbsp; BCA Student</p>
    <div className="hero-greeting">
      <span className="name-row-inner" style={{fontFamily:"'DM Sans',sans-serif",fontSize:'clamp(1.2rem,3vw,2.2rem)',fontWeight:300,color:'var(--text-dim)',letterSpacing:'0.05em'}}>
        Hi, I'm
      </span>
    </div>

    <h1 className="hero-name" style={{ fontWeight: 1000 }}>
      <div className="name-row" style={{ display: 'flex', justifyContent: 'center' }}><span className="name-row-inner">AMRUTA</span></div>
      <div className="name-row" style={{ display: 'flex', justifyContent: 'center' }}><span className="name-row-inner cherry">KADAM.</span></div>
    </h1>
    <div className="hero-sub hero-sub-typed" style={{opacity:0,animation:'fadeUp 0.8s 1.1s forwards', maxWidth: '800px'}}>
      <span>{typedHeroIntro}</span>
      <span className="hero-sub-cursor" aria-hidden="true"></span>
    </div>

  </div>
  <div className="hero-scroll" style={{opacity:0, animation:'fadeUp 0.8s 1.4s forwards'}}>
      <div className="scroll-track"></div>
      <span>Scroll</span>
    </div>
  <span className="section-label">Introduction</span>
  <span className="section-number">01 / 07</span>
</section>

      {}
      <section className="section" id="about">
        <div className="about-bg"></div>
        <div className="about-content">
          <div className="about-left">
            <p className="about-eyebrow reveal">About Me</p>
            <h2 className="about-heading reveal" style={{transitionDelay:'0.1s', animation:'fadeRight 0.9s 0.3s forwards', opacity:0}}>
BUILDING<br/>THE <em>WEB,</em><br/>ONE PX<br/>AT A TIME

</h2>           
          </div>
          <div className="about-right">
            {STATS.map((s, i) => (
              <div className="stat-card reveal" key={i} style={{transitionDelay:(0.15+i*0.1)+'s'}}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <span className="section-label">Who I Am</span>
        <span className="section-number">02 / 07</span>
      </section>

      {}
      <section className="section" id="education">
        <div className="edu-content">
          <p className="section-eyebrow reveal">Academic Journey</p>
          <h2 className="section-heading mask-reveal">EDUCATION</h2>
          <div className="stepper">
            {EDUCATION.map((edu, i) => (
              <div className="step" key={i} data-step={i}> 
                <div className="step-spine">
                  <div className="step-dot"><div className="step-dot-inner"></div></div>
                  <div className="step-line"><div className="step-line-fill"></div></div>
                </div>
                <div className="step-card">
                  <div className="edu-badge"><span className="badge-check"></span>{edu.badge}</div> <div className="edu-grade">{edu.grades.map((g,j)=><span className="grade-chip" key={j}>{g}</span>)}</div>
                  <div className="edu-year">{edu.year}</div>
                  <div className="edu-degree">{edu.degree}</div>
                  <div className="edu-school">{edu.school}</div>

                  <p className="edu-achievement">{edu.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <span className="section-label">Background</span>
        <span className="section-number">03 / 07</span>
      </section>

      {}
      <section className="section" id="skills">
        <div className="skills-content">
          <p className="section-eyebrow reveal">What I Work With</p>
          <h2 className="section-heading mask-reveal">SKILLS</h2>
          <div className="skills-grid">
            {SKILL_GROUPS.map((group, i) => (
              <div className="skill-group" key={i}>
                <div className="skill-group-label">{group.label}</div>
                <div className="skill-icon-grid">
                  {group.skills.map((skill, j) => (
                    <div className={`skill-icon-item${skill.featured?' featured':''}`} key={j}>
                      <div className="skill-icon-wrap">
                        <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                      </div>
                      <span className="skill-icon-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <span className="section-label">Capabilities</span>
        <span className="section-number">04 / 07</span>
      </section>

      <ProjectsSlider />
      <CertificationsSlider />
<section className="section" id="contact" style={{ position: 'relative' }}>
  <div className="contact-bg"></div>

  <div className="contact-minimal-wrap" style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '100%', 
    textAlign: 'center', 
    padding: '0 2rem',
    position: 'relative', 

    zindex: 2 
  }}>
    <p className="proj-eyebrow contact-reveal" style={{ marginBottom: '1rem' }}>
      Get In Touch
    </p>

    <h2 className="contact-heading contact-reveal" style={{ 
      fontSize: 'clamp(2.5rem, 9vw, 6rem)', 
      lineHeight: 1, 
      marginBottom: '1rem', 
      fontWeight: 700 
    }}>
      LET'S <em style={{ color: 'var(--cherry)', fontStyle: 'normal' }}>CONNECT.</em>
    </h2>

    <div className="contact-socials contact-reveal" style={{ 
      display: 'flex', 
      gap: '2.5rem', 
      marginBottom: '1rem',
      alignItems: 'center'
    }}>
      {}
      <a href="https://github.com/KadamAmruta03" target="_blank" rel="noreferrer" className="social-link" style={{ color: 'var(--text)', opacity: 0.8 }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
      </a>

      {}
      <a href="https://www.linkedin.com/in/amruta-kadam-6b3bbb312/" target="_blank" rel="noreferrer" className="social-link" style={{ color: 'var(--text)', opacity: 0.8 }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.55V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
      </a>

      {}
      <a href="https://x.com/_amrutakadam" target="_blank" rel="noreferrer" className="social-link" style={{ color: 'var(--text)', opacity: 0.8 }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>

      {}
      <a href="mailto:Kadamamruta0555@gmail.com" className="social-link" style={{ color: 'var(--text)', opacity: 0.8 }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      </a>
    </div>

    <div className="contact-action contact-reveal">
      <p className="form-note" style={{ 
        maxWidth: '480px', 
        margin: '0 auto 1rem', 
        opacity: 0.5, 
        fontSize: '0.85rem', 
        lineHeight: 1.6 
      }}>
        ✦ Note: This contact section is currently a placeholder. Please use the button below to reach out via email.
      </p>

      <button 
        className="hero-cta" 
        onClick={() => window.location.href='mailto:Kadamamruta0555@gmail.com'} 
        style={{ 
          background: 'var(--cherry)', 
          color: 'white',
          border: 'none', 
          minWidth: '280px',
          padding: '1.2rem 2.5rem',
          borderRadius: '100px', 
          fontWeight: 600,
          letterSpacing: '1px',
          cursor: 'pointer',
          transition: 'all 0.3s ease' 

        }}
      >
        SEND VIA EMAIL ↗
      </button>
    </div>
  </div>

  <span className="section-label">Contact</span>
  <span className="section-number">07 / 07</span>
</section>

    </>
  );
}

