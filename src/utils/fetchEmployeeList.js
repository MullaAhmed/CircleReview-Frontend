import { getAxios } from "../../public/scripts/sdk-client";

export default async function fetchEmployeeList(company) {
  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: process.env.NEXT_PUBLIC_BACKEND_URL + "/api/userprofile/all/",
  };

  let Axios = getAxios();

  return Axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
