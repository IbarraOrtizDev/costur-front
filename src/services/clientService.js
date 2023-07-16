import { api } from "src/boot/axios";

export async function getClients() {
  const response = await api.get("/Client");
  if (response.data.Ok) return response.data.Body.$values;
  throw new Error(response.data.Body.Message);
}

export async function getClientById(id) {
  const response = await api.get("/Client/" + id);
  if (response.data.Ok) return response.data.Body;
  throw new Error(response.data.Message);
}

export async function createClient(data) {
  const response = await api.post("/Client", data);
  if (response.data.Ok) return response.data.Body;
  throw new Error(response.data.Message);
}

export async function updateClient(data) {
  const response = await api.put("/Client", data);
  if (response.data.Ok) return response.data.Body;
  console.log(response);
  throw new Error(response.data.Message);
}
