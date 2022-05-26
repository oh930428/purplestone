import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  ChartProps,
  ChartOptionProps,
  ChartStyleProps,
} from 'types/doughnut.type';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutSection = ({ id, labels, datasets }: ChartProps) => {
  const data: ChartProps = {
    id: id,
    labels: labels,
    datasets: datasets,
  };

  const styles: ChartStyleProps = {
    width: '500px',
    height: '350px',
  };

  const options: ChartOptionProps = {
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 5,
        right: 15,
        bottom: 5,
        left: 15,
      },
    },
    plugins: {
      legend: {
        display: true,
        align: 'center',
        position: 'right',
        labels: {
          boxWidth: 10,
          font: {
            size: 12,
            family: 'Noto Sans CJK KR',
            lineHeight: 14,
            weight: 'bold',
          },
        },
      },
    },
  };

  return (
    <>
      <Doughnut data={data} style={styles} options={options} />
    </>
  );
};
