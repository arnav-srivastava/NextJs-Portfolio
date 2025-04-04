// "use client";
// import Navbar from "@/components/Navbar";
// import { useState } from "react";

// const faqs = [
//     {
//         question: "What am I currently learning?",
//         answer: "I am currently exploring full-stack development using Next.js and MongoDB for the database.",
//       },
//   {
//     question: "What makes my development style unique?",
//     answer: "I prioritize clean, scalable, and efficient code while balancing performance and UI aesthetics. My code is modular and well-documented.",
//   },
//   {
//     question: "Why did I choose Next.js for full-stack development?",
//     answer: "Next.js offers a powerful combination of server-side rendering (SSR), static site generation (SSG), API routes, and performance optimizations, making it a great choice for building scalable web applications.",
//   },
//   {
//     question: "What backend technologies am I working with?",
//     answer: "I am using MongoDB as the database, Mongoose for database modeling, and Next.js API routes to handle backend logic.",
//   },
//   {
//     question: "How do I approach problem-solving?",
//     answer: "I break down complex problems into smaller chunks, analyze patterns, and leverage debugging techniques to find optimal solutions.",
//   },
//   {
//     question: "How do I ensure code quality?",
//     answer: "I follow best practices, conduct code reviews, and use linting tools like ESLint & Prettier. I also write unit tests where necessary.",
//   },
//   {
//     question: "What tech stack do I specialize in?",
//     answer: "My core skills include React.js, Tailwind CSS, JavaScript, Next.Js, and REST APIs.",
//   },
//   {
//     question: "How do I optimize web performance?",
//     answer: "I use lazy loading, memoization, code splitting, and optimize images & assets for speed.",
//   },
//   {
//     question: "What are some key challenges in full-stack development?",
//     answer: "Managing data flow between frontend and backend, optimizing database queries, and implementing secure authentication are some of the key challenges I focus on solving.",
//   },
// ];

// const FAQs = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="bg-gray-900 min-h-screen px-4 sm:px-6 lg:px-8">
//     <div className="max-w-2xl mx-auto py-3">
        
//         <div className=""><Navbar/></div>
//       <h2 className="text-3xl font-bold text-center my-6 text-blue-400">💡 Frequently Asked Questions</h2>
      
//       <div className="space-y-4">
//         {faqs.map((faq, index) => (
//           <div key={index} className="border rounded-lg shadow-md bg-white p-4">
//             <button 
//               className="w-full text-left font-semibold text-lg flex justify-between items-center"
//               onClick={() => toggleFAQ(index)}
//             >
//               {faq.question}
//               <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
//             </button>
            
//             {openIndex === index && (
//               <p className="mt-2 text-gray-600 transition-all">{faq.answer}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default FAQs;



"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const faqs = [
  {
    question: "What am I currently learning?",
    answer: "I am currently exploring full-stack development using Next.js and MongoDB for the database.",
  },
  {
    question: "What makes my development style unique?",
    answer: "I prioritize clean, scalable, and efficient code while balancing performance and UI aesthetics. My code is modular and well-documented.",
  },
  {
    question: "Why did I choose Next.js for full-stack development?",
    answer: "Next.js offers a powerful combination of server-side rendering (SSR), static site generation (SSG), API routes, and performance optimizations, making it a great choice for building scalable web applications.",
  },
  {
    question: "What backend technologies am I working with?",
    answer: "I am using MongoDB as the database, Mongoose for database modeling, and Next.js API routes to handle backend logic.",
  },
  {
    question: "How do I approach problem-solving?",
    answer: "I break down complex problems into smaller chunks, analyze patterns, and leverage debugging techniques to find optimal solutions.",
  },
  {
    question: "How do I ensure code quality?",
    answer: "I follow best practices, conduct code reviews, and use linting tools like ESLint & Prettier. I also write unit tests where necessary.",
  },
  {
    question: "What tech stack do I specialize in?",
    answer: "My core skills include React.js, Tailwind CSS, JavaScript, Next.Js, and REST APIs.",
  },
  {
    question: "How do I optimize web performance?",
    answer: "I use lazy loading, memoization, code splitting, and optimize images & assets for speed.",
  },
  {
    question: "What are some key challenges in full-stack development?",
    answer: "Managing data flow between frontend and backend, optimizing database queries, and implementing secure authentication are some of the key challenges I focus on solving.",
  },
];

const ITEMS_PER_PAGE = 5;

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const totalPages = Math.ceil(faqs.length / ITEMS_PER_PAGE);
  const currentItems = faqs.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="bg-gray-900 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-3">
        <div className=""><Navbar /></div>
        <h2 className="text-3xl font-bold text-center my-6 text-blue-400">💡 Frequently Asked Questions</h2>
        <div className="space-y-4">
          {currentItems.map((faq, index) => (
            <div key={index} className="border rounded-lg shadow-md bg-white p-4">
              <button
                className="w-full text-left font-semibold text-lg flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && <p className="mt-2 text-gray-600 transition-all">{faq.answer}</p>}
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button 
            className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={prevPage}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <span className="text-white">Page {currentPage + 1} of {totalPages}</span>
          <button 
            className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
