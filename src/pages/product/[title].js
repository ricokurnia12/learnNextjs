import { useRouter } from "next/router";

const Title = () => {
  const router = useRouter();
  console.log(router.query);
  const title = router.query.title;
  return <h1>Title :{title}</h1>;
};

export default Title;
