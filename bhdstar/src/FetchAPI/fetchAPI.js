const fetchAPI = (url, method, data) => {
  const jwtToken = localStorage.getItem("jwtToken");
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    body: JSON.stringify(data),
  });
};
export default fetchAPI;
