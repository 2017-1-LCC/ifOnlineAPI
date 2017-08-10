import StudentDAO from 'StudentDAO';
import Student from 'Student';
import AbstractService from 'AbstractService';

class StudentService {

    constructor() {
        this.studentDAO = new StudentDAO(Student);
    };

    findAll() {
        
    }
}