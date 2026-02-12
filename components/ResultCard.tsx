'use client';

import { motion } from 'framer-motion';
import Card from './ui/Card';

interface ResultCardProps {
  result: 'fake' | 'real' | 'match' | 'no-match';
  confidence: number;
  details?: {
    name?: string;
    crime?: string;
    [key: string]: any;
  };
}

export default function ResultCard({ result, confidence, details }: ResultCardProps) {
  const getColor = () => {
    if (result === 'fake' || result === 'match') return 'from-red-500 to-orange-500';
    if (result === 'real' || result === 'no-match') return 'from-green-500 to-emerald-500';
    return 'from-gray-500 to-gray-600';
  };

  const getIcon = () => {
    if (result === 'fake' || result === 'match') {
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    }
    return (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  };

  const getTitle = () => {
    if (result === 'fake') return 'Deepfake Detected';
    if (result === 'real') return 'Authentic Content';
    if (result === 'match') return 'Criminal Match Found';
    if (result === 'no-match') return 'No Match Found';
  };

  return (
    <Card hover={false} className="max-w-2xl mx-auto">
      <div className="text-center space-y-6">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-br ${getColor()} flex items-center justify-center text-white`}
        >
          {getIcon()}
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-white"
        >
          {getTitle()}
        </motion.h2>

        {/* Confidence Meter */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Confidence Level</span>
            <span className="text-white font-semibold">{confidence}%</span>
          </div>
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${confidence}%` }}
              transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
              className={`h-full bg-gradient-to-r ${getColor()}`}
            />
          </div>
        </div>

        {/* Details */}
        {details && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 pt-6 border-t border-white/10 space-y-3 text-left"
          >
            {details.name && (
              <div className="flex justify-between">
                <span className="text-gray-400">Name:</span>
                <span className="text-white font-medium">{details.name}</span>
              </div>
            )}
            {details.crime && (
              <div className="flex justify-between">
                <span className="text-gray-400">Crime:</span>
                <span className="text-white font-medium">{details.crime}</span>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </Card>
  );
}
