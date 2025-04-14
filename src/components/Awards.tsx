
import React from 'react';
import { Award, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import awardsData from '../data/awards.json';

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
            <CardTitle className="text-lg">
              <span className="font-bold">{title}</span>
            </CardTitle>
          </div>
          <CardDescription>
            <span className="font-semibold">{year}</span>
          </CardDescription>
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
        <h2 className="section-title">
          <span className="font-bold">Awards</span> & Achievements
        </h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 staggered-animate">
          {awardsData.map((award, index) => (
            <AwardItem
              key={index}
              title={award.title}
              description={award.description}
              year={award.year}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
