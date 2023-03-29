const BASE_URL = "https://fakestoreapi.com/";

export const GET = async (param) => {
  const res = await fetch(BASE_URL + param);
  const data = await res.json();

  return data;
};
