const BASE_URL = "https://api.musement.com/api/v3/";

export const GET = async (param) => {
  const res = await fetch(BASE_URL + param);
  const data = await res.json();

  return data;
};
