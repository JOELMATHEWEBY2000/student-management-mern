import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../services/api";

import SearchBar from "../components/SearchBar";
import StudentTable from "../components/StudentTable";

function Home() {
  const [students, setStudents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteStudent = async (id) => {
    if (!window.confirm("Delete this student?")) return;

    try {
      await API.delete(`/students/${id}`);
      fetchStudents();
    } catch (err) {
      console.log(err);
    }
  };

  const searchStudents = async (name) => {
    if (!name.trim()) {
      fetchStudents();
      return;
    }

    try {
      const res = await API.get(`/students/search?name=${name}`);
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-4">

      <SearchBar onSearch={searchStudents} />

      <div className="text-end mb-3">
        <button
          className="btn btn-success"
          onClick={() => navigate("/add-student")}
        >
          + Add Student
        </button>
      </div>

      <StudentTable
        students={students}
        onEdit={(student) =>
          navigate(`/edit-student/${student._id}`)
        }
        onDelete={deleteStudent}
      />

    </div>
  );
}

export default Home;