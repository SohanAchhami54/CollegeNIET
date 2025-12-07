import { instance } from "./axios-instance";
export async function PostData(path, formData) {
  const data = await instance.post(path, formData);
  return data;
}
