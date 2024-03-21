"use client";

import styles from "@/app/ui/dashboard/users/users.module.css";
import { useEffect, useState } from "react";
import useSWR from "swr";

const Todos = () => {
  // const [todos, setTodos] = useState();
  // const [isLoading, setLoading] = useState(true);

  // Data fetching on client component using Route Handler
  // useEffect(() => {
  //   fetch("http://localhost:8000/api/todos")
  //     .then((res) => res.json())
  //     .then(({ data }) => {
  //       setTodos(data);
  //       setLoading(false);
  //     });
  // }, []);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10",
    fetcher
  );

  if (error) {
    return <p>Error happend</p>;
  }

  // if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Loading...</p>;

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
