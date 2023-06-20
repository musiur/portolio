'use client'

import DashboardNav from "@/components/base/DashboardNav";
import PrivateRoute from "@/routes/PrivateRoute";
import { useEffect } from "react";

const Users = () => {
  useEffect(() => {
    localStorage.setItem("from", "/dashboard/users");
  }, [])
  return (
    <PrivateRoute>
      <div>
        <DashboardNav />
        <div className="p-5 md:p-10">Users</div>
      </div>
    </PrivateRoute>
  );
};

export default Users;
