/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect } from "react";

const Lesalon = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("services/formation");
  }, []);
  return null;
};

export default Lesalon;
