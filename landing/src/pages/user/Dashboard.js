import React from "react";
import UserMenu from "../../Components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import Layout from "../../Components/Layout/Layout";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - BidHub"}>
      <h1>Dashboard Page</h1>
      {
        <div className="container-flui m-3 p-3 dashboard">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9">
              <div className="card w-75 p-3">
                <h3>{auth?.user?.name}</h3>
                <h3>{auth?.user?.email}</h3>
              </div>
            </div>
          </div>
        </div>
      }
    </Layout>
  );
};

export default Dashboard;