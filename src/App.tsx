import { motion } from 'framer-motion';

const App = () => {
  return (
    <motion.div
    animate={{ x: 100, y:100, opacity:100 }}
    // transition={{ delay: 2 }}
    initial={{x: 100, y:50}}
    transition={{ type: "spring", stiffness: 100 }}
    
    >
      <h1 className="text-3xl font-bold justify-center items-center  text-red-500 underline">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Alias
        voluptas ex eos iure optio deserunt nisi cum, <br /> aut accusamus
        suscipit!
      </h1>
    </motion.div>
  );
};

export default App;
