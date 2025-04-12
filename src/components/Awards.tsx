
import React from 'react';
import { Award, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AwardItemProps {
  title: string;
  description: string;
  year: string;
}

const AwardItem: React.FC<AwardItemProps> = ({ title, description, year }) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Trophy size={20} className="text-yellow-500" />
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <CardDescription>{year}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const Awards = () => {
  return (
    <section id="awards" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Awards & Achievements</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 staggered-animate">
          <AwardItem
            title="Champion"
            description="In Refactoring Competition"
            year="2023"
          />
          
          <AwardItem
            title="Best UI/UX"
            description="At Hackathon"
            year="2023"
          />
          
          <AwardItem
            title="Top 6"
            description="In SCORE-ICSE"
            year="2023"
          />
          
          <AwardItem
            title="Champions"
            description="In Refactoring Competition"
            year="2023"
          />
          
          <AwardItem
            title="Champion"
            description="In Project Showcasing"
            year="2022"
          />
          
          <AwardItem
            title="Runners Up"
            description="Project Showcasing"
            year="2021"
          />
        </div>
      </div>
    </section>
  );
};

export default Awards;
