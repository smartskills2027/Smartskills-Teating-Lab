import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Building, GraduationCap, Briefcase, Users, Star } from 'lucide-react';

export const WhySmartSkills: React.FC = () => {
  return (
    <section id="about-institution" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
            <Award className="w-4 h-4 text-amber-500" />
            <span>34 Years of Educational Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Students & Employers Choose Smart Skills India
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Founded in 1991 as Bits & Bytes Computers, we have pioneered technical, vocational, and business computing in Central India. Today, as Smartskills Bits & Bytes (P) Ltd., we bridge the divide between academic degrees and corporate employment.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-base font-bold text-slate-900">NSDC & IISC Empanelled</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Official training partner of the National Skill Development Corporation and an empanelled India International Skill Centre for domestic and overseas careers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center mb-4">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Raipur Flagship Campus</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Located at Ashirwad Towers, G.E. Road. Fully air-conditioned computing suites, high-speed fiber, dedicated GST filing labs, and hardware racks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Placement Assistance Cell</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Dedicated placement cell operating out of career@smartskillsindia.com, arranging guaranteed corporate interviews and career counseling.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-indigo-900 text-white flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-base font-bold text-slate-900">35,000+ Alumni Network</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Our alumni work across leading MNCs, national banks, regional corporate headquarters, and prosperous entrepreneurial ventures.
            </p>
          </div>
        </div>

        {/* Placement Partners Showcase */}
        <div id="placement-partners" className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Employment Ecosystem
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Where Our Graduates Build Careers
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              We partner with retail giants, tech enterprises, 3PL logistics corporations, and industrial powerhouses across Chhattisgarh and nationwide.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              'Reliance Retail',
              'Amazon India',
              'Flipkart Supply',
              'Blue Dart Express',
              'TCS iON',
              'HDFC Bank',
              'Delhivery Logistics',
              'Aditya Birla Group',
              'Jindal Steel',
              'Shoppers Stop',
              'DMart Retail',
              'Wipro Tech'
            ].map((partner, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 flex items-center justify-center text-center text-xs font-bold text-slate-200 hover:text-amber-300 hover:border-amber-400/50 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <span>Official Recruiting Queries: career@smartskillsindia.com</span>
            <span>Campus Drives Organized Monthly at Raipur Center</span>
          </div>
        </div>
      </div>
    </section>
  );
};
