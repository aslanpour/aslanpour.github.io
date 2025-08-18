import { motion } from 'framer-motion';
import { ArrowDownCircle, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Chat } from '@/components/ui/chat';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 -z-10" />
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Sam Aslanpour
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px] mx-auto">
              DevOps Specialist & Cloud Architect with a PhD in Cloud Computing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#about">Learn more</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center gap-6"
          >
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://scholar.google.com/citations?user=example" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">Google Scholar</span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ 
              delay: 0.6, 
              duration: 0.5,
              y: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5
              }
            }}
            className="absolute bottom-10"
          >
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowDownCircle className="h-10 w-10" />
              <span className="sr-only">Scroll down</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* AI Assistant Chat */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Chat />
      </motion.div>
    </section>
  );
}