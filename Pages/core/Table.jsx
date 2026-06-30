import students from '../../Data/studentData.js';
import Sidebar from './Sidebar.jsx';
import '../css/table.css';

function StudentTablePage({ onBack }) {
  return (
    <div className="table-page">
      <Sidebar title="Student Records" subtitle="A simple view of the student list." />

      <main className="table-content">
        <div className="table-card">
          <div className="table-header">
            <div>
              <h1>Student Details</h1>
              <p>These are sample student records.</p>
            </div>
            <button onClick={onBack} type="button">
              Back
            </button>
          </div>

          <div className="table-wrapper">
            <table className="student-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Register Number</th>
                  <th>Email</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.registerNumber}</td>
                    <td>{student.email}</td>
                    <td>{student.department}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default StudentTablePage;
