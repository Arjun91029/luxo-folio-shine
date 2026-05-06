import profilePhoto from "@/assets/profile.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  ArrowUpRight,
  Database,
  BarChart3,
  Code2,
  Award,
  GraduationCap,
  Briefcase,
  Sparkles,
} from "lucide-react";

const skills = {
  Languages: ["C/C++", "Python", "SQL"],
  Analytics: ["Excel", "Power BI", "Power Query", "VBA/Macro"],
  Database: ["MySQL", "SQL"],
  Web: ["HTML", "CSS", "JavaScript", "React"],
  Tools: ["Git", "GitHub", "LEAN", "Six Sigma"],
};

const projects = [
  {
    title: "Cost Tracking & Labour Productivity Dashboard",
    stack: "Excel (VBA) · Power BI · SQL",
    desc: "Integrated dashboard tracking employee productivity, ME-wise P&L and daily expenses. Adopted as a standard reporting tool across departments.",
    icon: BarChart3,
  },
  {
    title: "Rejection Analysis",
    stack: "Python · SQL · Excel · Power BI",
    desc: "Identified casting & polishing as root causes of rejection. Process improvements reduced rejection rate from 23% to 9%.",
    icon: Database,
  },
  {
    title: "Short Close Analysis",
    stack: "Python · SQL · Power BI · TOC",
    desc: "Analyzed 3 years of cancel, sales & TVR reports. Implemented corrective actions reducing short close cases by 50–60%.",
    icon: Sparkles,
  },
];

const experience = [
  {
    role: "Process Analyst",
    company: "Vaibhav Global Limited, Jaipur",
    period: "March 2025 – Present",
    points: [
      "Analyse operational and production data to identify bottlenecks and improvement opportunities.",
      "Build interactive dashboards in Power BI and Excel (VBA) to monitor KPIs.",
      "Collaborate with cross-functional teams driving measurable cost savings.",
      "Generate management reports tracking expenses, productivity and ME-wise P&L.",
    ],
  },
  {
    role: "Data Engineering Intern",
    company: "Celebal Technologies",
    period: "Domain: Data Engineering",
    points: [
      "Worked across the data engineering pipeline — ingestion, transformation, and reporting.",
    ],
  },
];

const certifications = [
  "Microsoft Power BI Data Analyst — Coursera (2024)",
  "Prompt Engineering by Google — Coursera (2025)",
  "IBM Data Science — Coursera (In Progress)",
];

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <nav className="container flex items-center justify-between h-16">
          <a href="#top" className="font-serif text-xl font-bold tracking-tight">
            <span className="text-gradient-gold">Arjun</span>
            <span className="text-foreground">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#experience" className="hover:text-gold transition-colors">Experience</a>
            <a href="#projects" className="hover:text-gold transition-colors">Projects</a>
            <a href="#skills" className="hover:text-gold transition-colors">Skills</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <Button
            asChild
            size="sm"
            className="bg-gradient-gold text-primary-foreground hover:opacity-90 border-0 font-medium"
          >
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              Hire Me <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

        <div className="container relative grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <Badge variant="outline" className="border-gold text-gold bg-gold/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 animate-pulse" />
              Available for opportunities
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              Arjun Kumar
              <br />
              <span className="text-gradient-gold">Yadav</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Process Analyst turning operational data into{" "}
              <span className="text-foreground font-medium">measurable business impact</span> with
              Power BI, SQL & Python.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-gold text-primary-foreground hover:opacity-90 border-0 shadow-gold"
              >
                <a href="#projects">
                  View Work <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold text-foreground hover:bg-gold/10"
              >
                <a href="mailto:arjun91029@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Get in Touch
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Jaipur, India</span>
              <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +91 9102903074</span>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold rounded-full blur-2xl opacity-40 animate-glow-pulse" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-gold animate-float">
                <div className="w-full h-full rounded-full bg-background p-2">
                  <img
                    src={profilePhoto}
                    alt="Arjun Kumar Yadav portrait"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-gold rounded-2xl px-5 py-3 shadow-luxury">
                <div className="text-2xl font-serif font-bold text-gradient-gold">300+</div>
                <div className="text-xs text-muted-foreground">DSA & SQL solved</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-card border border-gold rounded-2xl px-5 py-3 shadow-luxury">
                <div className="text-2xl font-serif font-bold text-gradient-gold">23→9%</div>
                <div className="text-xs text-muted-foreground">Rejection cut</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 border-t border-border/50">
        <div className="container max-w-4xl text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">About</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Crafting <span className="text-gradient-gold">data-driven</span> decisions.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a Computer Science graduate working as a Process Analyst at Vaibhav Global Limited.
            I blend engineering rigor with business intuition — building dashboards, automating
            reports, and uncovering insights that translate directly into cost savings and
            operational excellence.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 border-t border-border/50">
        <div className="container max-w-5xl">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Career</p>
              <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
            </div>
            <Briefcase className="h-10 w-10 text-gold" />
          </div>

          <div className="space-y-6">
            {experience.map((e) => (
              <div
                key={e.role}
                className="group relative bg-gradient-card rounded-2xl p-8 border border-border hover:border-gold transition-all duration-500 shadow-luxury"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{e.role}</h3>
                    <p className="text-gold">{e.company}</p>
                  </div>
                  <Badge variant="outline" className="border-gold text-muted-foreground">
                    {e.period}
                  </Badge>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="text-gold mt-1.5">◆</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 border-t border-border/50">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Selected Work</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient-gold">Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group relative bg-gradient-card rounded-2xl p-7 border border-border hover:border-gold transition-all duration-500 shadow-luxury hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold">
                  <p.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-gold/80 mb-4 uppercase tracking-wider">{p.stack}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 border-t border-border/50">
        <div className="container max-w-5xl">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Toolkit</p>
              <h2 className="text-4xl md:text-5xl font-bold">Skills & Stack</h2>
            </div>
            <Code2 className="h-10 w-10 text-gold" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(skills).map(([cat, items]) => (
              <div
                key={cat}
                className="bg-gradient-card rounded-2xl p-6 border border-border hover:border-gold transition-all"
              >
                <h3 className="font-serif text-lg text-gold mb-4">{cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary border border-border text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION + CERTS */}
      <section className="py-24 border-t border-border/50">
        <div className="container max-w-5xl grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-luxury">
            <GraduationCap className="h-10 w-10 text-gold mb-4" />
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-5">
              <div>
                <h4 className="font-semibold">B.Tech, Computer Science Engineering</h4>
                <p className="text-sm text-muted-foreground">Techno International New Town, Kolkata</p>
                <p className="text-xs text-gold mt-1">CGPA 8.51 / 10 · 2024</p>
              </div>
              <div>
                <h4 className="font-semibold">Class XII — H/S Cum Inter College</h4>
                <p className="text-sm text-muted-foreground">Haswa, Siwan</p>
                <p className="text-xs text-gold mt-1">81.8% · 2019</p>
              </div>
              <div>
                <h4 className="font-semibold">Class X — High School</h4>
                <p className="text-sm text-muted-foreground">Haswa, Siwan</p>
                <p className="text-xs text-gold mt-1">72.8% · 2017</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-luxury">
            <Award className="h-10 w-10 text-gold mb-4" />
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <ul className="space-y-4">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3 text-muted-foreground">
                  <span className="text-gold mt-1">◆</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Achievements</p>
              <p className="font-medium">
                Solved <span className="text-gradient-gold font-bold">300+</span> DSA & SQL problems
                across LeetCode, GFG and CodeStudio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 border-t border-border/50">
        <div className="container max-w-4xl">
          <div className="relative bg-gradient-card border border-gold rounded-3xl p-10 md:p-16 text-center shadow-luxury overflow-hidden">
            <div className="absolute inset-0 bg-gradient-gold opacity-5" />
            <div className="relative">
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Let's Connect</p>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Have a <span className="text-gradient-gold">project</span> in mind?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                I'm open to opportunities in data analytics, process engineering and dashboard
                development. Let's build something impactful together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-gold text-primary-foreground hover:opacity-90 border-0 shadow-gold"
                >
                  <a href="mailto:arjun91029@gmail.com">
                    <Mail className="mr-2 h-4 w-4" /> arjun91029@gmail.com
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-gold hover:bg-gold/10">
                  <a
                    href="https://claude.ai/public/artifacts/635014bd-43c8-4da2-a598-f1e2487825cc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-gold hover:bg-gold/10">
                  <a href="tel:+919102903074">
                    <Phone className="mr-2 h-4 w-4" /> Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-border/50">
        <div className="container flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Arjun Kumar Yadav. Crafted with precision.</p>
          <p className="font-serif italic text-gold">Data → Insight → Impact</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
