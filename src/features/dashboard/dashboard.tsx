import axios from 'axios';
import React, { useEffect, useState } from 'react';

import AreaCharts from '@/components/area-chart/area-chart';
import DonutCharts from '@/components/donut-chart/donut-chart';
import TopSources from '@/components/donut-chart/top-sources';
import Tab from '@/components/tab/tab';

const Dashboard = () => {
  const [graphData, setGraphData] = useState([]);
  const [topLocations, setTopLocations] = useState([]);
  const [topSources, setTopSources] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://fe-task-api.mainstack.io/');
        setGraphData(data.graph_data);
        setTopLocations(data.top_locations);
        setTopSources(data.top_sources);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='mb-10 space-y-2'>
        <h2 className='text-2xl font-semibold'>Good morning blessing 🌤️</h2>
        <p className='text-gray-600'>Checkout the dashboard summary</p>
      </div>

      <div className='my-5'>
        <Tab />
      </div>

      <AreaCharts graphDatas={graphData} />
      <div className='mt-10 flex flex-wrap justify-between sm:flex-nowrap'>
        <DonutCharts title='Top Locations' />
        <TopSources title='Top Referral source' />
      </div>
    </div>
  );
};

export default Dashboard;
