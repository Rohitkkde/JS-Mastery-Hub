import React from "react"
import { Card } from "./ui/card"
import { Chrome } from "lucide-react"

const projects = [
  {
    number: "01",
    title: "Chrome Extension",
    description:
      "Develop a productivity-boosting browser extension for seamless integration with your workflow",
    tags: ["JavaScript", "Chrome API", "API Integration"],
    image: "photo-1461749280684-dccba630e2f6",
  },
  {
    number: "02",
    title: "Task Management App",
    description:
      "Create a collaborative task manager with real-time updates and team features",
    tags: ["TypeScript", "Firebase", "Redux"],
    image: "photo-1488590528505-98d2b5aba04b",
  },
  {
    number: "03",
    title: "E-commerce Platform",
    description:
      "Build a full-featured online store with shopping cart and payment integration",
    tags: ["React", "Node.js", "Stripe"],
    image: "photo-1486312338219-ce68d2c6f44d",
  },
]

const ProjectsSection = () => {
  return (
    <section className='bg-blue-dark text-white py-32 relative overflow-hidden'>
      <div className='mx-auto w-full'>
        <div className='w-full flex flex-col justify-center mb-20 px-8 text-center'>
          <span className='text-lg font-mono mb-4 block text-white/70'>
            HANDS-ON
          </span>
          <h2 className='text-9xl font-bold'>PROJECTS</h2>
        </div>

        <div className='flex flex-col items-center gap-16'>
          {projects.map((project, index) => (
            <Card
              key={index}
              className='w-full max-w-4xl bg-white text-black rounded-3xl overflow-hidden hover:translate-y-[-8px] transition-transform duration-300'
            >
              <div className='relative'>
                <div className='flex flex-col justify-between items-start'>
                  <div className='w-full rounded-t-xl overflow-hidden'>
                    <img
                      src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={project.title}
                      className='w-full h-full'
                    />
                  </div>
                  <div className='px-12 py-8 w-full flex justify-between items-center'>
                    <h3 className='text-3xl font-bold'>{project.title}</h3>
                    {/* <p className='text-gray-600 mb-8 text-lg leading-relaxed'>
                      {project.description}
                    </p> */}

                    <div className='flex items-center flex-wrap gap-3'>
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className='px-4 py-1.5 bg-gray-100 text-stone-700 rounded-lg text-sm font-thin'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Badge */}
                <div className='absolute top-6 right-6 bg-orange text-white px-4 py-2 rounded-full flex items-center gap-2'>
                  <Chrome className='w-4 h-4' />
                  <span className='text-sm font-medium'>Chrome Extension</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
