'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface FaceScannerProps {
  onComplete?: () => void;
  duration?: number;
}

export default function FaceScanner({ onComplete, duration = 3000 }: FaceScannerProps) {
  const [progress, setProgress] = useState(0);
  const [scanLine, setScanLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete?.();
          return 100;
        }
        return prev + 2;
      });

      setScanLine((prev) => (prev >= 100 ? 0 : prev + 4));
    }, duration / 50);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      {/* Face Grid Overlay */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-30">
        {Array.from({ length: 64 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 2,
              delay: i * 0.02,
              repeat: Infinity,
            }}
            className="border border-cyan-500/30"
          />
        ))}
      </div>

      {/* Scanning Line */}
      <motion.div
        animate={{ top: `${scanLine}%` }}
        transition={{ duration: 0.05, ease: 'linear' }}
        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-lg shadow-cyan-500/50"
        style={{ filter: 'blur(2px)' }}
      />

      {/* Corner Markers */}
      {[
        { top: 0, left: 0 },
        { top: 0, right: 0 },
        { bottom: 0, left: 0 },
        { bottom: 0, right: 0 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute w-8 h-8"
          style={pos}
        >
          <div className="w-full h-full border-2 border-indigo-500"
            style={{
              borderRightColor: pos.right !== undefined ? 'transparent' : undefined,
              borderLeftColor: pos.left !== undefined ? 'transparent' : undefined,
              borderTopColor: pos.top !== undefined ? 'transparent' : undefined,
              borderBottomColor: pos.bottom !== undefined ? 'transparent' : undefined,
            }}
          />
        </motion.div>
      ))}

      {/* Neural Network Nodes */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
            }}
            transition={{
              duration: 3,
              delay: i * 0.15,
              repeat: Infinity,
            }}
            className="absolute w-2 h-2 rounded-full bg-indigo-500"
            style={{
              left: '50%',
              top: '50%',
              boxShadow: '0 0 10px rgba(99, 102, 241, 0.8)',
            }}
          />
        ))}
      </div>

      {/* Progress Display */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass px-4 py-2 rounded-full"
        >
          <span className="text-cyan-400 font-mono text-sm font-bold">
            {progress}% SCANNING
          </span>
        </motion.div>
      </div>
    </div>
  );
}
