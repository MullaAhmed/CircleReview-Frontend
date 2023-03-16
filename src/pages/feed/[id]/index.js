import AppContext from "@/AppContext";
import Sidebar from "@/components/Sidebar";
import { fetchReport } from "@/utils/fetchReport";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const Page = () => {
  // const router = useRouter();
  const { query, isReady } = useRouter();

  const { setSurveyQuestions, surveyQuestions } = useContext(AppContext);

  if (!isReady) return null;

  React.useEffect(() => {
    const getData = async () => {
      const response = await fetchReport(query.id);

      setSurveyQuestions(response.questions_answers);
    };
    getData();
    console.log(surveyQuestions);
  }, []);

  return (
    <div className="flex flex-row w-screen overflow-x-hidden">
      <Sidebar />
      <div className="py-10 px-4">
        <p className="mb-8 text-xl font-semibold">Self Review</p>
        <div>
          {surveyQuestions.map((question, i) => (
            <div key={i}>
              <p className="my-5 font-semibold">Question {i + 1}</p>
              <p className="font-light mb-3">{question.question}</p>
              <textarea
                rows={6}
                cols={50}
                className={
                  "rounded-lg bg-gray-200 resize-none overflow-x-hidden focus:outline-none p-5 text-sm border border-gray-500"
                }
                placeholder={"Enter your answer..."}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
