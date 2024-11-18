import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const RECOMMENDATIONS = [
  {
    name: "Vighneshwar SP",
    role: "Scientist E",
    company: "Indian National Centre for Ocean Information Services (INCOIS)",
    text: "I am delighted to recommend Siddhant Patnaik, who recently completed a internship as a Machine Learning Intern at the Indian National Centre for Ocean Information Services (INCOIS) under my supervision. Siddhant showcased exceptional skills and his ability to quickly learn and implement machine learning model was impressive. Siddhant’s proactive attitude, strong teamwork, and excellent communication skills set him apart, fostering a collaborative and productive work environment. I am confident that Siddhant is a valuable addition to the team.",
  },
 
];

const Recommendations = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl"
      >
        Recommendations
      </motion.h2>
      
      <div className="flex flex-col gap-8 px-4">
        {RECOMMENDATIONS.map((recommendation, index) => (
          <motion.div
            key={index}
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 50}}
            transition={{duration: 0.5, delay: index * 0.2}}
            className="relative bg-neutral-900/30 p-8 rounded-xl backdrop-blur-sm hover:bg-neutral-900/40 transition-all duration-300 max-w-4xl mx-auto w-full"
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
              <div className="bg-purple-500/80 p-3 rounded-full">
                <FaQuoteLeft className="text-xl text-white" />
              </div>
            </div>

            {/* Recommendation Text */}
            <div className="mt-6">
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                {recommendation.text}
              </p>
            </div>

            {/* Recommender Info */}
            <div className="flex flex-col mt-6 pt-6 border-t border-neutral-800">
              <h4 className="font-medium text-purple-300 text-xl mb-2">
                {recommendation.name}
              </h4>
              <p className="text-neutral-400 text-base mb-1">
                {recommendation.role}
              </p>
              {recommendation.company && (
                <p className="text-neutral-500 text-sm">
                  {recommendation.company}
                </p>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-3 -mr-3 h-20 w-20 rounded-full bg-purple-500/10 blur-xl"></div>
            <div className="absolute bottom-0 left-0 -mb-3 -ml-3 h-20 w-20 rounded-full bg-blue-500/10 blur-xl"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;