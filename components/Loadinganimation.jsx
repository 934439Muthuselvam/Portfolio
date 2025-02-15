"use client";

import { motion } from "framer-motion";

export function Loadinganimation() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <motion.div
        className="bg-transparent flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
       <svg
  width="250"
  height="200"
  viewBox="0 0 250 200"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  


  <rect x="50" y="140" width="150" height="20" stroke="white" stroke-width="3" fill="none">
    <animate attributeName="stroke-dasharray" from="0,300" to="300,0" dur="1.5s" repeatCount="indefinite" />
  </rect>


  <rect x="60" y="60" width="130" height="80" stroke="white" stroke-width="3" fill="none">
    <animate attributeName="stroke-dasharray" from="0,300" to="300,0" dur="1.5s" repeatCount="indefinite" />
  </rect>

  <rect x="65" y="65" width="120" height="70" fill="cyan" opacity="0.2">
    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1.5s" repeatCount="indefinite" />
  </rect>

 
  <line x1="75" y1="80" x2="160" y2="80" stroke="cyan" stroke-width="2">
    <animate attributeName="x2" from="75" to="160" dur="0.8s" repeatCount="indefinite" />
  </line>
  <line x1="75" y1="90" x2="150" y2="90" stroke="cyan" stroke-width="2">
    <animate attributeName="x2" from="75" to="150" dur="0.8s" repeatCount="indefinite" />
  </line>
  <line x1="75" y1="100" x2="140" y2="100" stroke="cyan" stroke-width="2">
    <animate attributeName="x2" from="75" to="140" dur="0.8s" repeatCount="indefinite" />
  </line>

 
  <rect x="142" y="98" width="8" height="12" fill="cyan">
    <animate attributeName="opacity" values="1;0;1" dur="0.5s" repeatCount="indefinite" />
  </rect>
</svg>



        <p className="text-white text-lg font-semibold mt-4 animate-pulse">Sending...</p>
      </motion.div>
    </div>
  );
}
