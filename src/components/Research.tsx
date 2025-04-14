
import React from 'react';
import { BookOpen, GraduationCap, Calendar, FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import researchData from '../data/research.json';

interface ResearchItemProps {
  title: string;
  organization: string;
  period: string;
  description: React.ReactNode;
  link?: string;
}

const ResearchItem: React.FC<ResearchItemProps> = ({ title, organization, period, description, link }) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <BookOpen size={20} className="text-primary" />
            <div>
              <CardTitle className="text-xl">
                <span className="font-bold">{title}</span>
              </CardTitle>
              <CardDescription className="text-base font-medium">{organization}</CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar size={14} />
            <span className="font-semibold">{period}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {description}
          {link && (
            <div className="mt-2">
              <Button variant="outline" size="sm" asChild className="gap-1">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} />
                  <span className="font-medium">View Project</span>
                </a>
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const ResearchProject: React.FC<{
  title: string;
  technologies: string[];
  description: string;
  link?: string;
}> = ({ title, technologies, description, link }) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <FileText size={20} className="text-primary" />
          <CardTitle className="text-lg">
            <span className="font-bold">{title}</span>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-3">{description}</p>
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold">Technologies:</span> {technologies.join(', ')}
        </div>
        {link && (
          <div className="mt-3">
            <Button variant="outline" size="sm" asChild className="gap-1">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} />
                <span className="font-medium">View Project</span>
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Research = () => {
  const { experience, projects } = researchData;
  
  return (
    <section id="research" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">
          <span className="font-bold">Research</span> Experience
        </h2>
        
        <div className="mt-10 grid gap-6 staggered-animate">
          {experience.map((exp, index) => (
            <ResearchItem
              key={index}
              title={exp.title}
              organization={exp.organization}
              period={exp.period}
              description={
                <div className="space-y-3">
                  <ul className="space-y-2 list-disc pl-5">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex}>
                        <span className="font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              }
              link={exp.link}
            />
          ))}
          
          <h3 className="text-xl font-bold mt-8 mb-4">Research Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ResearchProject
                key={index}
                title={project.title}
                technologies={project.technologies}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
