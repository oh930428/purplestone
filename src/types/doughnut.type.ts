export interface ChartProps {
  id: number;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
    hoverOffset: number;
  }[];
}

export interface ChartOptionProps {
  maintainAspectRatio: boolean;
  layout: {
    padding: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
  };
  plugins: {
    legend: {
      display: boolean;
      align: 'start' | 'center' | 'end' | undefined;
      position: 'top' | 'left' | 'bottom' | 'right' | 'chartArea' | undefined;
      labels: {
        boxWidth: number;
        font: {
          size: number;
          family: string;
          lineHeight: number;
          weight: string;
        };
      };
    };
  };
}
