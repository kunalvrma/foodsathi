import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './ContributionsN.css';

const ContributionsN = ({ donationHistory = [] }) => {
  const totalContributions = donationHistory.length;
  const completed = donationHistory.filter(d => d.status === 'Completed').length;
  const pending = donationHistory.filter(d => d.status === 'Pending').length;

  const analyticsData = useMemo(() => ({
    labels: ['Completed', 'Pending'],
    datasets: [
      {
        label: 'Donations Summary',
        data: [completed, pending],
        backgroundColor: ['#34d399', '#fbbf24'],
        borderRadius: 8,
      },
    ],
  }), [completed, pending]);

  return (
    <div className="contributions-container px-4 md:px-10 py-6">
      <h1 className="text-3xl font-bold text-center text-[#003366] mb-8">My Contributions</h1>

      <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
        {/* Stats */}
        <div className="stats-box bg-white shadow-lg rounded-xl p-6 w-full md:w-1/3">
          <p className="text-lg"><strong>Total Contributions:</strong> {totalContributions}</p>
          <p className="text-lg"><strong>Completed:</strong> {completed}</p>
          <p className="text-lg"><strong>Pending:</strong> {pending}</p>
        </div>

        {/* Bar Chart */}
        <div className="analytics-chart bg-white shadow-lg rounded-xl p-4 w-full md:w-2/3">
          <Bar
            data={analyticsData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'bottom' },
                title: { display: true, text: 'Donation Status Overview', font: { size: 18 } },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    stepSize: 1,
                  },
                },
              },
            }}
          />
        </div>
      </div>

      {/* Contribution Table */}
      <div className="table-wrapper overflow-x-auto bg-white shadow-md rounded-xl p-6">
        {donationHistory.length === 0 ? (
          <p className="text-gray-500 text-center">No contributions found.</p>
        ) : (
          <table className="contribution-table w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="p-3">Date</th>
                <th className="p-3">Time</th>
                <th className="p-3">Donor</th>
                <th className="p-3">Receiver</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {donationHistory.map((donation, index) => (
                <tr key={donation.id || index} className="border-t">
                  <td className="p-3">{donation.date}</td>
                  <td className="p-3">{donation.time}</td>
                  <td className="p-3">{donation.donor}</td>
                  <td className="p-3">{donation.receiver}</td>
                  <td className={`p-3 font-medium ${donation.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {donation.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

ContributionsN.propTypes = {
  donationHistory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      donor: PropTypes.string.isRequired,
      receiver: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ),
};

export default ContributionsN;
