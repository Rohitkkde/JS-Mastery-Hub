
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

const weeklyData = [
  {
    week: 1,
    title: "JavaScript Fundamentals",
    bgColor: "#FFD37D",
    topics: [
      "let & const",
      "var & declaration hoisting",
      "Truthy & Falsy",
      "Short Circuit Evaluation",
      "Type Equality & Coercion",
      "Pass by Value vs Pass by Reference",
      "Autoboxing & Primitive Wrapper Objects",
    ],
  },
  {
    week: 2,
    title: "Advanced Functions & Objects",
    bgColor: "#77C6B3",
    topics: [
      "Function Hoisting",
      "Control Flow",
      "Callback Functions",
      "Higher Order Array Methods",
      "Immediately Invoked Function Expressions (IIFEs)",
      "Objects and Prototypes",
      "Constructor Functions",
    ],
  },
  {
    week: 3,
    title: "Modern JavaScript (ES6+)",
    bgColor: "#70A2E1",
    topics: [
      "ECMAScript",
      "Classes",
      "Class Hoisting",
      "Modern JavaScript Features",
      "Maps",
      "Sets",
      "Symbols",
      "BigInts",
      "Iterators & Generators, Proxy and Reflect",
    ],
  },
  {
    week: 4,
    title: "Advanced JavaScript Concepts",
    bgColor: "#F57642",
    topics: [
      "Synchronous vs Asynchronous",
      "JavaScript Engine & Environment",
      "Event Loop",
      "Promises",
      "async/await",
      "Execution Context",
      "The `this` Keyword",
      "Closures",
    ],
  },
  {
    week: 5,
    title: "Web APIs & DOM",
    bgColor: "#FFBABA",
    topics: [
      "Browser VS Node.js",
      "DOM API Basics",
      "Event Handling",
      "Advanced DOM Manipulation Techniques",
      "Cookies",
      "Web Storage APIs",
      "More Web APIs",
    ],
  },
  {
    week: 6,
    title: "Project Development",
    bgColor: "#D9DFF8",
    topics: [
      "JavaScript Typing",
      "JIT Compilation",
      "Integrating JavaScript with Other Languages (WASM)",
      "Exploring JavaScript Design Patterns",
      "Advanced Debugging Techniques and Tools",
      "Best Practices & Code Quality",
      "Unit Testing in JavaScript",
      "Deploying JavaScript Applications",
    ],
  },
]

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };
  
  const weekVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // New tag animation variants
  const tagContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section className='py-20 px-8 w-full' ref={ref}>
      <div className='w-full flex flex-col items-center justify-between'>
        <motion.h2 
          className='text-6xl lg:text-8xl font-bold mb-20'
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
        >
          Your Learning Journey
        </motion.h2>

        <motion.div 
          className='w-full flex justify-center'
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Timeline Items */}
          <div className='lg:w-[60vw] grid lg:grid-cols-[1fr_4fr]'>
            {weeklyData.map((week, index) => (
              <React.Fragment key={week.week}>
                <motion.div 
                  className='border-r-2 lg:pr-8 relative lg:border-blue-dark'
                  variants={weekVariants}
                >
                  {/* Week Card */}
                  <div className='text-6xl lg:text-4xl font-bold mb-4 mt-4 lg:mt-16 text-center'>
                    Week {week.week}
                  </div>
                  {/* Timeline Dot */}
                  <div className='hidden lg:block absolute top-16 right-0 w-6 h-6 translate-x-1/2 rounded-full bg-[#F7DF1E] border-4 border-[#3658D3]' />
                </motion.div>

                <motion.div
                  className={`lg:mx-8 mb-8 p-8 lg:p-16 rounded-xl w-full`}
                  style={{ backgroundColor: week.bgColor }}
                  variants={weekVariants}
                >
                  <h3 className='text-4xl font-bold mb-8'>{week.title}</h3>

                  {/* Topics - Now with container animation */}
                  <motion.div 
                    className='flex flex-wrap gap-2'
                    variants={tagContainerVariants}
                  >
                    {week.topics.map((topic, i) => (
                      <motion.span
                        key={i}
                        variants={tagVariants}
                        className='px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm'
                      >
                        {topic}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TimelineSection
