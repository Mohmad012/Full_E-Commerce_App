import axios from "axios";

const BASE_URL = "http://localhost:9000/api";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjhiMjcyNGMwZGQ0YTFkZWFhNTlmYyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjM2MTE1NTcsImV4cCI6MTY2Mzg3MDc1N30.9uQnmMt7Sae-qtmdA18PxuaUCQKh25CKniQjaiqjV5k";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
