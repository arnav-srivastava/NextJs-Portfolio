import Image from "next/image";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Home Page",
};

export default function Home() {
  return (
  <>
  <div className='mt-3'>
  <Navbar />
  </div>
  <Image 
    src="/backimg.avif" 
    alt="Background" 
    layout="fill" 
    objectFit="cover" 
    className="z-[-1]" 
  />

  {/* Main Container */}
  <div className="relative min-h-[calc(100vh-60px)] flex flex-col items-center justify-center bg-cover bg-center px-4 overflow-hidden">
    
    
    {/* Profile Image */}
    <div className="absolute top-[10px] md:top-[20px] lg:top-[23px] left-1/2 transform -translate-x-1/2 
      w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-white shadow-lg">
      <Image src="/arnav.jpg" alt="Profile" width={232} height={232} />
    </div>

    <div className="text-center text-white">
    {/* Animated Text */}
    <h1 className="mt-28 md:mt-32 lg:mt-40 text-2xl md:text-4xl lg:text-6xl font-bold animate-pulse text-center">
      Welcome to My Portfolio
    </h1>
    
    <p className="mt-4 text-sm md:text-lg lg:text-xl font-light animate-fade-in text-center">
      Frontend Developer | Responsive Design | Innovator
    </p>
    </div>  
  </div>
</>

  );
}
