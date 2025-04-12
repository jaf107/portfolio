
import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
          <ExperienceItem
            company="Optimizely, Dhaka"
            position="Software Engineer I"
            duration="Mar, 2024 - Present"
            description={
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Axiom - Design Library - React, Next, Storybook</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Collaborated on Axiom, an open-source design library for standardized UI/UX across Optimizely products.</li>
                  <li>Developed and integrated reusable components to ensure consistency and scalability.</li>
                  <li>Worked closely with cross-functional teams to align Axiom with product goals.</li>
                </ul>
                <h3 className="text-lg font-semibold mt-4">Content Marketing Platform - Enterprise SaaS tool</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Built features and reviewed TypeScript code for CMP which is used by companies such as Shell and Xerox.</li>
                </ul>
              </div>
            }
            link="https://github.com/OptimizelyJaf107"
          />
          
          <ExperienceItem
            company="Orion Informatics Ltd, Dhaka"
            position="Software Engineer"
            duration="Jul, 2023 - Jan 2024"
            description={
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Attendance Management System</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Created custom graphs and filters to enhance data analysis and reporting.</li>
                </ul>
                <h3 className="text-lg font-semibold mt-4">Automated Trading System</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Developed a TradeStation API for real-time stock data; built and deployed the project on Azure using .NET.</li>
                </ul>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
