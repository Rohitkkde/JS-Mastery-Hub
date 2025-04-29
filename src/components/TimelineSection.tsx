
import React from 'react';

const weeklyData = [
  {
    week: 1,
    title: "JavaScript Fundamentals",
    bgColor: "#FFD37D",
    topics: ["let & const", "var & declaration hoisting", "Truthy & Falsy"]
  },
  {
    week: 2,
    title: "Advanced Functions & Objects",
    bgColor: "#70A2E1",
    topics: ["Closures", "Prototypes", "This keyword"]
  },
  {
    week: 3,
    title: "Modern JavaScript Features",
    bgColor: "#F57642",
    topics: ["Arrow Functions", "Destructuring", "Spread/Rest"]
  },
  {
    week: 4,
    title: "Async Programming",
    bgColor: "#3658D3",
    topics: ["Promises", "Async/Await", "Event Loop"]
  },
  {
    week: 5,
    title: "Web APIs & DOM",
    bgColor: "#F7DF1E",
    topics: ["DOM Manipulation", "Event Handling", "Fetch API"]
  },
  {
    week: 6,
    title: "Project Development",
    bgColor: "#70A2E1",
    topics: ["Best Practices", "Error Handling", "Performance"]
  }
];

const TimelineSection = () => {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl font-bold mb-20">Your Learning Journey</h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[200px] top-0 bottom-0 w-0.5 bg-[#3658D3]" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {weeklyData.map((week, index) => (
              <div key={index} className="relative flex gap-8">
                {/* Timeline Dot */}
                <div className="absolute left-[192px] w-4 h-4 rounded-full bg-[#F7DF1E] border-4 border-[#3658D3]"
                     style={{ top: "32px" }} />

                {/* Week Card */}
                <div className="w-[180px] text-lg font-mono">
                  Week {week.week}
                </div>

                <div className={`min-w-[300px] p-6 rounded-xl`}
                     style={{ backgroundColor: week.bgColor }}>
                  <h3 className="text-2xl font-bold mb-4">{week.title}</h3>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2">
                    {week.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
