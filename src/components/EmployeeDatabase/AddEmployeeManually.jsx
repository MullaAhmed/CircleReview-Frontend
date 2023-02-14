import AppContext from "@/AppContext";
import { useContext } from "react";

import axios from "axios";

let Input = ({ label, placeholder, onChange }) => {
  return (
    <div className="flex flex-col justify-around h-20">
      <p>{label}</p>

      <div className="flex items-center text-sm w-[400px] border border-gray-300 h-10 rounded-md">
        <input
          className="h-8 pl-2 focus:outline-none"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
let Input2 = ({ label, placeholder, onChange }) => {
  return (
    <div className="flex flex-col justify-around h-20">
      <p className="text-sm font-semibold">{label}</p>

      <div className="flex items-center -mt-2 text-sm w-full border border-gray-300 h-10 rounded-md">
        <input
          className="h-8 pl-2 focus:outline-none"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

let AddEmployeeManually = () => {
  const { employeeFormData, setEmployeeFormData, setEmployeeMode } =
    useContext(AppContext);

  let handleSubmit = () => {
    setEmployeeMode("view");

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://cohesive-backend.onrender.com/employee/userprofile/Cohesive/0/",
      headers: {
        "Content-Type": "text/plain",
      },
      data: JSON.stringify(employeeFormData),
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-75">
      <div
        className="fixed top-0 bottom-0 left-0 right-0 cursor-pointer"
        onClick={() => setEmployeeMode("view")}
      />
      <div className="fixed h-screen overflow-y-scroll scrollbar-none right-0 border border-gray-300 flex flex-col p-5 gap-4 bg-white">
        <Input
          label="Name"
          placeholder="Enter Employee Name"
          onChange={(e) =>
            setEmployeeFormData({ ...employeeFormData, name: e.target.value })
          }
        />

        <div>
          <p>Gender</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <input type="radio" name="gender" id="male" value={"Male"} />
              <label htmlFor="male" className="font-semibold text-sm p-1">
                Male
              </label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="gender" id="female" value={"Female"} />
              <label htmlFor="female" className="font-semibold text-sm p-1">
                Female
              </label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="gender" value={"Others"} id="others" />
              <label htmlFor="others" className="font-semibold text-sm p-1">
                Others
              </label>
            </div>
          </div>
        </div>

        <hr />

        <section>
          <h1 className="mb-5">Personal Details</h1>

          <div className="flex items-center gap-5">
            <Input2 label="Role" placeholder="Admin" onChange={""} />
            <Input2
              label="Date of Birth"
              placeholder="MM/DD/YYYY"
              onChange={""}
            />
          </div>
          <div className="flex items-center gap-5">
            <Input2
              label="Work Email"
              placeholder="name@example.com"
              onChange={(e) =>
                setEmployeeFormData({
                  ...employeeFormData,
                  email: e.target.value,
                })
              }
            />
            <Input2
              label="Phone Number"
              placeholder="10 digit phone number"
              onChange={""}
            />
          </div>
          <div className="flex items-center gap-5">
            <Input2
              label="Employee ID"
              placeholder="eg: AB34C56"
              onChange={""}
            />
            <Input2 label="Miscellaneous" placeholder="Misc" onChange={""} />
          </div>
        </section>
        <hr />
        <section>
          <h1 className="mb-5">Work Details</h1>
          <div className="flex items-center gap-5">
            <Input2
              label="Team"
              placeholder="Team Name"
              onChange={(e) =>
                setEmployeeFormData({
                  ...employeeFormData,
                  team_name: e.target.value,
                })
              }
            />
            <Input2
              label="Reporting Manager"
              placeholder="Manager Name"
              onChange={""}
            />
          </div>
          <div className="flex items-center gap-5">
            <Input2
              label="Designation"
              placeholder="Employee Designation"
              onChange={""}
            />
            <Input2
              label="Date of Joining"
              placeholder="MM/DD/YYYY"
              onChange={""}
            />
          </div>
        </section>
        <hr />
        <section>
          <h1 className="mb-5">Peer Details</h1>
          <div className="flex items-center gap-5">
            <Input2 label="Peers" placeholder="Peer Name" onChange={""} />
            <Input2
              label="Direct Reports"
              placeholder="Reporting Manager"
              onChange={""}
            />
          </div>
          <div className="flex items-center gap-5">
            <Input2
              label="Cross Functional"
              placeholder="Placeholder"
              onChange={""}
            />
          </div>
        </section>

        {/* <Input
          label="Work Email"
          placeholder="name@example.com"
          onChange={(e) =>
            setEmployeeFormData({ ...employeeFormData, email: e.target.value })
          }
        />

        <Input
          label="Team"
          placeholder="Enter Team Name"
          onChange={(e) =>
            setEmployeeFormData({
              ...employeeFormData,
              team_name: e.target.value,
            })
          }
        />

        <Input
          label="Department"
          placeholder="Enter Department Name"
          onChange={(e) =>
            setEmployeeFormData({
              ...employeeFormData,
              dept_name: e.target.value,
            })
          }
        />

        <Input
          label="Position"
          placeholder="Enter Position"
          onChange={(e) =>
            setEmployeeFormData({
              ...employeeFormData,
              position: e.target.value,
            })
          }
        /> */}

        <div className="flex w-full justify-end items-center gap-5">
          <button
            className="px-4 py-2  bg-white border border-black rounded-md"
            onClick={handleSubmit}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2  bg-blue-500  text-white rounded-md"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeManually;
