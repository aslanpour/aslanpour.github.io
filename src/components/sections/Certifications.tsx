import { motion } from 'framer-motion';
import { certifications } from '@/data/certifications';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="certifications" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Professional Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px]">
            Industry-recognized credentials validating my expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-full bg-muted">
                        <Award className="h-5 w-5 text-primary/80" />
                      </div>
                      <h3 className="text-lg font-medium leading-tight">{cert.name}</h3>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-muted-foreground">{cert.issuer}</p>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Issued: {cert.date}</span>
                      </div>
                      
                      {cert.expiryDate && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>Expires: {cert.expiryDate}</span>
                        </div>
                      )}
                      
                      <div className="text-sm text-muted-foreground">
                        Credential ID: {cert.credentialId}
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a 
                          href={cert.url} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Credential
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}