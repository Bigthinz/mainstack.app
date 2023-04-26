import { Card, DonutChart, Title } from '@tremor/react';
import axios from 'axios';
import countryLookup from 'country-code-lookup';
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

  const topLocations = [
    {
      country: 'Nigeria',
      count: 68,
      percent: 34,
    },
    {
      country: 'Germany',
      count: 37,
      percent: 19,
    },
    {
      country: 'Ghana',
      count: 50,
      percent: 25,
    },
    {
      country: 'Finland',
      count: 40,
      percent: 20,
    },
    {
      country: 'United Kingdom',
      count: 4,
      percent: 2,
    },
  ];

  const locationsWithCodes = topLocations.map((location) => {
    const countryCode = countryLookup.byCountry(location.country)?.iso2;
    return {
      ...location,
      code: countryCode,
    };
  });

  const valueFormatter = (value) => `${value}`;
  const colors = [
    '#6B7280',
    '#8B5CF6',
    '#6366F1',
    '#EC4899',
    '#22D3EE',
    '#F59E0B',
  ];
  return (
    <Card className='max-w-lg'>
      <Title>Top Locations</Title>
      <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-6`}>
        <div>
          <div className='mt-5 space-y-3'>
            {locationsWithCodes.map((location, index) => (
              <div key={index} className='flex items-center space-x-2'>
                <FlagIcon code={location.code} size={20} />
                <span>{location.country}</span>
                <span>{valueFormatter(location.percent)}</span>
                <span className='inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 '>
                  <svg
                    className='h-2 w-2'
                    viewBox='0 0 6 6'
                    fill={colors[index]}
                    aria-hidden='true'
                  >
                    <circle cx={3} cy={3} r={3} />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-6'>
          <DonutChart
            data={topLocations}
            category='percent'
            index='country'
            showLabel={false}
            valueFormatter={valueFormatter}
            colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
          />
        </div>
      </div>
    </Card>
  );
};

export default DonutCharts;
