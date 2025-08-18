import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function CV() {
  return (
    <section id="cv" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Curriculum Vitae
            </h2>
            <p className="text-muted-foreground text-lg">
              Download my detailed CV for a comprehensive overview of my skills and experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden border-border/50 hover:shadow-md transition-all">
              <CardContent className="p-8 flex flex-col items-center space-y-6">
                <div className="p-4 rounded-full bg-muted">
                  <FileText className="h-16 w-16 text-primary/80" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">My Curriculum Vitae</h3>
                  <p className="text-muted-foreground">
                    A comprehensive document detailing my professional experience, 
                    education, skills, and accomplishments.
                  </p>
                </div>
                
                <Button className="gap-2" size="lg" asChild>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <Download className="h-5 w-5" />
                    Download CV (PDF)
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}