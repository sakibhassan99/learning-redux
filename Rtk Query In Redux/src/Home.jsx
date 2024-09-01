import { useState } from "react";
import TaskItem from "./TaskItem";
import { Link } from "react-router-dom";
import {
  useAddTaskMutation,
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "./apiSlice";

export default function Home() {
  const [newTask, setNewTask] = useState("");
  const { data: tasksList, isError, isLoading, error } = useGetTasksQuery();

  const [addTask] = useAddTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  return (
    <div className="flex items-start justify-center flex-grow h-screen p-4 bg-gray-900">
      <div className="w-full max-w-md px-6 pt-6 pb-2 text-gray-200 bg-gray-800 rounded-lg shadow-lg task-app">
        <div className="flex items-center mb-6">
          <svg
            className="w-8 h-8 text-indigo-700 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <h4 className="ml-3 text-lg font-semibold">My Tasks</h4>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const task = {
              value: newTask,
              completed: false,
            };
            addTask(task);
            setNewTask("");
          }}
          className="flex items-center w-full h-8 px-2 my-2 text-sm font-medium border-2 border-gray-700 border-solid rounded"
        >
          <svg
            className="w-5 h-5 text-gray-400 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <input
            className="flex-grow w-full h-8 ml-4 font-medium bg-transparent focus:outline-none"
            type="text"
            placeholder="Add a new task"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            required
          />
          <button className="text-indigo-400">Add</button>
        </form>
        <div className="overflow-auto tasks-container">
          {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : isError ? (
            <p className="text-center">
              {error.message || "Something went wrong"}
            </p>
          ) : (
            tasksList.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            ))
          )}
        </div>
      </div>
      <Link to="contact" className="absolute text-gray-800 hover:text-gray-400">
        Contact
      </Link>
    </div>
  );
}
