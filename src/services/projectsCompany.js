import { api } from "src/boot/axios";

export async function getProjectsCompany() {
  const response = await api.get("/ProjectCompany");
  if (response.data.Ok) return response.data.Body.$values;
  throw new Error(response.data.Message);
}
