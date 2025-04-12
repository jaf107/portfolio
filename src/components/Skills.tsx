
import React from 'react';
import { Code, Database, Terminal, Layout, Server, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="px-2.5 py-1 text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  const programmingLanguages = [
    "Python", "C#", "C++", "Java", "JavaScript", "TypeScript"
  ];

  const concepts = [
    "OOP", "REST API", "Design Patterns", "SOA", "Microservices"
  ];

  const webFrameworks = [
    ".NET", "ReactJS", "SpringBoot", "NodeJS", "Next.js", "Express"
  ];

  const databases = [
    "MSSQL", "MongoDB", "MySQL", "PostgreSQL"
  ];

  const tools = [
    "Git", "Postman", "Azure", "Docker", "Nginx", "AWS", "CI/CD"
  ];

  const softSkills = [
    "Problem Solving", "Team Collaboration", "Agile Development", "Technical Writing"
  ];

  return (
    <section id="skills" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 staggered-animate">
          <SkillCategory 
            title="Programming Languages" 
            icon={<Code size={20} />} 
            skills={programmingLanguages} 
          />
          
          <SkillCategory 
            title="Concepts" 
            icon={<Terminal size={20} />} 
            skills={concepts} 
          />
          
          <SkillCategory 
            title="Web Frameworks" 
            icon={<Layout size={20} />} 
            skills={webFrameworks} 
          />
          
          <SkillCategory 
            title="Databases" 
            icon={<Database size={20} />} 
            skills={databases} 
          />
          
          <SkillCategory 
            title="Tools" 
            icon={<Wrench size={20} />} 
            skills={tools} 
          />
          
          <SkillCategory 
            title="Soft Skills" 
            icon={<Server size={20} />} 
            skills={softSkills} 
          />
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold">Problem Solving:</span> Solved 600+ problems in CodeForces, Leetcode
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
