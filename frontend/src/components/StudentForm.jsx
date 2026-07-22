import { useEffect, useState } from "react";

function StudentForm({ onSave, selectedStudent, clearSelection }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
    department: "",
  });

  useEffect(() => {
    if (selectedStudent && selectedStudent._id) {
      setStudent(selectedStudent);
    } else {
      setStudent({
        name: "",
        email: "",
        age: "",
        course: "",
        department: "",
      });
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !student.name ||
      !student.email ||
      !student.age ||
      !student.course ||
      !student.department
    ) {
      alert("Please fill all fields");
      return;
    }

    onSave(student);
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-success text-white">
        <h4>
          {student._id ? "Update Student" : "Add Student"}
        </h4>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={student.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={student.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Age</label>
            <input
              type="number"
              name="age"
              className="form-control"
              value={student.age}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Course</label>
            <input
              type="text"
              name="course"
              className="form-control"
              value={student.course}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Department</label>
            <input
              type="text"
              name="department"
              className="form-control"
              value={student.department}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-success">
              {student._id ? "Update Student" : "Add Student"}
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={clearSelection}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;