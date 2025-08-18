import { Layout } from '@/components/layout/Layout';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { ArchitectureDiagrams } from '@/components/sections/ArchitectureDiagrams';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Certifications } from '@/components/sections/Certifications';
import { CV } from '@/components/sections/CV';
import { Hobbies } from '@/components/sections/Hobbies';
import { Contact } from '@/components/sections/Contact';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme-preference">
      <Layout>
        <Hero />
        <About />
        <Skills />
        <ArchitectureDiagrams />
        <Experience />
        <Education />
        <Certifications />
        <CV />
        <Hobbies />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;