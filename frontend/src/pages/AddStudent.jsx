import { useNavigate } from "react-router-dom";
import API from "../services/api";
import StudentForm from "../components/StudentForm";

function AddStudent() {
  const navigate = useNavigate();

  const saveStudent = async (student) => {
    try {
      await API.post("/students", student);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-4">
      <StudentForm
        onSave={saveStudent}
        selectedStudent={null}
        clearSelection={() => navigate("/")}
      />
    </div>
  );
}

export default AddStudent;