import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px]">
            Interested in working together or have questions? Let's connect.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center space-y-6">
                  <div className="p-3 rounded-full bg-muted">
                    <Calendar className="h-8 w-8 text-primary/80" />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">Schedule a Meeting</h3>
                    <p className="text-muted-foreground">
                      Book a time slot that works for you using my online calendar.
                    </p>
                  </div>
                  
                  <Button size="lg" className="w-full" asChild>
                    <a 
                      href="https://calendly.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      Book a Meeting
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center space-y-6">
                  <div className="p-3 rounded-full bg-muted">
                    <Mail className="h-8 w-8 text-primary/80" />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">Connect Directly</h3>
                    <p className="text-muted-foreground">
                      Reach out through email or LinkedIn for collaborations and inquiries.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <Button variant="outline" className="w-full" asChild>
                      <a 
                        href="mailto:contact@example.com"
                        className="flex items-center justify-center"
                      >
                        <Mail className="h-5 w-5 mr-2" />
                        Email
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Linkedin className="h-5 w-5 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}