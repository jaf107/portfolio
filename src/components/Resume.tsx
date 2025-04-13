
import React from 'react';
import resumeData from '../data/resume.json';
import { FileDown } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

const Resume = () => {
  return (
    <section id="resume" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2">{resumeData.title}</h2>
        <p className="text-muted-foreground mb-6">{resumeData.description}</p>
        
        <div className="flex flex-col space-y-1 mb-8">
          <Button variant="outline" className="w-fit flex items-center gap-2">
            <FileDown size={18} /> Download Resume
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {resumeData.sections.map((section, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>
                  {section.title === 'Education' && 'Academic background and qualifications'}
                  {section.title === 'Experience' && 'Professional work experience'}
                  {section.title === 'Skills' && 'Technical skills and competencies'}
                  {section.title === 'Projects' && 'Notable projects and accomplishments'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {itemIndex > 0 && <Separator className="my-4" />}
                      
                      {section.title === 'Education' && (
                        <div>
                          <h4 className="font-semibold">{item.degree}</h4>
                          <p className="text-muted-foreground">{item.institution}</p>
                          <p className="text-sm text-muted-foreground">{item.duration}</p>
                          <p className="mt-1">{item.description}</p>
                        </div>
                      )}
                      
                      {section.title === 'Experience' && (
                        <div>
                          <h4 className="font-semibold">{item.position}</h4>
                          <p className="text-muted-foreground">{item.company}</p>
                          <p className="text-sm text-muted-foreground">{item.duration}</p>
                          <p className="mt-1">{item.description}</p>
                        </div>
                      )}
                      
                      {section.title === 'Skills' && (
                        <div>
                          <h4 className="font-semibold">{item.category}</h4>
                          <p className="mt-1">{item.skills}</p>
                        </div>
                      )}
                      
                      {section.title === 'Projects' && (
                        <div>
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="mt-1">{item.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
