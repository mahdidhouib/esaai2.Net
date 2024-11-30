import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ComplaintForm from './components/complaints/ComplaintForm';
import InterventionList from './components/interventions/InterventionList';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ClientDashboard from './components/dashboard/ClientDashboard';
import SAVDashboard from './components/dashboard/SAVDashboard';
import useAuthStore from './store/authStore';

function App() {
  const { user, userType, logout } = useAuthStore();

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-gray-900">SAV Management</h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link to="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                    Home
                  </Link>
                  {user && (
                    <>
                      {userType === 'client' && (
                        <Link to="/complaints/new" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                          New Complaint
                        </Link>
                      )}
                      {userType === 'staff' && (
                        <Link to="/interventions" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                          Interventions
                        </Link>
                      )}
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                {!user ? (
                  <div className="space-x-4">
                    <Link to="/login/client" className="text-gray-900 hover:text-gray-700">
                      Client Login
                    </Link>
                    <Link to="/login/staff" className="text-gray-900 hover:text-gray-700">
                      Staff Login
                    </Link>
                  </div>
                ) : (
                  <button
                    onClick={logout}
                    className="text-gray-900 hover:text-gray-700"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">Welcome to SAV Management System</h2>
                <p className="mt-4 text-gray-600">Manage customer complaints and technical interventions efficiently</p>
                {!user && (
                  <div className="mt-8 space-x-4">
                    <Link
                      to="/signup/client"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Sign Up as Client
                    </Link>
                    <Link
                      to="/signup/staff"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      Sign Up as Staff
                    </Link>
                  </div>
                )}
              </div>
            } />
            <Route path="/login/client" element={<LoginForm userType="client" />} />
            <Route path="/login/staff" element={<LoginForm userType="staff" />} />
            <Route path="/signup/client" element={<SignUpForm userType="client" />} />
            <Route path="/signup/staff" element={<SignUpForm userType="staff" />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedUserTypes={['client']}>
                  <ClientDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sav-dashboard"
              element={
                <ProtectedRoute allowedUserTypes={['staff']}>
                  <SAVDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/complaints/new"
              element={
                <ProtectedRoute allowedUserTypes={['client']}>
                  <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit New Complaint</h2>
                    <ComplaintForm onSubmit={(data) => console.log('New complaint:', data)} />
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/interventions"
              element={
                <ProtectedRoute allowedUserTypes={['staff']}>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Interventions</h2>
                    <InterventionList interventions={[]} />
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;