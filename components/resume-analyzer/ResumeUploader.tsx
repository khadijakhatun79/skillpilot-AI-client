import { UploadCloud, FileText, X } from 'lucide-react';
import { useState } from 'react';

interface ResumeUploaderProps {
  onAnalyze: () => void;
  isAnalyzing: boolean;
}

export default function ResumeUploader({ onAnalyze, isAnalyzing }: ResumeUploaderProps) {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Resume</h3>
      <p className="text-sm text-gray-500 mb-6">Upload your latest resume in PDF format for AI analysis.</p>

      {!file ? (
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center hover:bg-gray-50 hover:border-indigo-400 transition-colors cursor-pointer group relative">
          <UploadCloud className="w-12 h-12 mx-auto text-gray-400 group-hover:text-indigo-500 transition-colors mb-4" />
          <p className="text-sm font-medium text-gray-700">
            <span className="text-indigo-600">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 mt-1">PDF (MAX. 5MB)</p>
          <input 
            type="file" 
            accept=".pdf" 
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
            title=""
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </div>
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <FileText className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate max-w-[200px] sm:max-w-xs">{file.name}</p>
              <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
          <button 
            onClick={() => setFile(null)}
            className="p-2 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
            disabled={isAnalyzing}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <button
        onClick={onAnalyze}
        disabled={!file || isAnalyzing}
        className="w-full mt-6 flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        {isAnalyzing ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Analyzing Resume...
          </>
        ) : (
          'Analyze Resume'
        )}
      </button>
    </div>
  );
}
