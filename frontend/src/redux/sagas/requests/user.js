import axios from "axios";

// name fuction related to request this will be used in handler
export function requestUserAuth(token) {
  // simple axios request with token on header and returns the result
  console.log("Caling api call on requests");
  return axios.get("http://localhost:5000/isauthenticated", {
    headers: {
      Authorization: `${token}`,
    },
  });
}
