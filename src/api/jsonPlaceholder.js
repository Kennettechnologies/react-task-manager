const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchPosts({ page = 1, limit = 10, search = "" } = {}) {
  let url = `${BASE_URL}/posts?_page=${page}&_limit=${limit}`;
  if (search) {
    url += `&q=${encodeURIComponent(search)}`;
  }
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch posts");
  const data = await response.json();
  return data;
} 