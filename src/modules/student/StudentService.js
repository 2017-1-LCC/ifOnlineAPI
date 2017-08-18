import StudentDAO from './StudentDAO';

class StudentService {

    constructor(Student) {
        this.student = Student;
        this.studentDAO = new StudentDAO(Student);
    };

    listAll() {
        return this.student.find((err,docs) => {
            console.log(docs);
        })
       //return this.studentDAO.listAll();
    };

    create(data) {
        this.studentDAO.create(data);
    }
}

export default StudentService;