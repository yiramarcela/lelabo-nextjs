import { useRouter } from "next/router";
import { useEffect } from "react";

const Lesalon = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("ressources/appels");
  }, []);
  return null;
};

export default Lesalon;
