"use client";

import PrivateRoute from "@/routes/PrivateRoute";

const Dashboard = () => {
  return (
    <PrivateRoute>
      <section className="container mx-auto">Dashboard</section>
    </PrivateRoute>
  );
};

export default Dashboard;
