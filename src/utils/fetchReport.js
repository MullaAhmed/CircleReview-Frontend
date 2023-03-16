import axios from "axios";

export const fetchReport = async (id) => {
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/feedback/${id}/`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  // console.log(data.data)
  return data.data;
};
