import { getAxios } from "../../public/scripts/sdk-client";

export default async function fetchSurveyList(company) {
  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: process.env.NEXT_PUBLIC_BACKEND_URL + "/api/feedbackform/2/",
  };

  let Axios = getAxios();

  return Axios(config)
    .then(function (response) {
      // console.log(response.data)
      return [response.data];
    })
    .catch(function (error) {
      console.error(error);
      return error;
    });
}
