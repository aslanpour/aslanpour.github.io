import { motion } from 'framer-motion';
import { education, publications, googleScholarUrl } from '@/data/education';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, BookOpen, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Education() {
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
    <section id="education" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Education & Research
          </h2>
          <div className="text-muted-foreground text-lg max-w-[800px]">
            <p>
              My academic background in cloud computing research and formal education.
            </p>
            <div className="mt-4 flex justify-center">
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a 
                  href={googleScholarUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen className="h-4 w-4" />
                  View Google Scholar Profile
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="education" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="education" className="mt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="mr-4 mt-1">
                          <div className="p-2 rounded-full bg-muted">
                            <GraduationCap className="h-6 w-6 text-primary/80" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{edu.degree}</h3>
                          <p className="text-muted-foreground">{edu.university}, {edu.country}</p>
                          <div className="flex items-center mt-2 text-sm text-muted-foreground">
                            <Calendar className="mr-2 h-4 w-4" />
                            <span>{edu.startDate} - {edu.endDate}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="publications" className="mt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              {publications.map((pub, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <h3 className="text-lg font-medium leading-tight hover:text-primary transition-colors">
                          <a 
                            href={pub.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-start"
                          >
                            {pub.title}
                            <ExternalLink className="h-4 w-4 ml-2 flex-shrink-0 mt-1" />
                          </a>
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="mr-2 h-4 w-4" />
                          <span>{pub.authors.join(', ')}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <BookOpen className="mr-2 h-4 w-4" />
                          <span>{pub.journal}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>{pub.year}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}