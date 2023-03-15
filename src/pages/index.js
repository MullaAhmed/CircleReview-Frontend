import { useEffect, useContext, useState } from "react";
import axios from "axios";

import Sidebar from "@/components/Sidebar";
import SurveyList from "@/components/Home/SurveyList/SurveyList";
import CreateNewSurvey from "@/components/Home/CreateSurvey/CreateNewSurvey";
import AppContext from "@/AppContext";

import fetchSurveyList from "@/utils/fetchSurveyList";
import fetchEmployeeList from "@/utils/fetchEmployeeList";
import { getToken, getUserData } from "public/scripts/sdk-client";
import Head from "next/head";
import fetchFeedbackList from "@/utils/fetchFeedbackList";
import { fetchSurvey } from "@/utils/fetchSurvey";
// import fetchEmployeeDetails from '@/utils/fetchEmployeeDetails';
// Fetching data from the JSON file


async function getAllDetails() {
  let token = await getToken();
  console.log(token.JWTToken)
  localStorage.setItem("token", token.JWTToken);
  let employeeDetails = await getUserData();
  console.log(employeeDetails);
  if (employeeDetails.role == "HR") {
    return {
      surveyData: await fetchSurveyList("Cohesive"),
      employeeData: await fetchEmployeeList("Cohesive"),
    };
  } else {
    console.log("manager");
    // getData();
    console.log(await fetchSurvey())
    return {
      // surveyData: await fetchFeedbackList(2),
      surveyData: await fetchSurvey(),
      employeeData: await fetchEmployeeList(
        employeeDetails.workspace_name + "_" + employeeDetails.workspace_id
      ),
    };
  }
}

export default function Intermediary() {
  const {
    employeeData,
    setEmployeeData,
    surveyData,
    setSurveyData,
    reload,
    setReload,
  } = useContext(AppContext);

  useEffect(() => {
    console.log("hey there");
    console.log("Survey Data" + surveyData);
    getAllDetails()
      .then((data) => {
        // console.log(data.surveyData)
        // if(data)
        setEmployeeData(data.employeeData);
        setSurveyData(data.surveyData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  // setReload(false);
  // console.log(reload)

  if (surveyData && employeeData) {
    return <Home></Home>;
  }
  return <div>Loading</div>;
}

function Home() {
  <Head>
    <title>Circle Review</title>
  </Head>;
  const { surveyMode } = useContext(AppContext);
  return (
    <div className="flex flex-row w-screen overflow-x-hidden">
      <Sidebar />
      {surveyMode === "view" ? <SurveyList /> : <CreateNewSurvey />}
    </div>
  );
}
