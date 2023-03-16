import AppContext from "@/AppContext";
import { fetchReport } from "@/utils/fetchReport";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const page = () => {
  // const router = useRouter();
  const { query, isReady } = useRouter();

  const {setSurveyQuestions, surveyQuestions} = useContext(AppContext)

  if (!isReady) return null;


  React.useEffect(() => {
    const getData = async() => {
      const response = await fetchReport(query.id)
      setSurveyQuestions(response.questions_answers)

    }
    getData()
  },[])

  return <div>{surveyQuestions.map(question => (
    <div>
      <p>{question.question}</p>
    </div>
  ))}</div>;
};

export default page;
