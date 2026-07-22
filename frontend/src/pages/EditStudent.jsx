import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import API from "../services/api";
import StudentForm from "../components/StudentForm";

function EditStudent() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      const res = await API.get(`/students/${id}`);
      setStudent(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateStudent = async (data) => {
    try {
      await API.put(`/students/${id}`, data);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  if (!student) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container mt-4">
      <StudentForm
        onSave={updateStudent}
        selectedStudent={student}
        clearSelection={() => navigate("/")}
      />
    </div>
  );
}

export default EditStudent;