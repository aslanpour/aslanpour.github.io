import { motion } from 'framer-motion';
import { hobbies } from '@/data/hobbies';
import { Card, CardContent } from '@/components/ui/card';
import * as LucideIcons from 'lucide-react';

export function Hobbies() {
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

  const LucideIcon = ({ name }: { name: string }) => {
    // @ts-ignore - Dynamic icon usage
    const Icon = LucideIcons[name] || LucideIcons.Heart;
    return <Icon className="h-6 w-6 text-primary/80" />;
  };

  return (
    <section id="hobbies" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Beyond Technology
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px]">
            When I'm not optimizing cloud architectures, here's what I enjoy doing.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {hobbies.map((hobby, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-md transition-all text-center">
                <CardContent className="p-6 flex flex-col items-center space-y-4">
                  <div className="p-3 rounded-full bg-muted">
                    <LucideIcon name={hobby.icon} />
                  </div>
                  <h3 className="text-lg font-medium">{hobby.name}</h3>
                  <p className="text-sm text-muted-foreground">{hobby.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}