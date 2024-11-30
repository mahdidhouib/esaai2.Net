import React, { useState } from 'react';
import useAuthStore from '../../store/authStore';

export default function ClientDashboard() {
  const user = useAuthStore((state) => state.user);
  const [formData, setFormData] = useState({
    productId: '',
    purchaseDate: '',
    description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement API call to submit complaint
    console.log('Complaint submitted:', formData);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome, {user.name}</h2>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Submit New Complaint</h3>
          <p className="mt-1 text-sm text-gray-500">Please provide details about your product issue</p>
        </div>
        
        <div className="border-t border-gray-200">
          <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6 space-y-6">
            <div>
              <label htmlFor="productId" className="block text-sm font-medium text-gray-700">
                Product Reference/ID
              </label>
              <input
                type="text"
                id="productId"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={formData.productId}
                onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700">
                Purchase Date
              </label>
              <input
                type="date"
                id="purchaseDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={formData.purchaseDate}
                onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Problem Description
              </label>
              <textarea
                id="description"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className="pt-5">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Complaint
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}