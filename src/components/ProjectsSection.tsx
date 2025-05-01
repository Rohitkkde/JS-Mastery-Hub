
import React, { useRef } from "react"
import { Card } from "./ui/card"
import { Chrome } from "lucide-react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import Marquee from "react-fast-marquee"
import Sparkle from "./icons/Sparkle"

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

const ProjectCard = ({
  project,
  progress,
  range,
  targetScale,
  i,
}: {
  project: {
    number: string
    title: string
    description: string
    tags: string[]
    image: string
  }
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
  i: number
}) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  })

  const scale = useTransform(progress, range, [1, targetScale])
  return (
    <div
      ref={container}
      className='w-screen h-screen pointer-events-none flex justify-center items-center sticky top-0'
    >
      <motion.div
        className='relative h-screen w-full rounded-xl px-5'
        style={{
          scale,
          top: `calc(5vh + ${i * 50}px)`,
        }}
      >
        {" "}
        <motion.div className='w-full h-screen flex justify-center relative'>
          <Card className='w-full h-fit max-w-4xl bg-white text-black rounded-3xl overflow-hidden'>
            <div className='relative'>
              <div className='flex flex-col justify-between items-start'>
                <div className='w-full rounded-t-xl overflow-hidden'>
                  <img
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={project.title}
                    className='w-full'
                  />
                </div>
                <div className='px-12 py-8 w-full flex justify-between items-center'>
                  <h3 className='text-3xl font-bold'>{project.title}</h3>

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
        </motion.div>
      </motion.div>
    </div>
  )
}

const ProjectsSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section
      ref={containerRef}
      className='bg-blue-dark text-white py-32 relative min-h-[200vh]'
    >
      <div className='mx-auto w-full sticky top-0'>
        <div className='w-full flex flex-col justify-center mb-20 px-8 text-center'>
          <span className='text-lg font-mono mb-4 block text-white/70'>
            HANDS-ON
          </span>
          <h2 className='text-6xl lg:text-9xl font-bold'>PROJECTS</h2>

          {/* Adding a marquee banner here */}
          <div className="mt-8 overflow-hidden">
            <Marquee gradient={false} speed={30}>
              <div className="flex items-center gap-8">
                <span className="text-2xl font-bold text-blue-light">Real-world Applications</span>
                <Sparkle fill={"#70A2E1"} width={24} height={24} />
                <span className="text-2xl font-bold text-blue-light">Industry Standards</span>
                <Sparkle fill={"#70A2E1"} width={24} height={24} />
                <span className="text-2xl font-bold text-blue-light">Portfolio Projects</span>
                <Sparkle fill={"#70A2E1"} width={24} height={24} />
              </div>
            </Marquee>
          </div>
        </div>

        <div className='sticky top-20 flex flex-col items-center min-h-[80vh] pb-32'>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05

            return (
              <ProjectCard
                project={project}
                key={`p_${i}`}
                i={i}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
