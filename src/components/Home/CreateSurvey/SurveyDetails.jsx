import Image from "next/image";
import AppContext from "@/AppContext";
import { useContext } from "react";

let Input = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col justify-around h-20">
      <p>{label}</p>

      <div className="flex items-center w-96 border border-gray-300 h-10 rounded-md">
        <Image
          className="ml-4 mr-2"
          src="/survey-details-input-icon.svg"
          width={13.5}
          height={13.5}
        />
        <input
          className="h-8 focus:outline-none"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

let SurveyDetails = () => {
  const { surveyFormData, setSurveyFormData } = useContext(AppContext);

  return (
    <div className="flex flex-col pl-12 mt-6 w-full gap-4">
      <Input
        label="Name your Survey"
        placeholder="Enter Survey Name"
        value={surveyFormData.survey_name || ""}
        onChange={(e) =>
          setSurveyFormData((prev) => {
            return { ...prev, survey_name: e.target.value };
          })
        }
      />

      <Input
        label="Enter Team"
        placeholder="Enter Team Name"
        value={surveyFormData.team || ""}
        onChange={(e) =>
          setSurveyFormData((prev) => {
            return { ...prev, team: e.target.value };
          })
        }
      />
    </div>
  );
};

export default SurveyDetails;
