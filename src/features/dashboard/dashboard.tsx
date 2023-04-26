import React from 'react';

import AreaCharts from '@/components/area-chart/area-chart';
import DonutCharts from '@/components/donut-chart/donut-chart';
import Tab from '@/components/tab/tab';

const Dashboard = () => {
  return (
    <div>
      <div className='mb-10 space-y-2'>
        <h2 className='text-2xl font-semibold'>Good morning blessing 🌤️</h2>
        <p className='text-gray-600'>Checkout the dashboard summary</p>
      </div>

      <div className='my-5'>
        <Tab />
      </div>

      <AreaCharts />
      <div className='mt-10 flex justify-between'>
        <DonutCharts />
        <DonutCharts />
      </div>
    </div>
  );
};

export default Dashboard;
