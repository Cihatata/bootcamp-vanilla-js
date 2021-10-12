// Fetch Request

const API_URL = "http://localhost:3000"

const fetchApi = async (path) => {
  const response = await fetch(`${API_URL}${path}`);
  const data = await response.json();
  return data;
}

export default fetchApi;