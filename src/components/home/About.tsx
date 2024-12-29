import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '5+' },
    { label: 'Crepe Varieties', value: '20+' },
    { label: 'Happy Customers', value: '10k+' },
    { label: 'Food Truck Events', value: '100+' }
  ];

  return (
    <section className="bg-black py-20 relative overflow-hidden" id="about">
      {/* Angelic Halo Effect */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.3) 0%, rgba(255,215,0,0) 70%)',
        }}
      />

      {/* Floating Angel Icons */}
      <motion.div
        className="absolute top-10 left-10 text-primary text-3xl"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        👼
      </motion.div>

      <motion.div
        className="absolute top-16 right-10 text-primary text-3xl"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        😇
      </motion.div>

      <div className="container mx-auto px-6 py-16 overflow-hidden">
        <motion.h2 
          className="text-5xl font-righteous font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Story
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-righteous text-primary mb-4">
              The Birth of "Holy Crêpes"
            </h3>
            <p className="text-lg font-marker leading-relaxed text-white">
              Every great idea has an unexpected beginning. Ours started in the most intimate and joyful moment of our lives. One night, caught up in laughter and love, my wife exclaimed, "Holy Crap!" in sheer delight. That spontaneous outburst sparked a lightbulb moment.
            </p>
            <p className="text-lg font-marker leading-relaxed text-white">
              We thought, why not share that same joy with others? But instead of "crap," let's make it crêpes—delicious, heavenly, and full of love. And just like that, Holy Crêpes was born, a food truck that serves not just crêpes, but moments of happiness, inspired by love, passion, and a little humor.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-black/50 border border-primary/20 text-white p-6 rounded-xl text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-4xl font-righteous text-primary mb-2">
                  {stat.value}
                </h4>
                <p className="font-marker text-sm text-white/80">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
