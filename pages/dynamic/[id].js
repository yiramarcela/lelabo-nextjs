import { useRouter } from "next/router";

const DynamicPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Desde ruta dinamica</h1>
      {router.query.id}
    </div>
  );
};

export default DynamicPage;
