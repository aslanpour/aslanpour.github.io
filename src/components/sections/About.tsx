import { motion } from 'framer-motion';
import { Cloud, Database, Shield, Server } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const features = [
    {
      icon: <Cloud className="h-12 w-12 text-primary/80" />,
      title: 'Cloud Architecture',
      description: 'Designing scalable, secure, and cost-effective cloud infrastructures on AWS, GCP, and Azure',
    },
    {
      icon: <Server className="h-12 w-12 text-primary/80" />,
      title: 'DevOps Engineering',
      description: 'Implementing CI/CD pipelines and infrastructure as code for seamless delivery',
    },
    {
      icon: <Database className="h-12 w-12 text-primary/80" />,
      title: 'Performance Optimization',
      description: 'Tuning systems for maximum performance, reliability, and cost-efficiency',
    },
    {
      icon: <Shield className="h-12 w-12 text-primary/80" />,
      title: 'Security & Compliance',
      description: 'Implementing security best practices and ensuring regulatory compliance',
    },
  ];

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
    <section id="about" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[800px]"
          >
            <p className="text-muted-foreground text-lg mt-4">
              I'm a DevOps Engineer and Cloud Architect with a PhD in Cloud Computing. With over 10 years of experience, 
              I specialize in designing and optimizing cloud-based systems for performance, reliability, security, and 
              cost efficiency. My research background enables me to apply cutting-edge approaches to solve complex 
              technical challenges. I'm passionate about implementing automated, scalable infrastructures that accelerate 
              software delivery while maintaining high standards of quality and security.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-muted">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}