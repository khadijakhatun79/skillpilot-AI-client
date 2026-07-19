export default function ProgressChart() {
  const chartData = [
    { day: 'Mon', hours: 2.5, height: 'h-[40%]' },
    { day: 'Tue', hours: 3.8, height: 'h-[70%]' },
    { day: 'Wed', hours: 1.2, height: 'h-[25%]' },
    { day: 'Thu', hours: 4.5, height: 'h-[85%]' },
    { day: 'Fri', hours: 2.0, height: 'h-[35%]' },
    { day: 'Sat', hours: 5.0, height: 'h-[95%]' },
    { day: 'Sun', hours: 3.0, height: 'h-[50%]' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Learning Hours</h3>
          <p className="text-sm text-gray-500">This Week</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-indigo-600">22.0</p>
          <p className="text-sm text-gray-500">Total Hours</p>
        </div>
      </div>

      {/* CSS Bar Chart */}
      <div className="h-48 flex items-end justify-between space-x-2">
        {chartData.map((data, idx) => (
          <div key={idx} className="w-full flex flex-col items-center group cursor-pointer h-full justify-end">
            <div className="relative w-full flex justify-center h-full items-end">
              {/* Tooltip */}
              <div className="absolute -top-10 bg-gray-900 text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                {data.hours} hrs
              </div>
              {/* Bar */}
              <div className={`w-full max-w-[3rem] ${data.height} bg-indigo-100 group-hover:bg-indigo-600 rounded-t-md transition-colors duration-300 relative`}>
                <div className={`absolute bottom-0 w-full ${data.height} bg-indigo-500 rounded-t-md opacity-20`}></div>
              </div>
            </div>
            <span className="text-xs text-gray-500 mt-3 font-medium">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
