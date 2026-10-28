
type Project = {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  sourceUrl: string;
};

const projects: Project[] = [
  {
    name: "MineCommerce",
    category: "E-commerce Admin Dashboard",
    description:
      "Dashboard admin e-commerce yang saya kembangkan. Perbarui deskripsi ini sesuai fitur yang benar-benar sudah selesai.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "",
    sourceUrl: "",
  },
];

const focusAreas = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git & GitHub",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home">
          PORTFOLIO<span>.</span>
        </a>

        <nav aria-label="Navigasi utama" className="site-nav">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="availability-dot" />
            FRONTEND DEVELOPER PORTFOLIO
          </p>

          <h1>
            Membangun pengalaman web yang{" "}
            <span className="highlight">berguna.</span>
          </h1>

          <p className="hero-description">
            Halo, saya Zhafira Mariesta. Saya sedang membangun kemampuan
            mengembangkan aplikasi web yang responsif, mudah digunakan,
            dan mudah dirawat. Di sini Anda bisa melihat project yang
            saya kerjakan.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Lihat project <span aria-hidden="true">↘</span>
            </a>

            <a className="button button-secondary" href="#about">
              Tentang saya
            </a>
          </div>

          <p className="hero-note">
            Based in Indonesia · Always learning
          </p>
        </div>

        <div className="hero-art" aria-hidden="true">
          <span className="art-kicker">BUILD · LEARN · IMPROVE</span>

          <div className="art-circle">
            <span>UI</span>
            <span>CODE</span>
            <span>WEB</span>
          </div>

          <div className="art-footer">
            <span>FRONTEND</span>
            <span>2026</span>
          </div>
        </div>
      </section>

      <section className="work-section" id="projects">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>
              Project yang saya <span className="highlight">bangun.</span>
            </h2>
            <p className="section-description">
              Setiap project di bawah ini dapat memiliki tautan demo
              langsung dan repository source code.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-visual" aria-hidden="true">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="project-monogram">
                    {project.name.slice(0, 2).toUpperCase()}
                  </span>

                  <span className="project-visual-label">
                    SELECTED PROJECT
                  </span>
                </div>

                <div className="project-content">
                  <p className="project-category">{project.category}</p>

                  <h3>{project.name}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="tech-list">
                    {project.technologies.map((technology) => (
                      <span className="tech-pill" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live demo ↗
                      </a>
                    ) : (
                      <span className="muted-link">
                        Demo belum tersedia
                      </span>
                    )}

                    {project.sourceUrl ? (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source code ↗
                      </a>
                    ) : (
                      <span className="muted-link">
                        Source code belum tersedia
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="projects-note">
            Project baru akan ditambahkan di sini setelah selesai dan
            siap ditampilkan.
          </p>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-shell about-grid">
          <div>
            <p className="eyebrow">ABOUT ME</p>
            <h2>Belajar dengan membuat project nyata.</h2>
          </div>

          <div>
            <p className="about-copy">
              Saya berfokus pada pembuatan antarmuka web dan pengembangan
              aplikasi frontend. Melalui setiap project, saya berlatih
              menyusun komponen, mengelola data, mengatasi error, serta
              memastikan tampilan bekerja di berbagai ukuran layar.
            </p>

            <p className="about-copy">
              Daftar berikut adalah area yang saya pelajari dan gunakan.
              Saya akan memperbaruinya seiring bertambahnya pengalaman.
            </p>

            <div className="skill-list">
              {focusAreas.map((area) => (
                <span className="skill-pill" key={area}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>Mari berdiskusi tentang project berikutnya.</h2>
        <p className="section-description">
          Saya terbuka untuk berdiskusi tentang pengembangan web dan
          peluang kerja yang sesuai.
        </p>

        <a className="button button-primary"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mariesta.zhafira@gmail.com&su=Diskusi%20Portofolio"
          target="_blank"
          rel="noreferrer">
          Hubungi saya ↗
        </a>
      </section>

      <footer className="site-footer">
        <span>Portfolio pribadi · 2026</span>
        <a href="#home">Kembali ke atas ↑</a>
      </footer>
    </main>
  );
}
