
import React, { useState } from 'react';
import { Github, ExternalLink, Code, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import projectsData from '../data/projects.json';

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string | null;
  demoLink?: string | null;
  achievements?: string[];
  imagePath?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
  achievements,
  imagePath
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasAchievements = achievements && achievements.length > 0;
  
  return (
    <Card className="h-full flex flex-col card-hover">
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg bg-muted">
        {imagePath ? (
          <img 
            src={imagePath} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-muted text-muted-foreground">
            <ImageIcon size={48} className="opacity-40" />
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => <Badge key={index} variant="secondary">{tech}</Badge>)}
        </div>

        {hasAchievements && (
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-2">
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1 w-full justify-between">
                <span className="font-semibold">Key Achievements</span>
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <ul className="space-y-2 pl-4">
                {achievements.map((achievement, i) => (
                  <li key={i} className="text-sm relative pl-2">
                    <span className="absolute left-[-1rem] top-[0.6rem] h-1.5 w-1.5 rounded-full bg-primary/70"></span>
                    <span dangerouslySetInnerHTML={{
                      __html: achievement.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold">$1</span>')
                    }} />
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        {githubLink && (
          <Button variant="outline" size="sm" asChild className="gap-1">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github size={14} />
              <span className="font-medium">Code</span>
            </a>
          </Button>
        )}
        {demoLink && (
          <Button variant="default" size="sm" asChild className="gap-1">
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} />
              <span className="font-medium">Demo</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const categories = [
    { id: 'research', label: 'Research' },
    { id: 'academic', label: 'Academic' },
    { id: 'hackathon', label: 'Hackathon' }
  ];
  
  const filteredProjects = selectedCategories.length === 0
    ? projectsData
    : projectsData.filter(project => 
        selectedCategories.some(category => 
          project.categories?.includes(category)
        )
      );
  
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="section-title mx-auto">
            <span className="font-bold">Academic</span> Projects
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            A showcase of my academic and personal projects
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <ToggleGroup 
            type="multiple" 
            value={selectedCategories}
            onValueChange={(value) => setSelectedCategories(value)}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map(category => (
              <ToggleGroupItem 
                key={category.id} 
                value={category.id}
                className="rounded-full px-4 py-2 text-sm font-medium transition-colors"
                variant="outline"
              >
                {category.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 staggered-animate">
          {filteredProjects.map((project, index) => (
            <ProjectItem 
              key={index} 
              title={project.title} 
              description={project.description} 
              technologies={project.technologies} 
              githubLink={project.githubLink} 
              demoLink={project.demoLink} 
              achievements={project.achievements}
              imagePath={project.imagePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
