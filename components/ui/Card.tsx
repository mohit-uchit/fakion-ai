'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -2, boxShadow: '0 4px 20px rgba(59, 130, 246, 0.1)' } : {}}
      transition={{ duration: 0.3 }}
      className={`glass rounded-xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
