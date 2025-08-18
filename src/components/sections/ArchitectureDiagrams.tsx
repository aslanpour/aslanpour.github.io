import { useState } from 'react';
import { motion } from 'framer-motion';
import { architectureDiagrams } from '@/data/diagrams';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose 
} from '@/components/ui/dialog';
import { X } from 'lucide-react';

export function ArchitectureDiagrams() {
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
    <section id="diagrams" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Architecture Diagrams
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px]">
            Cloud and system architecture diagrams I've created for various projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {architectureDiagrams.map((diagram) => (
            <motion.div key={diagram.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={diagram.imageUrl}
                    alt={diagram.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{diagram.title}</h3>
                  <p className="text-muted-foreground text-sm">{diagram.description}</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 px-5 pb-5 pt-0">
                  {diagram.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="absolute inset-0 w-full h-full opacity-0"
                    >
                      View Diagram
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl">
                    <DialogHeader>
                      <DialogTitle>{diagram.title}</DialogTitle>
                      <DialogDescription>{diagram.description}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <img
                        src={diagram.imageUrl}
                        alt={diagram.title}
                        className="w-full h-auto rounded-md object-cover"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {diagram.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <DialogClose className="absolute top-4 right-4">
                      <Button variant="ghost" size="icon">
                        <X className="h-4 w-4" />
                      </Button>
                    </DialogClose>
                  </DialogContent>
                </Dialog>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}