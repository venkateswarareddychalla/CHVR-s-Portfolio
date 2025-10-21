// import React from 'react'
// import { ThemeToggle } from '../components/ThemeToggle'
// import Navbar from '../components/Navbar'
// import HeroSection from '../components/HeroSection'
// import AboutMe from '../components/AboutMe'
// import SkillsSection from '../components/SkillsSection'
// import ProjectsSection from '../components/ProjectsSection'
// import Footer from '../components/Footer'

// const Home = () => {
//   return (
//     <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
//       {/* Theme Toggle */}
//       <ThemeToggle />
//       {/* Navbar */}
//       <Navbar />
//       {/* Main Content */}
//       <main className="">
//         <HeroSection />
//         <AboutMe />
//         <SkillsSection />
//         <ProjectsSection />
//         <Footer />
//       </main>
//       {/* Footer */}
//     </div>
//   )
// }

// export default Home



import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full">
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  )
}

export default Home
