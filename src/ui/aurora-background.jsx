import React, { useState } from "react";
"use client";
import { motion } from "framer-motion";

export function AuroraBackground({ children, className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="aurora-bg" />
      </motion.div>
      {children}
    </div>
  );
}