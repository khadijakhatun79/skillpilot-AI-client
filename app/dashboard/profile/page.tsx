"use client";

import { useState } from 'react';
import { User, Mail, Briefcase, MapPin, Save, Camera, Plus, X, Target, GraduationCap } from 'lucide-react';

const initialSkills = ['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS'];

export default function ProfilePage() {
  const [skills, setSkills] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState('');
  const [saved, setSaved] = useState(false);

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="py-6 min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your personal information and career preferences.</p>
        </div>

        {/* Avatar Section */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
          <div className="px-6 pb-6 relative">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center absolute -top-12 left-6 text-indigo-600 bg-indigo-50">
              <User className="w-12 h-12" />
            </div>
            <button className="absolute -top-4 left-22 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md hover:bg-indigo-700 transition-colors">
              <Camera className="w-4 h-4" />
            </button>
            <div className="pt-16">
              <h2 className="text-xl font-bold text-gray-900">Demo User</h2>
              <p className="text-sm text-gray-500">Member since January 2025</p>
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="flex items-center"><User className="w-4 h-4 mr-1.5 text-gray-400" /> Full Name</span>
              </label>
              <input
                type="text"
                defaultValue="Demo User"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="flex items-center"><Mail className="w-4 h-4 mr-1.5 text-gray-400" /> Email</span>
              </label>
              <input
                type="email"
                defaultValue="user@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1.5 text-gray-400" /> Current Role</span>
              </label>
              <input
                type="text"
                defaultValue="Frontend Developer"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5 text-gray-400" /> Location</span>
              </label>
              <input
                type="text"
                defaultValue="San Francisco, CA"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
              />
            </div>
          </div>
        </div>

        {/* Career Goal */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-5 h-5 mr-2 text-indigo-600" /> Career Goal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Role</label>
              <select className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow bg-white">
                <option>Senior Frontend Engineer</option>
                <option>Full-Stack Engineer</option>
                <option>Engineering Manager</option>
                <option>Staff Engineer</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
              <select className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow bg-white">
                <option>Mid-Level (3-5 years)</option>
                <option>Junior (0-2 years)</option>
                <option>Senior (5-8 years)</option>
                <option>Lead (8+ years)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
            <GraduationCap className="w-5 h-5 mr-2 text-indigo-600" /> Skills
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700 border border-indigo-200"
              >
                {skill}
                <button onClick={() => handleRemoveSkill(skill)} className="ml-2 text-indigo-400 hover:text-indigo-700 transition-colors">
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddSkill()}
              placeholder="Add a skill..."
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
            />
            <button
              onClick={handleAddSkill}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" /> Add
            </button>
          </div>
        </div>

        {/* Save */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-all flex items-center shadow-md hover:shadow-lg"
          >
            <Save className="w-4 h-4 mr-2" />
            {saved ? 'Saved!' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}