import React from 'react';

export default function InterventionList({ interventions }) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-medium text-gray-900">Technical Interventions</h2>
      <div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Technician</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {interventions.map((intervention) => (
              <tr key={intervention.id}>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{intervention.id}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{intervention.date}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{intervention.status}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{intervention.technicianId}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{intervention.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}