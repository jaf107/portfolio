
import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import experienceData from '../data/experience.json';

interface ExperienceItemProps {
  company: string;
  position: string;
  duration: string;
  description: React.ReactNode;
  link?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, position, duration, description, link }) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{position}</CardTitle>
            <CardDescription className="text-lg font-medium">{company}</CardDescription>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar size={14} />
            <span>{duration}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {description}
      </CardContent>
      {link && (
        <CardFooter>
          <Button variant="ghost" size="sm" asChild className="gap-1">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <span>View Project</span>
              <ExternalLink size={14} />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-10 grid gap-6 staggered-animate">
          {experienceData.map((exp, index) => (
            <ExperienceItem
              key={index}
              company={exp.company}
              position={exp.position}
              duration={exp.duration}
              description={
                <div className="space-y-3">
                  {exp.details.map((detail, detailIndex) => (
                    <React.Fragment key={detailIndex}>
                      <h3 className="text-lg font-semibold">{detail.title}</h3>
                      <ul className="space-y-2 list-disc pl-5">
                        {detail.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </React.Fragment>
                  ))}
                </div>
              }
              link={exp.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
