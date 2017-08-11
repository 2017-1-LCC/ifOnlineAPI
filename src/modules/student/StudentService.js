import StudentDAO from 'StudentDAO';
import Student from './Student.js';
import AbstractService from 'AbstractService';

class StudentService {

    constructor() {
        this.studentDAO = new StudentDAO(Student);
    };

    findAll(query,options) {
        this.studentDAO.listAll(query,options)
            .then((err,data)=>{
                console.log(data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }
}