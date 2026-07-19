"use client";

import { useState } from 'react';
import ResumeUploader from '@/components/resume-analyzer/ResumeUploader';
import ATSScoreCard from '@/components/resume-analyzer/ATSScoreCard';
import MissingSkills from '@/components/resume-analyzer/MissingSkills';
import AISuggestions from '@/components/resume-analyzer/AISuggestions';

export default function ResumeAnalyzerPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Mock analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="py-6 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Resume Analyzer</h1>
          <p className="mt-1 text-sm text-gray-500">Upload your resume to get instant ATS feedback and AI suggestions.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Uploader Column */}
          <div className="lg:col-span-1">
            <ResumeUploader onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
          </div>

          {/* Results Column */}
          {showResults && (
            <div className="lg:col-span-2 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ATSScoreCard />
                <MissingSkills />
              </div>
              <AISuggestions />
            </div>
          )}

        </div>

      </div>
    </div>
  );
}