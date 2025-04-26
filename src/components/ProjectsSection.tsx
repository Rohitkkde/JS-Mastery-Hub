
import React from 'react';
import { Card, CardContent } from "./ui/card";

const projects = [
  {
    number: "01",
    title: "E-commerce Platform",
    description: "Build a full-featured online store with shopping cart and payment integration",
    tags: ["React", "Node.js", "Stripe"],
    image: "photo-1486312338219-ce68d2c6f44d"
  },
  {
    number: "02",
    title: "Task Management App",
    description: "Create a collaborative task manager with real-time updates",
    tags: ["TypeScript", "Firebase", "Redux"],
    image: "photo-1488590528505-98d2b5aba04b"
  },
  {
    number: "03",
    title: "Chrome Extension",
    description: "Develop a productivity-boosting browser extension",
    tags: ["JavaScript", "Chrome API"],
    image: "photo-1461749280684-dccba630e2f6"
  }
];

const ProjectsSection = () => {
  return (
    <section className="bg-blue-dark text-white py-32 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-lg font-mono mb-4 block">HANDS-ON</span>
          <h2 className="text-7xl font-bold">PROJECTS</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 hover:translate-y-[-8px] transition-transform duration-300">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl font-mono opacity-50">{project.number}</span>
                  <img 
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={project.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-white/70 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm"
                    >
                      {tag}
                    </span>
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

export default ProjectsSection;
