import { currentTest, segmentationData } from '@/data/mockData';

export default function MetricsCards() {
  const { control, variant } = currentTest.variants;
  
  const metrics = [
    {
      title: 'Total Visitors',
      control: control.visitors,
      variant: variant.visitors,
      format: (val: number) => val.toLocaleString(),
      isGoodWhenHigher: true
    },
    {
      title: 'Conversions',
      control: control.conversions,
      variant: variant.conversions,
      format: (val: number) => val.toLocaleString(),
      isGoodWhenHigher: true
    },
    {
      title: 'Average Order Value',
      control: control.averageOrderValue,
      variant: variant.averageOrderValue,
      format: (val: number) => `$${val.toFixed(2)}`,
      isGoodWhenHigher: true
    },
    {
      title: 'Bounce Rate',
      control: control.bounceRate,
      variant: variant.bounceRate,
      format: (val: number) => `${val}%`,
      isGoodWhenHigher: false
    },
    {
      title: 'Time on Page',
      control: control.timeOnPage,
      variant: variant.timeOnPage,
      format: (val: number) => `${val}s`,
      isGoodWhenHigher: true
    },
    {
      title: 'Desktop Conversion',
      control: (segmentationData.byDevice.desktop.control.conversions / segmentationData.byDevice.desktop.control.visitors * 100),
      variant: (segmentationData.byDevice.desktop.variant.conversions / segmentationData.byDevice.desktop.variant.visitors * 100),
      format: (val: number) => `${val.toFixed(1)}%`,
      isGoodWhenHigher: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 "  >
      {metrics.map((metric, index) => {
        const difference = metric.variant - metric.control;
        const percentChange = (difference / metric.control) * 100;
        const isPositive = metric.isGoodWhenHigher ? difference > 0 : difference < 0;
        
        return (
          <div 
            key={metric.title} 
            className="bg-white border border-gray-600 rounded-lg p-5 shadow-md hover:shadow-md transition-all duration-300"
            style={{ backgroundColor: 'var(--beige-project)' }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <h3 className="text-sm font-semibold text-gray-800 font-mono">{metric.title}</h3>
              </div>
              <div className={`px-2 py-1 rounded-full text-sm font-mono font-medium ${
                isPositive 
                  ? 'bg-green-100 text-green-700' 
                  : Math.abs(percentChange) < 1 
                  ? 'bg-red-100 text-red-700'
                  : 'bg-gray-100 text-gray-600'
                     
              }`}>
                {percentChange > 0 ? '+' : ''}{percentChange.toFixed(1)}%
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Control</span>
                <span className="font-medium text-gray-700">{metric.format(metric.control)}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Variant</span>
                <span className={`font-medium ${
                  isPositive ? 'text-emerald-600' : Math.abs(percentChange) < 1 ? 'text-gray-700' : 'text-red-600'
                }`}>
                  {metric.format(metric.variant)}
                </span>
              </div>

              <div className="pt-2">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className={`h-1.5 rounded-full transition-all duration-1000 ${
                      isPositive ? 'bg-emerald-500' : Math.abs(percentChange) < 1 ? 'bg-gray-400' : 'bg-red-500'
                    }`}
                    style={{ 
                      width: `${Math.min(Math.abs(percentChange) * 10, 100)}%`,
                      minWidth: '8px'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}