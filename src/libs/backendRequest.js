import axios from "axios";
import { BACKEND_URL } from "../data/constants";

export async function fetchBookmieProjects(params) {
  const response = await axios.get(`${BACKEND_URL}/core/projects/`);
  return response.data;
}
