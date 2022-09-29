import axios from "axios";
// import { useSelector } from "react-redux";

const UseRequestApi = () => {
  //   const user = useSelector((state) => state.user.currentUser);

  const BASE_URL = "http://localhost:9000/api";
  //   user?.accessToken;

  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjhiMjcyNGMwZGQ0YTFkZWFhNTlmYyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjM2MTE1NTcsImV4cCI6MTY2Mzg3MDc1N30.9uQnmMt7Sae-qtmdA18PxuaUCQKh25CKniQjaiqjV5k";

  const publicRequest = axios.create({
    baseURL: BASE_URL,
  });

  const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });

  return {
    publicRequest,
    userRequest,
  };
};

export default UseRequestApi;
