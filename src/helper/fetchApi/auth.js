export const fetchApiLogin = (params, res) => {
  fetch(process.env.API_URL + "customer/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.hasOwnProperty("success") && responseJson.success == true) {
        res({ resVal: responseJson });
      } else {
        res(JSON.stringify(responseJson.message));
      }
    });
};
