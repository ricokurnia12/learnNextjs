import { useRouter } from "next/router";

const Shopping = () => {
  const { query } = useRouter();
  console.log(query);

  return <h1>Title :{query.shoping && query.shoping[0]}</h1>;
};

export default Shopping;
