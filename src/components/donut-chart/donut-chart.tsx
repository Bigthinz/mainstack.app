import { Card, DonutChart, Title } from '@tremor/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlagIcon } from 'react-flag-kit';

const cities = [
  {
    name: 'New York',
    sales: 9800,
  },
  {
    name: 'London',
    sales: 4567,
  },
  {
    name: 'Hong Kong',
    sales: 3908,
  },
  {
    name: 'San Francisco',
    sales: 2400,
  },
  {
    name: 'Singapore',
    sales: 1908,
  },
  {
    name: 'Zurich',
    sales: 1398,
  },
];

const getData = async () => {
  const data = await axios.get('https://fe-task-api.mainstack.io/');
  console.log(data);
};

getData();

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat('us').format(number).toString()}`;

const DonutCharts = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const locations = [
    { code: 'NG', name: 'Nigeria', percentage: 50 },
    { code: 'US', name: 'United States', percentage: 20 },
    { code: 'GB', name: 'United Kingdom', percentage: 15 },
    { code: 'IN', name: 'India', percentage: 10 },
    { code: 'FR', name: 'France', percentage: 5 },
  ];

  const valueFormatter = (value) => `${value}%`;

  return (
    <Card className='max-w-lg'>
      <Title>Top Locations</Title>
      <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-6`}>
        <div>
          <div className='mt-5 space-y-3'>
            {locations.map((location, index) => (
              <div key={index} className='flex items-center space-x-2'>
                <FlagIcon code={location.code} size={20} />
                <span>{location.name}</span>
                <span>{valueFormatter(location.percentage)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-6'>
          <DonutChart
            data={cities}
            category='sales'
            index='name'
            valueFormatter={valueFormatter}
            colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
          />
        </div>
      </div>
    </Card>
  );
};

export default DonutCharts;
