import { useRouter } from "next/router";
import { useEffect } from "react";

const Lesalon = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("lesalon/balado");
  }, []);
  return null;
};

export default Lesalon;
