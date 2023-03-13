import { getAxios } from "../../public/scripts/sdk-client";

export default async function fetchFeedbackList(id) {
  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: process.env.NEXT_PUBLIC_BACKEND_URL + `api/feedback/all/${id}/`,
  };

  let Axios = getAxios();

  return Axios(config)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
      return error;
    });
}
