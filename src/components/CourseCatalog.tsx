import React, { useState, useMemo } from 'react';
import { Course } from '../types';
import { CATEGORIES } from '../data/coursesData';
import { Search, Sparkles, Clock, Calendar, Star, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface CourseCatalogProps {
  courses: Course[];
  onSelectCourseFab: (course: Course) => void;
  onApplyCourse: (course: Course) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  courses,
  onSelectCourseFab,
  onApplyCourse,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMode, setSelectedMode] = useState<string>('all');

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        selectedCategory === 'All Courses' || course.category === selectedCategory;

      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.toolsCovered.some((tool) =>
          tool.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesMode =
        selectedMode === 'all' ||
        course.upcomingBatches.some((b) =>
          b.mode.toLowerCase().includes(selectedMode.toLowerCase())
        );

      return matchesCategory && matchesSearch && matchesMode;
    });
  }, [courses, selectedCategory, searchQuery, selectedMode]);

  return (
    <section id="catalog" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Announced Batches & Certifications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Industry-Accredited Course Catalog
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Every course below includes a structured <span className="font-semibold text-slate-900">FAB (Features, Advantages, Benefits)</span> breakdown so you understand the exact curriculum, our Raipur institutional advantages, and your career return on investment before applying.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search GST, React, Python..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 shadow-xs"
            />
          </div>
        </div>

        {/* Category Filter Tabs (Zero-Pill: functional segmented tabs with active state) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-blue-950 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Training Mode Filter */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 text-xs text-slate-500 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="font-medium text-slate-700">Filter by Learning Mode:</span>
            <div className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5">
              {[
                { label: 'All Modes', val: 'all' },
                { label: 'Classroom Raipur', val: 'classroom' },
                { label: 'Online Live', val: 'online' },
                { label: 'Hybrid', val: 'hybrid' },
              ].map((m) => (
                <button
                  key={m.val}
                  onClick={() => setSelectedMode(m.val)}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                    selectedMode === m.val
                      ? 'bg-slate-900 text-white font-medium'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <div className="text-slate-500 font-mono">
            Showing <strong className="text-slate-900">{filteredCourses.length}</strong> announced courses
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const nextBatch = course.upcomingBatches[0];
            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Course Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Clean unboxed certification label */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-medium text-amber-300 tracking-wide uppercase drop-shadow-xs">
                      {course.certificationBody}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata Line with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-blue-900">{course.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {course.duration}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-amber-600 font-medium">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {course.rating}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {course.tagline}
                    </p>

                    {/* Tools covered preview */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {course.toolsCovered.slice(0, 4).map((tool, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                        >
                          {tool}
                        </span>
                      ))}
                      {course.toolsCovered.length > 4 && (
                        <span className="text-[11px] text-slate-400 px-1 py-0.5">
                          +{course.toolsCovered.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Batch & Price Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                    {/* Next Batch info */}
                    {nextBatch && (
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-blue-900" />
                          Starts {nextBatch.startDate}
                        </span>
                        <span className="font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                          {nextBatch.seatsLeft} seats left
                        </span>
                      </div>
                    )}

                    {/* Pricing line */}
                    <div className="flex items-baseline justify-between pt-1">
                      <div>
                        <span className="text-xs text-slate-400 line-through mr-1.5 font-mono">
                          ₹{course.originalPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-lg font-extrabold text-slate-900 font-mono">
                          ₹{course.discountedPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[11px] text-emerald-600 font-medium ml-1.5">
                          (Save ₹{(course.originalPrice - course.discountedPrice).toLocaleString('en-IN')})
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Token: ₹{course.tokenFee}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button
                        onClick={() => onSelectCourseFab(course)}
                        className="w-full py-2.5 px-3 bg-blue-950 hover:bg-blue-900 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>View FAB & Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => {
                          // First show FAB modal or apply with FAB highlighted
                          onSelectCourseFab(course);
                        }}
                        className="w-full py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>Apply / Enroll</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Educational FAB Framework Explainer Banner */}
        <div id="fab-guide" className="mt-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
              Why We Show the FAB Model
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              The FAB Framework: Transparency Before You Invest
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              We believe students and working professionals deserve complete clarity on their investment. Every course profile provides a comprehensive breakdown across:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
              <div className="w-8 h-8 rounded-lg bg-blue-900 text-white font-bold text-sm flex items-center justify-center mb-2">
                F
              </div>
              <h4 className="text-sm font-bold text-blue-950">Features (What It Contains)</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Live sandbox access, syllabus hours, tool stacks, real corporate datasets, and instructor credentials.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-100">
              <div className="w-8 h-8 rounded-lg bg-amber-600 text-white font-bold text-sm flex items-center justify-center mb-2">
                A
              </div>
              <h4 className="text-sm font-bold text-amber-950">Advantages (Why Smart Skills)</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                34-year institutional legacy since 1991, NSDC empanelment, Raipur physical lab access, and 1:1 CA/Engineer mentorship.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-sm flex items-center justify-center mb-2">
                B
              </div>
              <h4 className="text-sm font-bold text-emerald-950">Benefits (What You Gain)</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Placement assistance, average salary jumps, recognized national certificates, promotion qualifications, and lifetime network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
