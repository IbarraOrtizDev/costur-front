import { api } from "src/boot/axios";

export async function getCompany() {
  const response = await api.get("/Company");
  if (response.data.Ok) return response.data.Body;
  throw new Error(response.data.Body.Message);
}
