'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import UploadPanel from '@/components/UploadPanel';
import FaceScanner from '@/components/animations/FaceScanner';
import ResultCard from '@/components/ResultCard';
import ScanAnimation from '@/components/animations/ScanAnimation';
import { detectDeepfake } from '@/lib/detectionMock';

type DetectionState = 'idle' | 'uploading' | 'scanning' | 'complete';
type DetectionTab = 'image' | 'video' | 'audio';

export default function DetectPage() {
  const [activeTab, setActiveTab] = useState<DetectionTab>('image');
  const [state, setState] = useState<DetectionState>('idle');
  const [result, setResult] = useState<any>(null);

  const handleFileSelect = async (file: File) => {
    setState('uploading');

    // Start scanning animation
    setTimeout(() => {
      setState('scanning');
    }, 500);

    // Simulate detection
    const detectionResult = await detectDeepfake(file);

    setResult(detectionResult);
    setState('complete');
  };

  const resetDetection = () => {
    setState('idle');
    setResult(null);
  };

  const tabs: { id: DetectionTab; label: string; icon: JSX.Element }[] = [
    {
      id: 'image',
      label: 'Image Detection',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'video',
      label: 'Video Detection',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'audio',
      label: 'Voice Detection',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
    },
  ];

  const acceptedTypes = {
    image: 'image/*',
    video: 'video/*',
    audio: 'audio/*',
  };

  return (
    <div className="min-h-screen grid-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold gradient-text mb-4 font-['Sora']">
            Deepfake Detection
          </h1>
          <p className="text-gray-400 text-lg">
            Upload media to analyze for AI-generated manipulation
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                resetDetection();
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white'
                  : 'glass text-gray-300 hover:glass-strong'
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-8">
          {state === 'idle' && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <UploadPanel
                onFileSelect={handleFileSelect}
                acceptedTypes={acceptedTypes[activeTab]}
              />
            </motion.div>
          )}

          {state === 'scanning' && (
            <motion.div
              key="scanning"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <FaceScanner
                onComplete={() => { }}
                duration={3000}
              />
              <ScanAnimation state="scanning" />
            </motion.div>
          )}

          {state === 'complete' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <ResultCard
                result={result.result === 'fake' ? 'fake' : 'real'}
                confidence={result.confidence}
              />
              <div className="flex justify-center">
                <button
                  onClick={resetDetection}
                  className="glass px-6 py-3 rounded-lg text-white hover:glass-strong transition-all"
                >
                  Analyze Another File
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
