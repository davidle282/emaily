import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <Link
        style={{ position: "absolute", bottom: "50px" }}
        to="/surveys/new"
        className="btn-floating btn-large red"
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default Dashboard;
