function delay(n) {
  return new Promise((r) => setTimeout(r, n));
}
//Get all user
export const getUsers = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      next: { revalidate: 3000 },
    },
    { caches: "no-cache" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};

//Get user by ID
export const getUserById = async (id) => {
  await delay(5000);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return response.json();
};

//Get all posts
export const getPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

//Get post by ID
export const getPostById = async (id) => {
  await delay(10000);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-cache" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

//Get comments by post ID
export const getCommentsByPostId = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

// Get Todos list
export const getTodos = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5",
    {
      next: { revalidate: 10 },
    }
    // { caches: "no-cache" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
};
