
import React from 'react';
import { Award, Trophy, Medal, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import awardsData from '../data/awards.json';

interface AwardItemProps {
  title: string;
  description: string;
  year: string;
  index: number;
}

const getAwardIcon = (title: string, index: number) => {
  if (title.toLowerCase().includes('scholarship')) {
    return <Medal size={22} className="text-yellow-500" />;
  } else if (title.toLowerCase().includes('champion') || title.toLowerCase().includes('top')) {
    return <Trophy size={22} className="text-yellow-500" />;
  } else if (title.toLowerCase().includes('runner')) {
    return <Star size={22} className="text-yellow-500" />;
  }
  return <Award size={22} className="text-yellow-500" />;
};

const AwardItem: React.FC<AwardItemProps> = ({ title, description, year, index }) => {
  const Icon = getAwardIcon(title, index);
  
  return (
    <Card className="card-hover h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {Icon}
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
        <div className="flex justify-center">
          <h2 className="section-title text-center">
            <span className="font-bold">Awards</span> & Achievements
          </h2>
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 staggered-animate">
          {awardsData.map((award, index) => (
            <AwardItem
              key={index}
              title={award.title}
              description={award.description}
              year={award.year}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
