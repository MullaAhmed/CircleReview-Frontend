import fetchCreateClone from "@/utils/fetchCreateClone";
import fetchDownloadCSV from "@/utils/fetchDownloadCSV";
import React from "react";

const Dropdown = () => {
  return (
    <div>
      <select className="text-xs" name="options" id="options">
        <option value={"Select an option"} defaultValue={"Select an Option"}>
          Select an option
        </option>
        <option onSelect={fetchCreateClone()} value="clone">
          Clone
        </option>
        <option value="send">Send Reminders</option>
        <option onSelect={fetchDownloadCSV} value="download">
          Download as .CSV
        </option>
        <option value="unpublish">Unpublish</option>
        <option value="end-survey">End Survey</option>
      </select>
    </div>
  );
};

export default Dropdown;
