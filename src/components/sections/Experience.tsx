import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px]">
            My journey through cloud architecture, DevOps, and performance engineering.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

          {experiences.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12 relative"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10" />

                {/* Content card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="overflow-hidden border-border/50 hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-2 mb-4">
                        <h3 className="text-xl font-bold">{job.role}</h3>
                        <div className="flex items-center text-muted-foreground">
                          <Briefcase className="mr-2 h-4 w-4" />
                          <span>{job.company} • {job.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>
                            {job.startDate} - {job.endDate || 'Present'}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2 mt-4">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-sm">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}