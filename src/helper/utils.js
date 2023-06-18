export const fetcher = async (action, url, params = null) => {
  const res = await fetch(`${process.env.API_URL}${url}`, {
    method: action,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: params ? JSON.stringify(params) : null,
  });
  const data = await res.json();
  return data;
};
