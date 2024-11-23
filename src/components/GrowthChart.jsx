function GrowthChart() {
  return (
    <div>
      <h3 className="text-lg font-bold text-center mb-4">Our Growth Chart</h3>
      <div className="grid grid-cols-2 xm:grid-cols-3 lg:grid-cols-5 gap-y-8 text-sm sm:text-base text-center">
        <div>
          <div className="text-4xl xm:text-5xl sm:text-7xl font-semibold mb-1 text-[#24A9B2]">
            10K+
          </div>
          <p>Certified Students</p>
        </div>
        <div>
          <div className="text-4xl xm:text-5xl sm:text-7xl font-semibold mb-1 text-[#24A9B2]">
            20+
          </div>
          <p>Corporate Trainers</p>
        </div>
        <div>
          <div className="text-4xl xm:text-5xl sm:text-7xl font-semibold mb-1 text-[#24A9B2]">
            199+
          </div>
          <p>Companies</p>
        </div>
        <div>
          <div className="text-4xl xm:text-5xl sm:text-7xl font-semibold mb-1 text-[#24A9B2]">
            1K+
          </div>
          <p>Students Placement</p>
        </div>
        <div>
          <div className="text-4xl xm:text-5xl sm:text-7xl font-semibold mb-1 text-[#24A9B2]">
            100%
          </div>
          <p>Placement Support</p>
        </div>
      </div>
    </div>
  );
}

export default GrowthChart;
