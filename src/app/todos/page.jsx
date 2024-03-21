import styles from "@/app/ui/dashboard/users/users.module.css";

export const getTodos = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10",
    // {
    //   next: { revalidate: 10 },
    // }
    // { caches: "no-cache" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
};

const Todos = async () => {
  // Data fetching on server using Route Handler

  const data = await getTodos();
  console.log(data);
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Done" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
