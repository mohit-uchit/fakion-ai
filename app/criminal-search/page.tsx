'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import UploadPanel from '@/components/UploadPanel';
import FaceScanner from '@/components/animations/FaceScanner';
import ResultCard from '@/components/ResultCard';
import { generateFaceHash } from '@/lib/faceHashUtils';
import { searchCriminal } from '@/lib/detectionMock';
import Card from '@/components/ui/Card';

type SearchState = 'idle' | 'scanning' | 'complete';

export default function CriminalSearchPage() {
  const [state, setState] = useState<SearchState>('idle');
  const [result, setResult] = useState<any>(null);
  const [faceHash, setFaceHash] = useState<string>('');

  const handleFileSelect = async (file: File) => {
    setState('scanning');

    // Generate face hash from filename
    const hash = generateFaceHash(file.name);
    setFaceHash(hash);

    // Search criminal database
    const searchResult = await searchCriminal(hash);

    setResult(searchResult);
    setState('complete');
  };

  const resetSearch = () => {
    setState('idle');
    setResult(null);
    setFaceHash('');
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
            Criminal Face Search
          </h1>
          <p className="text-gray-400 text-lg">
            Upload a face image to search against criminal databases
          </p>
        </motion.div>

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
                acceptedTypes="image/*"
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
              <FaceScanner duration={3000} />

              <Card className="text-center">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                    <span className="text-cyan-400 font-mono">Generating Face Hash...</span>
                  </div>
                  {faceHash && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="glass p-4 rounded-lg"
                    >
                      <p className="text-xs text-gray-500 mb-1">Face Hash</p>
                      <p className="font-mono text-sm text-gray-300">{faceHash}</p>
                    </motion.div>
                  )}
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                    <span className="text-indigo-400 font-mono">Searching Database...</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {state === 'complete' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              {result.found ? (
                <>
                  <ResultCard
                    result="match"
                    confidence={result.data.confidence}
                    details={{
                      name: result.data.name,
                      crime: result.data.crime,
                    }}
                  />

                  <Card>
                    <h3 className="text-xl font-bold text-white mb-4">Additional Information</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Case ID:</span>
                        <span className="text-white font-mono">{result.data.caseId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Last Seen:</span>
                        <span className="text-white">{result.data.lastSeen}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Face Hash:</span>
                        <span className="text-white font-mono text-xs">{result.data.hash}</span>
                      </div>
                    </div>
                  </Card>
                </>
              ) : (
                <ResultCard
                  result="no-match"
                  confidence={100}
                />
              )}

              <div className="flex justify-center">
                <button
                  onClick={resetSearch}
                  className="glass px-6 py-3 rounded-lg text-white hover:glass-strong transition-all"
                >
                  Search Another Face
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
