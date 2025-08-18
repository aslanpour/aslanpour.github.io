import { Linkedin, Mail, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-muted/30 py-12 mt-24">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h3 className="text-xl font-bold">Sam Aslanpour</h3>
            <p className="mt-1 text-muted-foreground">Cloud Architect & Performance Engineer</p>
          </div>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={`mailto:contact@example.com`}>
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://scholar.google.com/citations?user=example" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">Google Scholar</span>
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sam Aslanpour. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Built with React, Tailwind CSS & shadcn/ui
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}