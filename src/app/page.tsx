'use client';

import {useState, useEffect, useMemo} from 'react';
import MainService from '@/service/common/main-service';
import {Line} from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);

const Dashboard = () => {
  const [data, setData] = useState({
    monthlyData: Array.from({length: 12}, (_, i) => ({reserveMonth: (i + 1).toString().padStart(2, '0'), sumPrice: 0})),
    orderStateData: [
      {orderStateCount: 0, orderStateCode: '예약중'},
      {orderStateCount: 0, orderStateCode: '예약취소'},
      {orderStateCount: 0, orderStateCode: '결제취소'},
      {orderStateCount: 0, orderStateCode: '결제완료'},
    ],
    totalPrice: 0,
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await MainService.dashboard({});
        setData({
          totalPrice: res.totalPrice,
          monthlyData: res.monthlyData,
          orderStateData: res.orderStateData,
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchDashboard();
  }, []);

  const getStateCount = (orderStateCode) => {
    const state = data.orderStateData.find((item) => item.orderStateCode === orderStateCode);
    return state ? state.orderStateCount : 0;
  };

  const chartData = useMemo(() => {
    return {
      labels: data.monthlyData.map((d) => d.reserveMonth),
      datasets: [
        {
          label: '매출',
          data: data.monthlyData.map((d) => d.sumPrice),
          borderColor: '#9f7aea',
          backgroundColor: 'rgba(159, 122, 234, 0.5)',
          fill: true,
        },
      ],
    };
  }, [data.monthlyData]);

  return (
    <>
      <div id="main">
        <ul className="orderState">
          {['예약중', '예약취소', '결제취소', '결제완료'].map((state) => (
            <li key={state} className={state}>
              <p className="codeName">{state}</p>
              <p className="count">{getStateCount(state)}</p>
            </li>
          ))}
        </ul>
        <div style={{width: '100%', padding: '10px 0 20px 0', overflow: 'auto'}}>
          <Line data={chartData} options={{responsive: true, maintainAspectRatio: false}}/>
        </div>
        <div className="totalPrice">총 매출: {data.totalPrice}</div>
      </div>
    </>
  );
};

export default Dashboard;
