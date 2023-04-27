import { AreaChart, Card, Title } from '@tremor/react';

// const chartdata = [
//   {
//     date: 'Jan 22',
//     SemiAnalysis: 2890,
//     'The Pragmatic Engineer': 2338,
//   },
//   {
//     date: 'Feb 22',
//     SemiAnalysis: 2756,
//     'The Pragmatic Engineer': 2103,
//   },
//   {
//     date: 'Mar 22',
//     SemiAnalysis: 3322,
//     'The Pragmatic Engineer': 2194,
//   },
//   {
//     date: 'Apr 22',
//     SemiAnalysis: 3470,
//     'The Pragmatic Engineer': 2108,
//   },
//   {
//     date: 'May 22',
//     SemiAnalysis: 3475,
//     'The Pragmatic Engineer': 1812,
//   },
//   {
//     date: 'Jun 22',
//     SemiAnalysis: 3129,
//     'The Pragmatic Engineer': 1726,
//   },
// ];

const AreaCharts = ({ graphDatas }: { graphDatas: any }) => {
  // console.log(graphDatas);
  const graphData: any = {
    views: {
      '2022-07-31': 1,
      '2022-08-01': 3,
      '2022-08-02': 3,
      '2022-08-03': 7,
      '2022-08-04': 8,
      '2022-08-05': 5,
      '2022-08-06': 20,
      '2022-08-07': 50,
      '2022-08-08': 100,
      '2022-08-09': 2,
    },
  };

  const chartdata = Object.keys(graphData.views).map((dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const formattedDate = `${day} ${month}`;
    return {
      date: formattedDate,
      SemiAnalysis: graphData.views[dateString],
    };
  });

  const dataFormatter = (number: number) => {
    return '$ ' + Intl.NumberFormat('us').format(number).toString();
  };
  return (
    <Card>
      <div className='space-y-2'>
        <Title className='font-semibold'>Page views</Title>
        <p>All time</p>
        <h2 className='h1 mt-16'>500</h2>
      </div>
      <AreaChart
        className='mt-4 h-72'
        data={chartdata}
        index='date'
        categories={['SemiAnalysis']}
        colors={['orange']}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
};

export default AreaCharts;
