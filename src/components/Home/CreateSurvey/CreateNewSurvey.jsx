import SelectEmployees from "@/components/Tables/SelectEmployees";
import SurveyQuestions from "@/components/Home/CreateSurvey/SurveyQuestions";
import SurveyDetails from "@/components/Home/CreateSurvey/SurveyDetails";
import ProgressBar from "@/components/Home/CreateSurvey/utils/ProgressBar";
import Timeline from "@/components/Home/CreateSurvey/utils/TimeLine";
import Footer from "@/components/Home/CreateSurvey/utils/Footer";
import AddEmployeeManually from "@/components/EmployeeDatabase/AddEmployeeManually";
import AddEmployeeByCSV from "@/components/EmployeeDatabase/AddEmployeeByCSV";

import { useContext } from "react";
import AppContext from "@/AppContext";

let CreateNewSurvey = () => {
  const { progress, employeeMode } = useContext(AppContext);

  return (
    <div className="flex-auto flex flex-col justify-between relative pt-8">
      <div>
        <ProgressBar
          marginXAuto={true}
          barColor="#31C48D"
          progress={progress}
          constant={100 / 7}
        />
        <p className="text-3xl font-bold mt-10 ml-10">Create New Survey</p>
        <Timeline w-full />
        <div className="h-2/3">
          {progress <= 4 && <SurveyQuestions />}
          {progress == 5 && (
            <>
              <SelectEmployees />
              {employeeMode === "add_manually" && <AddEmployeeManually />}
              {employeeMode === "add_by_csv" && <AddEmployeeByCSV />}
            </>
          )}
          {progress == 6 && <SurveyDetails />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateNewSurvey;
