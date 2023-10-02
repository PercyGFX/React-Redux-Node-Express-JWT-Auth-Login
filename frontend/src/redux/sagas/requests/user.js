import axios from "axios";

export function requestUserAuth(token) {
  return axios.request({
    method: "get",
    url: "http://localhost:5000/isauthenticated",
    headers: {
      Authorization: `${token}`,
    },
  });
}
