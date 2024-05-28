import { motion } from "framer-motion";

const RotatingLoader = () => {
  const loadingCircle = {
    display: "block",
    width: "6rem",
    height: "6rem",
    border: "5px solid #f3f3f3",
    borderTop: "6px solid #383636",
    borderRadius: "50%",
    animation: "rotate 1s linear infinite",
  };

  return (
    <div className="flex flex-col text-4xl gap-5 items-center">
        <h1>Lädt Admin Panel</h1>
        <motion.span
            style={loadingCircle}
            animate={{ rotate: 360 }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1,
                ease: "linear",
            }}
        />
    </div>
  );
};

export default RotatingLoader;
