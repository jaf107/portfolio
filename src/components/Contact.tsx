
import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 staggered-animate">
            <p className="text-lg text-muted-foreground">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <Card>
              <CardContent className="space-y-4 p-6">
                <ContactItem 
                  icon={<Mail size={20} />} 
                  title="Email" 
                  value="jafarmahin107@gmail.com" 
                  href="mailto:jafarmahin107@gmail.com" 
                />
                
                <ContactItem 
                  icon={<Phone size={20} />} 
                  title="Phone" 
                  value="+880 171 774 3519" 
                  href="tel:+8801717743519" 
                />
                
                <ContactItem 
                  icon={<Linkedin size={20} />} 
                  title="LinkedIn" 
                  value="Abu Jafar Saifullah" 
                  href="https://www.linkedin.com/in/abu-jafar-saifullah/" 
                />
                
                <ContactItem 
                  icon={<Github size={20} />} 
                  title="GitHub" 
                  value="jaf107" 
                  href="https://github.com/jaf107" 
                />
                
                <ContactItem 
                  icon={<MapPin size={20} />} 
                  title="Location" 
                  value="Dhaka, Bangladesh" 
                />
              </CardContent>
            </Card>
            
            <div className="flex gap-4">
              <Button asChild className="gap-2">
                <a href="mailto:jafarmahin107@gmail.com">
                  <Mail size={18} />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <a href="https://www.linkedin.com/in/abu-jafar-saifullah/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg animate-fade-in">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">Let's Build Something Together</h3>
              <p className="text-muted-foreground">
                I'm open to freelance opportunities, full-time positions, and collaborations on interesting projects.
              </p>
              <div className="pt-4">
                <Button asChild size="lg" className="gap-2">
                  <a href="mailto:jafarmahin107@gmail.com">
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
