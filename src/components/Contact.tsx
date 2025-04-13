
import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import contactData from '../data/contact.json';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, value, href }) => {
  const content = (
    <div className="flex items-center gap-3">
      <div className="bg-primary/10 p-3 rounded-full text-primary">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }

  return content;
};

const Contact = () => {
  // Icon mapping
  const getIcon = (iconName: string, size = 20) => {
    switch (iconName) {
      case 'Mail':
        return <Mail size={size} />;
      case 'Phone':
        return <Phone size={size} />;
      case 'Github':
        return <Github size={size} />;
      case 'Linkedin':
        return <Linkedin size={size} />;
      case 'MapPin':
        return <MapPin size={size} />;
      default:
        return <Mail size={size} />;
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 staggered-animate">
            <p className="text-lg text-muted-foreground">
              {contactData.message}
            </p>
            
            <Card>
              <CardContent className="space-y-4 p-6">
                {contactData.contactInfo.map((item, index) => (
                  <ContactItem 
                    key={index}
                    icon={getIcon(item.icon)} 
                    title={item.title} 
                    value={item.value} 
                    href={item.href} 
                  />
                ))}
              </CardContent>
            </Card>
            
            <div className="flex gap-4">
              <Button asChild className="gap-2">
                <a href={`mailto:${contactData.contactInfo[0].value}`}>
                  <Mail size={18} />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <a href={contactData.contactInfo[2].href} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg animate-fade-in">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">{contactData.callToAction.title}</h3>
              <p className="text-muted-foreground">
                {contactData.callToAction.description}
              </p>
              <div className="pt-4">
                <Button asChild size="lg" className="gap-2">
                  <a href={`mailto:${contactData.contactInfo[0].value}`}>
                    <Mail size={18} />
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
