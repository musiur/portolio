'use client'

import DashboardNav from "@/components/base/DashboardNav";
import PrivateRoute from "@/routes/PrivateRoute";
import { useEffect } from "react";

const Articles = () => {
  useEffect(() => {
    localStorage.setItem("from", "/dashboard/articles");
  }, [])
  return (
    <PrivateRoute>
      <div>
        <DashboardNav />
        <div className="p-5 md:p-10">Articles</div>
      </div>
    </PrivateRoute>
  );
};

export default Articles;
