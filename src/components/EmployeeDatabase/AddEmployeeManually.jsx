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

    console.log(employeeFormData)

  let handleSubmit = () => {
    setEmployeeMode("view");

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/userprofile/me/`,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(employeeFormData),
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
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
              <input onSelectCapture={() => setEmployeeFormData({...employeeFormData, gender: "male"})} type="radio" name="gender" id="male" value={"Male"} />
              <label htmlFor="male" className="font-semibold text-sm p-1">
                Male
              </label>
            </div>
            <div className="flex items-center">
              <input onSelect={(e) => setEmployeeFormData({...employeeFormData, gender: "female"}) } type="radio" name="gender" id="female" value={"Female"} />
              <label htmlFor="female" className="font-semibold text-sm p-1">
                Female
              </label>
            </div>
            <div className="flex items-center">
              <input onSelect={(e) => setEmployeeFormData({...employeeFormData, gender: "others"}) } type="radio" name="gender" value={"Others"} id="others" />
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
            <Input2 label="Role" placeholder="Admin"           onChange={(e) =>
            setEmployeeFormData({ ...employeeFormData, cohesive_role: e.target.value })
          } />
            <Input2
              label="Date of Birth"
              placeholder="MM/DD/YYYY"
              onChange={(e) =>
                setEmployeeFormData({ ...employeeFormData, dob: e.target.value })
              }
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
              onChange={(e) =>
                setEmployeeFormData({ ...employeeFormData, phone_number: e.target.value })
              }
            />
          </div>
          <div className="flex items-center gap-5">
            <Input2
              label="Employee ID"
              placeholder="eg: AB34C56"
              onChange={(e) =>
                setEmployeeFormData({ ...employeeFormData, employee_id: e.target.value })
              }
            />
            <Input2 label="Company Name" placeholder="Company Name"           onChange={(e) =>
            setEmployeeFormData({ ...employeeFormData, company_name: e.target.value })
          } />
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
              placeholder="Manager ID"
              onChange={(e) =>
                setEmployeeFormData({ ...employeeFormData, manager: e.target.value })
              }
            />
          </div>
          <div className="flex items-center gap-5">
            <Input2
              label="Position"
              placeholder="Employee Position"
              onChange={(e) =>
                setEmployeeFormData({ ...employeeFormData, position: e.target.value })
              }
            />
            <Input2
              label="Date of Joining"
              placeholder="MM/DD/YYYY"
              onChange={(e) =>
                setEmployeeFormData({ ...employeeFormData, doj: e.target.value })
              }
            />
          </div>
          <div className="flex items-center gap-5">
            <Input2
              label="User Name"
              placeholder="User Name"
              onChange={(e) =>
                setEmployeeFormData({ ...employeeFormData, cohesive_user_name: e.target.value })
              }
            />
            <Input2
              label="User ID"
              placeholder="User ID"
              onChange={(e) =>
                setEmployeeFormData({ ...employeeFormData, cohesive_user_id: e.target.value })
              }
            />
          </div>
          <div className="flex items-center gap-5">
            <Input2
              label="Workspace Name"
              placeholder="Workspace Name"
              onChange={(e) =>
                setEmployeeFormData({ ...employeeFormData, cohesive_workspace_name: e.target.value })
              }
            />
            <Input2
              label="Workspace ID"
              placeholder="Workspace ID"
              onChange={(e) =>
                setEmployeeFormData({ ...employeeFormData, cohesive_workspace_id: e.target.value })
              }
            />
          </div>
        </section>
        <hr />
        {/* <section>
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
        </section> */}

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
