import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "store/userReducer";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;
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

export const findSliders = async () => {
    let res;
    try {
        res = await publicRequest.get("/Sliders");
    } catch (err) {
        console.log(err);
    }
    return res
}

export const findCategories = async () => {
    let res;
    try {
        res = await publicRequest.get("/products/findCategories");
    } catch (err) {
        console.log(err);
    }
    return res
}

export const findBestProducts = async () => {
    let res;
    try {
        res = await publicRequest.get("/products/findBestProducts");
    } catch (err) {
        console.log(err);
    }
    return res
}

export const findSomeOfProductsByCategories = async (categ , numOfProd) => {
    let res;
    try {
        res = await publicRequest.get(`/products/findSomeOfProductsByCategories?category=${categ}&numberOfProducts=${numOfProd}`);
    } catch (err) {
        console.log(err);
    }
    return res
}

export const findAllProductsByCategories = async (categ) => {
    let res;
    try {
        res = await publicRequest.get(`/products/findAllProductsByCategories?category=${categ}`);
    } catch (err) {
        console.log(err);
    }
    return res
}

export const login = async (dispatch, user) => {
    dispatch(loginStart());
  
    try {
      const res = await publicRequest.post("/auth/login", user);
      if (res.status === 200) {
        dispatch(loginSuccess(res.data));
      }
    } catch (err) {
      console.log("Error: ", err);
      dispatch(loginFailure());
    }
};

export const checkoutPayment = async (data) => {
    let res;
    try {
        res = await publicRequest.post("/checkout/payment", data);
    } catch (err) {
        console.log(err);
    }
    return res
};

export const findProducts = async (id) => {
    let res;
    try {
        res = await publicRequest.get(`/products/find/${id}`);
    } catch (err) {
        console.log(err);
    }
    return res
};
  