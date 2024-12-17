import React from "react"
import { motion } from "framer-motion"

const App = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "300px",
        background: "#87ceeb"
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          left: "0",
          width: "100%",
          height: "50px",
          background: "#2c3e50"
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          bottom: "100px",
          left: "50px",
          width: "150px",
          height: "50px",
          background: "#e74c3c",
          borderRadius: "10px"
        }}
        animate={{ 
          x: [0, 400, 0] 
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-30px",
            left: "20px",
            width: "110px",
            height: "30px",
            background: "#c0392b",
            borderRadius: "5px"
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "-10px",
            width: "20px",
            height: "20px",
            background: "rgba(128, 128, 128, 0.7)",
            borderRadius: "50%",
            filter: "blur(4px)"
          }}
          animate={{
            x: [-10, -50],
            y: [0, -30],
            opacity: [1, 0]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0.5
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            top: "10px",
            right: "-20px",
            width: "20px",
            height: "10px",
            background: "#f1c40f",
            borderRadius: "50%",
            filter: "blur(2px)"
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            top: "25px",
            right: "-20px",
            width: "20px",
            height: "10px",
            background: "#f1c40f",
            borderRadius: "50%",
            filter: "blur(2px)"
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            bottom: "-15px",
            left: "20px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            background: "conic-gradient(#34495e, #ecf0f1, #34495e)",
            transformOrigin: "center"
          }}
          animate={{ 
            rotate: 360 
          }}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            bottom: "-15px",
            right: "20px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            background: "conic-gradient(#34495e, #ecf0f1, #34495e)",
            transformOrigin: "center"
          }}
          animate={{ 
            rotate: 360 
          }}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </motion.div>
    </div>
  )
}

export default App
