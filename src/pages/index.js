import { useEffect, useContext } from "react";
import axios from "axios";

import Sidebar from "@/components/Sidebar";
import SurveyList from "@/components/Home/SurveyList/SurveyList";
import CreateNewSurvey from "@/components/Home/CreateSurvey/CreateNewSurvey";
import AppContext from "@/AppContext";

import fetchSurveyList from "@/utils/fetchSurveyList";
import fetchEmployeeList from "@/utils/fetchEmployeeList";
import { getToken, getUserData } from "public/scripts/sdk-client";
import Head from "next/head";
// import fetchEmployeeDetails from '@/utils/fetchEmployeeDetails';
// Fetching data from the JSON file

let survey;

const getData = async() => {
  const data = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/feedback/all/2/`,{
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  // console.log(data.data[0].form_id)
  if(data.data[0]){
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/feedbackform/${data.data[0].form_id}/`,{
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    console.log(response.data)
    survey = response.data
  }
}

async function getAllDetails() {
  let token = await getToken()
  // console.log(token.JWTToken)
  localStorage.setItem('token', token.JWTToken)
  let employeeDetails = await getUserData();
  // console.log(employeeDetails);
  if(employeeDetails.role == "HR"){
    return {
      surveyData: await fetchSurveyList("Cohesive"),
      employeeData: await fetchEmployeeList("Cohesive"),
    };
  }else{
    console.log('manager')
    getData()
    return{
      surveyData: survey,
      employeeData: await fetchEmployeeList("Cohesive"), 
    }
  }
}

export default function Intermediary() {
  const { employeeData, setEmployeeData, surveyData, setSurveyData, reload, setReload } =
    useContext(AppContext);

  useEffect(() => {
    console.log("hey there");
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

  setReload(false)
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
