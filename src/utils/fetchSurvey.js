import axios from "axios";
import { getAxios } from "../../public/scripts/sdk-client";

export const fetchSurvey = async () => {
    const data = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/feedbackform/2/`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    // console.log(data.data)
    return [data.data]
    // console.log(data.data[0].form_id)
    // if (data.data[0]) {
    //   const response = await axios.get(
    //     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/feedbackform/${data.data[0].form_id}/`,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //       },
    //     }
    //   );
    //   return response.data
    //   // survey = response.data;
    // }
//     let Axios = getAxios();

//   return Axios(config)
//     .then(function (response) {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(function (error) {
//       console.error(error);
//       return error;
//     });
  };