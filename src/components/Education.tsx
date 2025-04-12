
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-10 max-w-2xl mx-auto animate-fade-in">
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <GraduationCap size={20} className="text-primary" />
                  <div>
                    <CardTitle className="text-xl">University of Dhaka, Dhaka</CardTitle>
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
              <div className="mt-2">
                <p className="text-muted-foreground">CGPA — 3.88</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
