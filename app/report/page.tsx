'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ReportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    evidenceType: 'deepfake',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to an API
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen grid-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold gradient-text mb-4 font-['Sora']">
            Report Cybercrime
          </h1>
          <p className="text-gray-400 text-lg">
            Submit evidence of deepfake fraud or digital manipulation to authorities
          </p>
        </motion.div>

        {!submitted ? (
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                  placeholder="+91 1234567890"
                />
              </div>

              {/* Evidence Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Evidence Type *
                </label>
                <select
                  name="evidenceType"
                  required
                  value={formData.evidenceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="deepfake">Deepfake Content</option>
                  <option value="identity-fraud">Identity Fraud</option>
                  <option value="financial-scam">Financial Scam</option>
                  <option value="harassment">Online Harassment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Detailed Description *
                </label>
                <textarea
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 resize-none"
                  placeholder="Describe the incident in detail, including when and where it occurred, who was involved, and any other relevant information..."
                />
              </div>

              {/* Evidence Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Upload Evidence (Optional)
                </label>
                <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:border-indigo-500/50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    className="hidden"
                    id="evidence-upload"
                    multiple
                  />
                  <label htmlFor="evidence-upload" className="cursor-pointer">
                    <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-gray-400">Click to upload evidence files</p>
                    <p className="text-xs text-gray-500 mt-2">Images, videos, screenshots, or documents</p>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <Button type="submit" variant="primary" className="w-full text-lg py-4">
                Submit Report
              </Button>
            </form>

            {/* External Link */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Official Reporting Portal</h3>
              <p className="text-gray-400 mb-4">
                You can also report cybercrimes directly to the Indian Cyber Crime Coordination Centre (I4C):
              </p>
              <a
                href="https://cybercrime.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>Visit cybercrime.gov.in</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </Card>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Card className="text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Report Submitted</h2>
                <p className="text-gray-400 mb-6">
                  Thank you for your report. The authorities will review your submission and may contact you for additional information.
                </p>
                <p className="text-sm text-gray-500 mb-8">
                  Reference ID: <span className="font-mono text-indigo-400">FR-{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
                </p>
                <Button onClick={() => setSubmitted(false)} variant="secondary">
                  Submit Another Report
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
