import TerminalWindow from '@/components/TerminalWindow';
import { experienceData, projectsData, courseworkData } from '@/data/content';

export default function Home() {
  return (
    <main className="relative min-h-screen p-4 md:p-12">
      <div className="grid-overlay" />
      <div className="grain-overlay" />
      <div className="scanlines" />

      {/* Navigation Layer */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-black/90 border-b-2 border-cyber-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-header text-cyber-blue text-xl tracking-tighter">NOAH_KANG_OS_v1.0</div>
          <div className="hidden md:flex space-x-8 font-header text-xs text-cyber-grey">
            <a href="#bio" className="hover:text-cyber-blue transition-colors">[ STORY ]</a>
            <a href="#experience" className="hover:text-cyber-blue transition-colors">[ JOURNEY ]</a>
            <a href="#projects" className="hover:text-cyber-blue transition-colors">[ CRAFT ]</a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 space-y-32 py-24 max-w-5xl mx-auto">

        {/* Bio Section */}
        <section id="bio" className="flex flex-col lg:flex-row items-start gap-8">
          <TerminalWindow title="BIO_PROMPT.EXE" className="w-full lg:w-2/3">
            <h1 className="font-header text-4xl md:text-5xl text-cyber-blue mb-6 leading-tight">
              HELLO, I&apos;M <br /> NOAH KANG.
            </h1>
            <p className="text-sm md:text-base mb-8 leading-relaxed max-w-xl">
              MATH & CS STUDENT AT UIUC. FOCUSING ON ARTIFICIAL INTELLIGENCE AND EMBEDDED SYSTEMS. BUILDING INTELLIGENT TOOLS WITH A CRAFTSMAN&apos;S SOUL.
            </p>
            <div className="flex gap-4">
              <a href="#" className="cmd-btn text-xs">&gt; CONTACT_ME</a>
              <a href="#" className="cmd-btn text-xs">&gt; DOWNLOAD_CV</a>
            </div>
          </TerminalWindow>

          <TerminalWindow title="USER_IMG.JPG" className="w-full lg:w-1/3">
            <div className="aspect-square bg-cyber-grid border border-cyber-border flex items-center justify-center text-xs opacity-50">
              <div className="crop-container">
                <img src="profpic.png" alt="Description of image"></img>
              </div>
            </div>
          </TerminalWindow>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <TerminalWindow title="JOURNEY_LOG.BAT" className="w-full md:w-5/6 ml-auto">
            <h2 className="font-header text-2xl text-cyber-blue mb-8">PROFESSIONAL JOURNEY</h2>
            <ul className="space-y-8">
              {experienceData.map((exp) => (
                <li key={exp.id} className="border-l-2 border-cyber-border pl-6">
                  <div className="text-cyber-blue font-bold text-sm">&gt; {exp.id}. {exp.role}</div>
                  <div className="text-cyber-grey/70 text-xs mt-1 mb-3">{exp.company} // {exp.status}</div>
                  <p className="text-sm mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex gap-3 font-header text-[10px]">
                    {exp.tags.map(tag => (
                      <span key={tag} className="border border-cyber-border px-2 py-1 text-cyber-blue">[{tag}]</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </TerminalWindow>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="text-center mb-12">
            <h2 className="font-header text-3xl text-cyber-blue inline-block border-b-2 border-cyber-blue pb-2">SYSTEM_CRAFTS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <TerminalWindow key={project.id} title={project.id} className="flex flex-col h-full">
                <h3 className="font-header text-lg text-cyber-blue mb-3">{project.title}</h3>
                <p className="text-xs leading-relaxed mb-6 flex-grow">{project.description}</p>
                <a href={project.link} className="text-xs font-header text-cyber-blue hover:text-white transition-colors">
                  &gt; SOURCE_CODE
                </a>
              </TerminalWindow>
            ))}
          </div>
        </section>

        {/* Coursework Section */}
        <section id="coursework">
          <TerminalWindow title="ACADEMIC_RECORDS.CSV" className="w-full md:w-3/4">
            <h2 className="font-header text-2xl text-cyber-blue mb-6">LIBRARY BOARD</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courseworkData.map((course) => (
                <div key={course.id} className="border border-cyber-border p-4 hover:bg-cyber-border/10 transition-colors">
                  <div className="text-cyber-blue text-xs font-header mb-1">{course.id}</div>
                  <div className="font-bold text-sm">{course.title}</div>
                  <div className="text-[10px] opacity-60 mt-1">{course.desc}</div>
                </div>
              ))}
            </div>
          </TerminalWindow>
        </section>

      </div>
    </main>
  );
}