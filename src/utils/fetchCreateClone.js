import { getAxios } from "../../public/scripts/sdk-client";

export default async function fetchCreateClone() {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url:
      process.env.NEXT_PUBLIC_BACKEND_URL +
      "/manager/feedbackform/" +
      "/1/clone/",
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
