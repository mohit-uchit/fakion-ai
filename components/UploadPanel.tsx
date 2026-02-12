'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface UploadPanelProps {
  onFileSelect: (file: File) => void;
  acceptedTypes?: string;
  maxSize?: number; // in MB
}

export default function UploadPanel({
  onFileSelect,
  acceptedTypes = 'image/*,video/*,audio/*',
  maxSize = 50
}: UploadPanelProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.size > maxSize * 1024 * 1024) {
      alert(`File size must be less than ${maxSize}MB`);
      return;
    }

    // Create preview for images/videos
    if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }

    onFileSelect(file);
  };

  return (
    <div className="w-full">
      <motion.div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        animate={{
          borderColor: isDragging ? '#6366F1' : 'rgba(255, 255, 255, 0.1)',
          backgroundColor: isDragging ? 'rgba(99, 102, 241, 0.1)' : 'rgba(255, 255, 255, 0.05)',
        }}
        className="relative border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all"
      >
        <input
          type="file"
          accept={acceptedTypes}
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        {preview ? (
          <div className="space-y-4">
            {preview.startsWith('data:image') ? (
              <img src={preview} alt="Preview" className="max-h-64 mx-auto rounded-lg" />
            ) : (
              <video src={preview} className="max-h-64 mx-auto rounded-lg" controls />
            )}
            <p className="text-sm text-gray-400">File loaded successfully</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-medium text-white">
                Drag & drop your file here
              </p>
              <p className="text-sm text-gray-400 mt-1">
                or click to browse
              </p>
            </div>
            <p className="text-xs text-gray-500">
              Supports images, videos, and audio files up to {maxSize}MB
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
