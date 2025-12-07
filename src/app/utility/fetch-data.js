import { instance } from "./axios-instance";
export async function fetchData(path) {
  const data = await instance.get(path);
  return data;
}
