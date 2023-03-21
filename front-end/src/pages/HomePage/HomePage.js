import { useSelector } from "react-redux";

const HomePage = () => {
  const userToken = useSelector((state) => state.token);

  return <div>{userToken}</div>;
};

export default HomePage;
