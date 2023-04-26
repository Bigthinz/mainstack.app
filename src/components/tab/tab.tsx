import { motion } from 'framer-motion';
import { useState } from 'react';

const tabs = [
  { id: 'world', label: '1 Day' },
  { id: 'ny', label: '3 Days' },
  { id: 'business', label: '7 Days' },
  { id: 'arts', label: '30 Days' },
  { id: 'science', label: 'All Time' },
  { id: 'custom', label: 'Custom Date' },
];

function Tab() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className='flex space-x-1'>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? '' : 'border    hover:text-[#FB5208]'
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-gray-600 outline-orange-600 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId='bubble'
              className='absolute inset-0 z-10 border border-[#FB5208] bg-[#FDDDCC]  mix-blend-difference'
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tab;
