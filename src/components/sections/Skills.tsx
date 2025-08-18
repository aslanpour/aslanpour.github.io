import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, getSkillCategories } from '@/data/skills';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Cloud Providers');
  const categories = getSkillCategories();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    const Icon = LucideIcons[name] || LucideIcons.Code;
    return <Icon className="h-5 w-5" />;
  };

  return (
    <section id="skills" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px]">
            My technical expertise spans across cloud platforms, DevOps practices, and infrastructure optimization.
          </p>
        </motion.div>

        <Tabs 
          defaultValue={categories[0]} 
          value={selectedCategory} 
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={selectedCategory === category ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <motion.div key={skill.name} variants={itemVariants}>
                      <Card className="h-full hover:shadow-md transition-all">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 rounded-full bg-muted">
                                <LucideIcon name={skill.icon} />
                              </div>
                              <h3 className="text-lg font-medium">{skill.name}</h3>
                            </div>
                            <span className="text-sm font-medium">
                              {skill.years} {skill.years === 1 ? 'year' : 'years'}
                            </span>
                          </div>
                          <Progress 
                            value={Math.min(skill.years * 10, 100)} 
                            className={cn(
                              "h-2 rounded-full",
                              skill.years >= 8 ? "bg-emerald-200 dark:bg-emerald-900" : 
                              skill.years >= 5 ? "bg-blue-200 dark:bg-blue-900" : 
                              "bg-amber-200 dark:bg-amber-900"
                            )}
                          />
                          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                            <span>Beginner</span>
                            <span>Intermediate</span>
                            <span>Expert</span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}