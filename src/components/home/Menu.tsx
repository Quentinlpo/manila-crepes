import { motion } from 'framer-motion';

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  category: 'sweet-filling' | 'sweet-combo' | 'savory-combo' | 'desserts' | 'drinks';
}

const menuItems: MenuItem[] = [
  // Sweet Fillings
  { name: "Divine Chocolate (The Original Sin)", description: "Rich dark chocolate that's worth the temptation", price: "4.99", category: 'sweet-filling' },
  { name: "Angel's Caramel Kiss", description: "Heavenly smooth caramel", price: "4.99", category: 'sweet-filling' },
  { name: "Holy Honey", description: "Blessed by our resident angel", price: "4.99", category: 'sweet-filling' },
  { name: "Saint's Secret Cheese", description: "A divine dairy delight", price: "4.99", category: 'sweet-filling' },
  { name: "Seraph's Strawberry", description: "Berry blessed indeed", price: "4.99", category: 'sweet-filling' },
  { name: "Devil's Blueberry", description: "Sinfully sweet", price: "4.99", category: 'sweet-filling' },

  // Sweet Combinations
  { name: "Demon's Banana Temptation", description: "Bananas drizzled with dark chocolate - resistance is futile", price: "6.99", category: 'sweet-combo' },
  { name: "Guardian Angel's Cloud", description: "Heavenly whipped cream with blessed strawberries", price: "6.99", category: 'sweet-combo' },

  // Savory Combinations
  { name: "Purgatory's Ham & Cheese", description: "Stuck between heaven and hell, but delicious both ways", price: "7.99", category: 'savory-combo' },
  { name: "Angel's Garden Delight", description: "Holy trinity of mushrooms, spinach, and blessed cheese", price: "7.99", category: 'savory-combo' },

  // Desserts
  { name: "Paradise Mango", description: "Taste of heaven with mango ice cream", price: "8.99", category: 'desserts' },
  { name: "7 Deadly Chocolate Sins", description: "Rich chocolate fudge that's worth eternal damnation", price: "8.99", category: 'desserts' },
  { name: "Stairway to Mango Heaven", description: "Layered crepe cake ascending to sweet paradise", price: "9.99", category: 'desserts' },
  { name: "Angel's Strawberry Cloud Nine", description: "You'll think you died and went to heaven", price: "9.99", category: 'desserts' },

  // Drinks
  { name: "Holy Water Lemonade", description: "Blessed and refreshing with a hint of mint", price: "3.99", category: 'drinks' },
  { name: "Devil's Hot Chocolate", description: "Sinfully rich and creamy, worth the eternal flame", price: "3.99", category: 'drinks' },
  { name: "Monk's Morning Brew", description: "Coffee blessed by our resident angel", price: "2.99", category: 'drinks' },
  { name: "Cherub's Strawberry Shake", description: "Whipped up in heaven's kitchen", price: "4.99", category: 'drinks' },
];

const Menu = () => {
  return (
    <div className="bg-white py-20 relative overflow-hidden" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-righteous font-bold text-black mb-4">
            Holy Crêpe Menu ✨
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sweet Fillings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-2xl font-righteous text-primary mb-6">
              Sweet Fillings
            </h3>
            <div className="space-y-4">
              {menuItems
                .filter(item => item.category === 'sweet-filling')
                .map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center text-white"
                  >
                    <span className="font-righteous">{item.name}</span>
                    <span className="text-primary font-marker">${item.price}</span>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Sweet Combinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-2xl font-righteous text-primary mb-6">
              Sweet Combinations
            </h3>
            <div className="space-y-4">
              {menuItems
                .filter(item => item.category === 'sweet-combo')
                .map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-righteous">{item.name}</h4>
                      <span className="text-primary font-marker">${item.price}</span>
                    </div>
                    {item.description && (
                      <p className="text-sm font-marker text-white/70 mt-1">{item.description}</p>
                    )}
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Savory Combinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-2xl font-righteous text-primary mb-6">
              Savory Combinations
            </h3>
            <div className="space-y-4">
              {menuItems
                .filter(item => item.category === 'savory-combo')
                .map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-righteous">{item.name}</h4>
                      <span className="text-primary font-marker">${item.price}</span>
                    </div>
                    {item.description && (
                      <p className="text-sm font-marker text-white/70 mt-1">{item.description}</p>
                    )}
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Desserts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-2xl font-righteous text-primary mb-6">
              Desserts
            </h3>
            <div className="space-y-4">
              {menuItems
                .filter(item => item.category === 'desserts')
                .map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-righteous">{item.name}</h4>
                      <span className="text-primary font-marker">${item.price}</span>
                    </div>
                    {item.description && (
                      <p className="text-sm font-marker text-white/70 mt-1">{item.description}</p>
                    )}
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Drinks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-2xl font-righteous text-primary mb-6">
              Drinks
            </h3>
            <div className="space-y-4">
              {menuItems
                .filter(item => item.category === 'drinks')
                .map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-righteous">{item.name}</h4>
                      <span className="text-primary font-marker">${item.price}</span>
                    </div>
                    {item.description && (
                      <p className="text-sm font-marker text-white/70 mt-1">{item.description}</p>
                    )}
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>

        {/* Order Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-black px-8 py-4 rounded-full text-xl font-righteous
                     hover:bg-primary/90 transition-all inline-flex items-center space-x-2"
          >
            <span>Order Now</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              🎉
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
