function StudentTable({ students, onEdit, onDelete }) {
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <div className="card shadow">
      <div className="card-header bg-dark text-white">
        <h4>Student List</h4>
      </div>

      <div className="card-body">

        {students.length === 0 ? (
          <div className="alert alert-warning text-center">
            No students found.
          </div>
        ) : (
          <div className="table-responsive">

            <table className="table table-bordered table-hover align-middle">

              <thead className="table-primary">

                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Course</th>
                  <th>Department</th>
                  <th width="180">Actions</th>
                </tr>

              </thead>

              <tbody>

                {students.map((student, index) => (

                  <tr key={student._id}>

                    <td>{index + 1}</td>

                    <td>{student.name}</td>

                    <td>{student.email}</td>

                    <td>{student.age}</td>

                    <td>{student.course}</td>

                    <td>{student.department}</td>

                    <td>

                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => onEdit(student)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(student._id)}
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>
    </div>
  );
}

export default StudentTable;