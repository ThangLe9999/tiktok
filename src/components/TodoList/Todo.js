import "./Todo.css";
import { useState } from "react";

function Todo() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs;
  });

  const handleSumbit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };

  const handleDelete = (indexDelete) => {
    setJobs((prev) => {
      const deleteJobs = prev.filter((item, index) => index !== indexDelete);
      const jsonJobs = JSON.stringify(deleteJobs);
      localStorage.setItem("jobs", jsonJobs);
      return deleteJobs;
    });
  };

  return (
    <div className="App" style={{ padding: 40 }}>
      <div className="todo-container">
        <h1>TODO LIST</h1>
        <div className="input">
          <input value={job} onChange={(e) => setJob(e.target.value)} />
          <button onClick={handleSumbit}>THÊM</button>
        </div>
        <ul>
          {jobs.map((job, index) => (
            <div key={index} className="list-todo">
              <p>{index + 1}</p>
              <li>{job} </li>
              <span
                onClick={() => handleDelete(index)}
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: 20,
                  cursor: "pointer",
                }}
              >
                {" "}
                &nbsp; x
              </span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
