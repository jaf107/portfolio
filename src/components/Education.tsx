
import React from 'react';
import { GraduationCap, Calendar, Award, MapPin, School } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import educationData from '../data/education.json';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">
          <span className="font-bold">Education</span>
        </h2>
        
        <div className="mt-10 max-w-2xl mx-auto space-y-6 animate-fade-in">
          {educationData.map((education, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    {index === 0 ? (
                      <GraduationCap size={20} className="text-primary" />
                    ) : (
                      <School size={20} className="text-primary" />
                    )}
                    <div>
                      <CardTitle className="text-xl">
                        <span className="font-bold">{education.institution}</span>
                      </CardTitle>
                      <CardDescription className="text-base font-medium">
                        {education.degree}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span className="font-semibold">{education.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-sm">
                    <MapPin size={14} className="text-muted-foreground" />
                    <span className="font-medium">{education.location}</span>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">GPA —</span> {education.gpa}
                  </p>
                  {education.department && (
                    <div className="flex items-center gap-1">
                      <Award size={14} className="text-primary" />
                      <span className="text-sm font-medium">{education.department}</span>
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {education.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
