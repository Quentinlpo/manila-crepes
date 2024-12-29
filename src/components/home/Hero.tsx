import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] bg-black overflow-hidden pt-32">
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img src="/images/floating-crepe1.png" alt="Floating Crepe" className="w-16 h-16" />
      </motion.div>

      <motion.div 
        className="absolute bottom-20 right-10"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img src="/images/floating-crepe2.png" alt="Floating Crepe" className="w-20 h-20" />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-righteous font-bold mb-6 text-white tracking-wider"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Holy <span className="text-primary relative inline-block">
                Crêpe
                <motion.span 
                  className="absolute -top-1 right-0 text-2xl"
                  animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  😇
                </motion.span>
                <motion.span 
                  className="absolute -bottom-1 left-0 text-2xl"
                  animate={{ y: [0, 10, 0], rotate: [0, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  😈
                </motion.span>
              </span>
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl mb-8 text-white/90 font-marker"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Where Heaven Meets Hell in Every Bite
            </motion.p>
            
            {/* Fun Button */}
            <motion.button
              className="bg-primary text-black px-8 py-4 rounded-full text-xl font-semibold
                         hover:bg-primary/90 transform hover:scale-105 transition-all
                         flex items-center space-x-2 mx-auto md:mx-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Order Now</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-black" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Mascots Container */}
          <div className="w-full md:w-1/2 flex justify-between items-start relative">
            {/* Demon Mascot */}
            <motion.div 
              className="w-1/3"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="/images/demon-mascot.png" 
                alt="Demon Mascot" 
                className="w-full h-auto"
              />
              <motion.div 
                className="speech-bubble bg-white p-3 rounded-xl relative mt-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-black text-sm">Try our Spicy Sisig Crepe! 🌶️</p>
              </motion.div>
            </motion.div>

            {/* Angel Mascot */}
            <motion.div 
              className="w-1/3 ml-auto"
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="/images/angel-mascot.png" 
                alt="Angel Mascot" 
                className="w-full h-auto"
              />
              <motion.div 
                className="speech-bubble bg-primary p-3 rounded-xl relative mt-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
              >
                <p className="text-black text-sm">Or our Sweet Ube Crepe! 💜</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-20 bg-white"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 75% 50%, 50% 0, 25% 50%, 0 0)"
        }}
        animate={{
          y: [0, 5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default Hero;
