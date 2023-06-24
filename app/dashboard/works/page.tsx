'use client'

import DashboardNav from "@/components/base/DashboardNav";
import Edit from "@/components/pages/dashboard/works/Edit";
import Read from "@/components/pages/dashboard/works/Read";
import PrivateRoute from "@/routes/PrivateRoute";
import { useEffect, useState } from "react";

const Works = () => {
  useEffect(() => {
    localStorage.setItem("from", "/dashboard/works");
  }, []);
   const [edit, setEdit] = useState(false);
  return (
    <PrivateRoute>
      <div>
        <DashboardNav />
        <div className="p-5 md:p-10">
          {
            !edit ? <Read /> : <Edit />
          }
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Works;
