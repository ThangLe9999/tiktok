import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";
import logger from "./logger";

// initial state

// Reducer

function TodoApp() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div className="App" style={{ padding: "0 50px" }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        placeholder="Enter todo..."
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit} style={{ cursor: "pointer" }}>
        Add
      </button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}{" "}
            <span
              style={{ cursor: "pointer", fontWeight: "bold", color: "red" }}
              onClick={() => dispatch(deleteJob(index))}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
