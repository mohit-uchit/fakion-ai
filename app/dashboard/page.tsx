'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import detectionHistory from '@/data/mockDetections.json';

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'confidence'>('date');
  const [filterType, setFilterType] = useState<'all' | 'image' | 'video' | 'audio'>('all');

  const filteredData = useMemo(() => {
    let data = [...detectionHistory];

    // Filter by type
    if (filterType !== 'all') {
      data = data.filter((item) => item.fileType === filterType);
    }

    // Search
    if (searchTerm) {
      data = data.filter((item) =>
        item.fileName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    data.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      }
      return b.confidence - a.confidence;
    });

    return data;
  }, [searchTerm, sortBy, filterType]);

  const getStatusBadge = (result: string) => {
    if (result === 'deepfake') {
      return 'bg-red-500/20 text-red-400 border border-red-500/30';
    }
    return 'bg-green-500/20 text-green-400 border border-green-500/30';
  };

  const getFileTypeIcon = (type: string) => {
    switch (type) {
      case 'image':
        return '🖼️';
      case 'video':
        return '🎥';
      case 'audio':
        return '🎵';
      default:
        return '📄';
    }
  };

  return (
    <div className="min-h-screen grid-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold gradient-text mb-4 font-['Sora']">
            Detection History
          </h1>
          <p className="text-gray-400 text-lg">
            View and manage your detection analysis history
          </p>
        </motion.div>

        {/* Filters */}
        <Card className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by filename..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Type Filter */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as any)}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="all">All Types</option>
              <option value="image">Images</option>
              <option value="video">Videos</option>
              <option value="audio">Audio</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="date">Sort by Date</option>
              <option value="confidence">Sort by Confidence</option>
            </select>
          </div>
        </Card>

        {/* Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Type</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">File Name</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Result</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Confidence</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Date</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <span className="text-2xl">{getFileTypeIcon(item.fileType)}</span>
                    </td>
                    <td className="py-4 px-4 text-white">{item.fileName}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(item.result)}`}>
                        {item.result === 'deepfake' ? 'Fake' : 'Authentic'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-white font-mono">{item.confidence}%</td>
                    <td className="py-4 px-4 text-gray-400">
                      {new Date(item.timestamp).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-green-400 text-xs">✓ {item.status}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No results found</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
