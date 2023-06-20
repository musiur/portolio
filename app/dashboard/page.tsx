"use client";

import DashboardNav from "@/components/base/DashboardNav";
import { UserContext } from "@/contexts/UserProvider";
import PrivateRoute from "@/routes/PrivateRoute";
import { faMailchimp } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDay,
  faEnvelope,
  faJoint,
  faMailBulk,
  faMessage,
  faPortrait,
  faRouble,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <PrivateRoute>
      <div className="gap-5">
        <DashboardNav />
        <div className="p-5 md:p-10">
          <h6>Welcome {user.name}!</h6>
          <div className="py-10">
            <p className="flex items-center justify-start gap-3">
              <FontAwesomeIcon icon={faEnvelope} />
              {user.email}
            </p>
            <p className="flex items-center justify-start gap-3">
              <FontAwesomeIcon icon={faUser} />
              Account {user.verified ? "verified" : "not verified"}
            </p>
            <p className="flex items-center justify-start gap-3">
              <FontAwesomeIcon icon={faCalendarDay} />
              {user.createdAt.split("T")[0]}
            </p>
            <p className="flex items-center justify-start gap-3">
              <FontAwesomeIcon icon={faPortrait} />
              Your role is {user.role}
            </p>
          </div>
          <div className="pb-10 flex items-center justify-start gap-5 lg:gap-10">
            {!user.verified ? (
              <button className="btn-primary">Verifiy your account</button>
            ) : null}
            <button className="btn-error">Delete your account!</button>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
