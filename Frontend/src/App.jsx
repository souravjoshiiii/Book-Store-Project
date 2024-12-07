import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';
import Home from './home/Home';
import Signup from './components/Signup';
import { useAuth } from './context/AuthProvider'; // Ensure this is correctly imported
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [authUser] = useAuth(); // Ensure useAuth is properly set up
  
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;


