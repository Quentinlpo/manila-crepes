import { motion } from 'framer-motion';
import { FaHandshake, FaChartLine, FaTools, FaGraduationCap } from 'react-icons/fa';

const Franchise = () => {
  const benefits = [
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Continuous Support",
      description: "A dedicated team to support you at every step of your Holy Crêpe journey."
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Profitable Model",
      description: "A proven concept with attractive margins and quick return on investment."
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: "Complete Training",
      description: "Comprehensive training program on our recipes and unique concept."
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Marketing Expertise",
      description: "Turnkey marketing strategies and ongoing advertising support."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "First Contact",
      description: "Fill out our contact form for an initial discussion."
    },
    {
      number: "02",
      title: "Meeting",
      description: "Discover our concept and share your vision with our team."
    },
    {
      number: "03",
      title: "Training",
      description: "3-week comprehensive program to master our expertise."
    },
    {
      number: "04",
      title: "Opening",
      description: "Full support for your Holy Crêpe launch."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h1 
            className="text-6xl font-righteous text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Become a <span className="text-primary">Franchisee</span>
          </motion.h1>
          <motion.p 
            className="text-2xl font-marker text-center text-primary mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join the Holy Crêpe Adventure! 🚀
          </motion.p>
        </div>
        
        {/* Wave Animation */}
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
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-righteous text-center text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Join Us?
          </motion.h2>
          
          <motion.p 
            className="text-xl font-marker text-center text-primary mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Divine Benefits For Your Success 😇
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl text-center group border-2 border-primary/20 
                         hover:border-primary transition-colors duration-300 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform duration-300 flex justify-center items-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-righteous text-black mb-2">
                  {benefit.title}
                </h3>
                <p className="font-marker text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-righteous text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Process
          </motion.h2>
          
          <motion.p 
            className="text-xl font-marker text-center text-primary mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Path to Success 🌟
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-6xl font-righteous text-primary/20 absolute -top-6 left-0">
                  {step.number}
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-righteous mb-2">
                    {step.title}
                  </h3>
                  <p className="font-marker text-white/80">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-righteous text-center text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Investment
          </motion.h2>
          
          <motion.p 
            className="text-xl font-marker text-center text-primary mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A Heavenly Investment for a Bright Future ✨
          </motion.p>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border-2 border-primary p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-primary">●</span>
                <div>
                  <h3 className="text-xl font-righteous text-black">Franchise Fee</h3>
                  <p className="font-marker text-gray-600">Starting from $25,000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-primary">●</span>
                <div>
                  <h3 className="text-xl font-righteous text-black">Total Investment</h3>
                  <p className="font-marker text-gray-600">Between $80,000 and $120,000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-primary">●</span>
                <div>
                  <h3 className="text-xl font-righteous text-black">Monthly Royalty</h3>
                  <p className="font-marker text-gray-600">5% of Gross Sales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-righteous text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Interested?
          </motion.h2>
          
          <motion.p 
            className="text-xl font-marker text-center text-primary mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Start Your Adventure Today! 🚀
          </motion.p>

          <motion.form 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-righteous text-white mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-black border-2 border-primary/20 rounded-lg p-3 
                           text-white font-marker placeholder-white/50
                           focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-righteous text-white mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black border-2 border-primary/20 rounded-lg p-3 
                           text-white font-marker placeholder-white/50
                           focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block font-righteous text-white mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-black border-2 border-primary/20 rounded-lg p-3 
                         text-white font-marker placeholder-white/50
                         focus:border-primary focus:outline-none transition-colors"
                placeholder="Tell us about your project..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-primary text-black font-righteous py-3 px-6 rounded-lg
                       hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Application
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Franchise;
