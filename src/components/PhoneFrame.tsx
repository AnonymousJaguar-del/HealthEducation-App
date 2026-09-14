import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-0 sm:p-4 md:p-6 font-sans transition-all duration-300">
      {/* Sleek Workspace Container (1024x768 aspect on desktop, fluid on mobile) */}
      <div className="w-full sm:w-[1024px] h-screen sm:h-[768px] bg-slate-100 sm:rounded-3xl sm:shadow-2xl overflow-hidden relative sm:border border-slate-200 flex flex-col transition-all duration-300">
        
        {/* Decorative ambient workspace top glow on desktop */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 z-50 pointer-events-none" />

        {/* Content Box */}
        <div className="flex-1 bg-slate-100 relative overflow-hidden flex flex-col">
          {children}
        </div>
        
      </div>
    </div>
  );
}
