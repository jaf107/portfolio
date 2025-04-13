
import React from 'react';
import { BookOpen, GraduationCap, Calendar, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import researchData from '../data/research.json';

interface ResearchItemProps {
  title: string;
  organization: string;
  period: string;
  description: React.ReactNode;
}

const ResearchItem: React.FC<ResearchItemProps> = ({ title, organization, period, description }) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <BookOpen size={20} className="text-primary" />
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="text-base">{organization}</CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar size={14} />
            <span>{period}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {description}
      </CardContent>
    </Card>
  );
};

const ResearchProject: React.FC<{
  title: string;
  technologies: string[];
  description: string;
}> = ({ title, technologies, description }) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <FileText size={20} className="text-primary" />
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-3">{description}</p>
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold">Technologies:</span> {technologies.join(', ')}
        </div>
      </CardContent>
    </Card>
  );
};

const Research = () => {
  const { experience, projects } = researchData;
  
  return (
    <section id="research" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Research Experience</h2>
        
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
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              }
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
