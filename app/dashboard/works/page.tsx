'use client'

import DashboardNav from "@/components/base/DashboardNav";
import PrivateRoute from "@/routes/PrivateRoute";
import { useEffect } from "react";

const Works = () => {
  useEffect(() => {
    localStorage.setItem("from", "/dashboard/works");
  }, [])
  return (
    <PrivateRoute>
      <div>
        <DashboardNav />
        <div className="p-5 md:p-10">Works</div>
      </div>
    </PrivateRoute>
  );
};

export default Works;
