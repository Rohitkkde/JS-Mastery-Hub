
import React from 'react';
import { Card, CardContent } from "./ui/card";
import { Chrome } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Chrome Extension",
    description: "Develop a productivity-boosting browser extension for seamless integration with your workflow",
    tags: ["JavaScript", "Chrome API", "API Integration"],
    image: "photo-1461749280684-dccba630e2f6"
  },
  {
    number: "02",
    title: "Task Management App",
    description: "Create a collaborative task manager with real-time updates and team features",
    tags: ["TypeScript", "Firebase", "Redux"],
    image: "photo-1488590528505-98d2b5aba04b"
  },
  {
    number: "03",
    title: "E-commerce Platform",
    description: "Build a full-featured online store with shopping cart and payment integration",
    tags: ["React", "Node.js", "Stripe"],
    image: "photo-1486312338219-ce68d2c6f44d"
  }
];

const ProjectsSection = () => {
  return (
    <section className="bg-blue-dark text-white py-32 relative overflow-hidden">
      <div className="max-w-[90vw] mx-auto">
        <div className="mb-20 px-8">
          <span className="text-lg font-mono mb-4 block text-white/70">HANDS-ON</span>
          <h2 className="text-7xl font-bold">PROJECTS</h2>
        </div>

        <div className="flex flex-col items-center gap-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="w-[50vw] bg-white/10 backdrop-blur-sm border-0 hover:translate-y-[-8px] transition-transform duration-300 relative"
            >
              <CardContent className="p-16">
                <div className="absolute top-6 right-6 bg-orange text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <Chrome className="w-4 h-4" />
                  <span className="text-sm font-medium">Chrome Extension</span>
                </div>
                
                <div className="flex justify-between items-start mb-10">
                  <span className="text-7xl font-mono text-white/20">{project.number}</span>
                  <img 
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={project.title}
                    className="w-24 h-24 object-cover rounded-2xl"
                  />
                </div>
                
                <h3 className="text-4xl font-bold mb-6">{project.title}</h3>
                <p className="text-white/70 mb-10 text-lg leading-relaxed max-w-2xl">{project.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-5 py-2.5 bg-white/10 rounded-full text-sm font-medium"
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
