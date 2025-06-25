import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/jsonPlaceholder";
import Card from "../components/Card";
import Button from "../components/Button";

const ApiDemo = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetchPosts({ page, limit: 5, search })
      .then(setPosts)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [page, search]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">API Data (JSONPlaceholder Posts)</h2>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => { setPage(1); setSearch(e.target.value); }}
        className="mb-4 px-3 py-2 border rounded w-full dark:bg-gray-700 dark:text-gray-100"
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <h3 className="font-bold text-lg mb-2">{post.title}</h3>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        <Button variant="secondary" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>Previous</Button>
        <span className="self-center">Page {page}</span>
        <Button variant="secondary" onClick={() => setPage((p) => p + 1)}>Next</Button>
      </div>
    </div>
  );
};

export default ApiDemo; 