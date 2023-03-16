import AppContext from "@/AppContext";
import { fetchReport } from "@/utils/fetchReport";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const page = () => {
  // const router = useRouter();
  const { query, isReady } = useRouter();

  if (!isReady) return null;

  return <div>Hello</div>;
};

export default page;
