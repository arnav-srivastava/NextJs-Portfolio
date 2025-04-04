import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: 'About',
}


const About = () => {
  return (
<div className="bg-gray-900 min-h-screen">
  {/* Sticky Navbar */}
  <div className="sticky top-0 z-50 bg-gray-900 shadow-lg pt-3">
    <Navbar />
  </div>

  <section id="about" className="text-center justify-center text-white py-16 px-6 md:px-12 lg:px-24">
    
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      
      {/* Image - Appears on Top in Mobile */}
      <div className="w-full md:w-1/3 flex justify-center mb-10 md:mb-0">
        <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
          <Image src="/arnav.jpg" alt="Profile" width={288} height={288} />
        </div>
      </div>

      {/* About Text */}
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-4xl font-bold text-blue-400 mb-4">About Me</h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          I am a Frontend Developer passionate about building modern, responsive, and user-friendly web applications. 
          I specialize in React.js, Next.js, Tailwind CSS, and JavaScript, with a keen eye for UI/UX design.
        </p>

        {/* Skills */}
        <h3 className="text-2xl font-semibold text-blue-300 mb-3">Skills</h3>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {["React.js", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Node.js", "MongoDB"].map((skill, index) => (
            <span key={index} className="px-4 py-2 bg-gray-800 rounded-md shadow-md">
              {skill}
            </span>
          ))}
        </div>

        {/* Experience */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-blue-300 mb-3">Experience</h3>
          <p className="text-gray-300">Frontend Developer at Cloud Rank Pvt. Ltd. (Dec 2023 - Present)</p>
          <p className="text-gray-400 text-sm">Developed multiple web applications with React.js</p>
        </div>

        {/* Education */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-300 mb-3">Education</h3>
          <p className="text-gray-300">Bachelor’s in Computer Science - GLA University</p>
          <p className="text-gray-400 text-sm">Graduated in 2024, specializing in Web Development and UI/UX Design.</p>
        </div>

        {/* Contact Button */}
        <div className="mt-8">
          <Link href="mailto:arnavsrivastav398@gmail.com">
            <span className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all">
              Contact Me
            </span>
          </Link>
        </div>
      </div>

    </div>
  </section>
</div>

  );
};

export default About;



//  {/* <div className="bg-gray-900">
//   <div className='pt-3'>
//   <Navbar />
//   </div>
//     <section id="about" className="text-center justify-center text-white py-16 px-6 md:px-12 lg:px-24">
      
//       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        
//         {/* Left Side - Image */}
//         <div className="relative w-full md:w-1/3 flex justify-center mb-10 md:mb-0">
//           <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
//             <Image src="/arnav.jpg" alt="Profile" width={288} height={288} />
//           </div>
//         </div>

//         {/* Right Side - About Text */}
//         <div className="w-full md:w-2/3 text-center md:text-left">
//           <h2 className="text-4xl font-bold text-blue-400 mb-4">About Me</h2>
//           <p className="text-lg text-gray-300 mb-6 leading-relaxed">
//             I am a Frontend Developer passionate about building modern, responsive, and user-friendly web applications. 
//             I specialize in React.js, Next.js, Tailwind CSS, and JavaScript, with a keen eye for UI/UX design.
//           </p>

//           {/* Skills */}
//           <h3 className="text-2xl font-semibold text-blue-300 mb-3">Skills</h3>
//           <div className="flex flex-wrap gap-3">
//             {["React.js", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Node.js", "MongoDB"].map((skill, index) => (
//               <span key={index} className="px-4 py-2 bg-gray-800 rounded-md shadow-md">
//                 {skill}
//               </span>
//             ))}
//           </div>

//           {/* Experience & Education */}
//           <div className="mt-8">
//             <h3 className="text-2xl font-semibold text-blue-300 mb-3">Experience</h3>
//             <p className="text-gray-300">Frontend Developer at Cloud Rank Pvt. Ltd. (Dec 2023 - Present)</p>
//             <p className="text-gray-400 text-sm">Developed multiple web applications with React.js</p>
//           </div>

//           <div className="mt-6">
//             <h3 className="text-2xl font-semibold text-blue-300 mb-3">Education</h3>
//             <p className="text-gray-300">Bachelor’s in Computer Science - GLA University</p>
//             <p className="text-gray-400 text-sm">Graduated in 2024, specializing in Web Development and UI/UX Design.</p>
//           </div>

//           {/* CTA Button */}
//           <div className="mt-8">
//             <Link href="/contact">
//             <span className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all" >
//               Contact Me
//               </span>
//             </Link>
//           </div>
//         </div>

//       </div>
//     </section>
//     </div> */}