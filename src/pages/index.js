import { useEffect, useContext } from "react";

import Sidebar from "@/components/Sidebar";
import SurveyList from "@/components/Home/SurveyList/SurveyList";
import CreateNewSurvey from "@/components/Home/CreateSurvey/CreateNewSurvey";
import AppContext from "@/AppContext";

import fetchSurveyList from "@/utils/fetchSurveyList";
import fetchEmployeeList from "@/utils/fetchEmployeeList";
import { getUserData } from "public/scripts/sdk-client";
import Head from "next/head";
// import fetchEmployeeDetails from '@/utils/fetchEmployeeDetails';
// Fetching data from the JSON file
async function getAllDetails() {
  let employeeDetails = await getUserData();
  console.log(employeeDetails);
  return {
    surveyData: await fetchSurveyList("Cohesive"),
    employeeData: await fetchEmployeeList("Cohesive"),
  };
}

export default function Intermediary() {
  const { employeeData, setEmployeeData, surveyData, setSurveyData } =
    useContext(AppContext);

  useEffect(() => {
    console.log("hey there");
    getAllDetails()
      .then((data) => {
        setEmployeeData(data.employeeData);
        setSurveyData(data.surveyData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
