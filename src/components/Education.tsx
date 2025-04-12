
import React from 'react';
import { GraduationCap, Calendar, Award, MapPin, School } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-10 max-w-2xl mx-auto space-y-6 animate-fade-in">
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <GraduationCap size={20} className="text-primary" />
                  <div>
                    <CardTitle className="text-xl">University of Dhaka</CardTitle>
                    <CardDescription className="text-base">BSc in Software Engineering</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  <span>January 2019 - December 2023</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-sm">
                  <MapPin size={14} className="text-muted-foreground" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <p className="text-muted-foreground">CGPA — 3.88 (out of 4.00)</p>
                <div className="flex items-center gap-1">
                  <Award size={14} className="text-primary" />
                  <span className="text-sm">Institute of Information Technology (IIT)</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Completed a comprehensive curriculum in software engineering principles,
                  algorithms, data structures, and software development methodologies.
                  Participated in multiple software projects and research initiatives.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <School size={20} className="text-primary" />
                  <div>
                    <CardTitle className="text-xl">Notre Dame College</CardTitle>
                    <CardDescription className="text-base">Higher Secondary Certificate (HSC)</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  <span>2016 - 2018</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-sm">
                  <MapPin size={14} className="text-muted-foreground" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <p className="text-muted-foreground">GPA — 5.00 (out of 5.00)</p>
                <p className="text-sm text-muted-foreground">
                  Science group with concentration in Physics, Chemistry, and Mathematics.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
