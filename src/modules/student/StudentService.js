import StudentDAO from './StudentDAO';

class StudentService {

    constructor(Student) {
        this.student = Student;
        this.studentDAO = new StudentDAO(Student);
    };

    async listAll(callback) {
        try{
            await this.student.find(callback);
        }catch(error){
            throw error;
        }
    };

    create(data) {
        this.studentDAO.create(data);
    }
}

export default StudentService;