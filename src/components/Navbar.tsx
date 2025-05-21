import { Button } from "@/components/ui/button"

const Navbar = () => {
  const navItems = [
    "WHATS INCLUDED",
    "THE JOURNEY",
    "PRACTICAL",
    "MEET ROHIT",
    "TESTIMONIALS",
  ]

  return (
    <nav>
      <div className='container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between'>
        <a
          href='/'
          className='flex items-center gap-1 text-black font-sans text-2xl font-bold mb-4 md:mb-0'
        >
          <span className='text-orange text-4xl'>&lt;</span> javascript-mastery{" "}
          <span className='text-orange text-4xl'>&gt;</span>
        </a>

        <div className='hidden md:flex items-center gap-8'>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className='font-mono text-sm hover:text-blue-dark transition-colors'
            >
              {item}
            </a>
          ))}
          <Button className='bg-blue-dark hover:bg-blue-dark/90 text-white'>
            ENROLL NOW
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
