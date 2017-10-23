import AbstractDAO from '../AbstractDAO';

class StudyGroupDAO extends AbstractDAO {

    constructor(StudyGroup, Teacher, Student) {
        super(StudyGroup)
        this.group = StudyGroup
        this.teacher = Teacher
        this.student = Student
    }

    create(data,success,error) {
        this.group.create(data)
            .then(success)
            .then(group => {
                const idTeacher = {'_id':group.source.admin};
                const query = {$push:{'groups':group.source}}
                this.teacher.update(idTeacher,query) 
                    .then()
                    .catch(error)
            })
            .catch(error)
            .done()
    }

    addStudentOnGroup(idStudent, idGroup, success, error) {
        const group = {'_id':idGroup}
        const student = {'_id':idStudent}
        const addStudent = {$push:{'students':idStudent}}
        const addGroupToStudent = {$push:{'groups':idGroup}}
        this.group.update(group,addStudent)
            .then(() => {
                this.student.update(student, addGroupToStudent)
                    .then(success)
                    .done()
            })
            .catch(error)
    }

    removeStudentOnGroup(idStudent, idGroup, success, error) {
        const group = {'_id':idGroup}
        const student = {'_id':idStudent}
        const addStudent = {$pull:{'students':idStudent}}
        const addGroupToStudent = {$pull:{'groups':idGroup}}
        this.group.update(group,addStudent)
            .then(() => {
                this.student.update(student, addGroupToStudent)
                    .then(success)
                    .done()
            })
            .catch(error)
    }

    remove(id,success,error) {
        const idGroup = {'_id':id};
        this.group.findOne(idGroup)
            .exec()
            .then(group => {
                const idTeacher = {'_id':group.admin};
                const query = {$pull:{'groups':group._id}}
                this.teacher.update(idTeacher,query)
                    .then(() => {
                        group.remove();
                    })
                    .then(success)  
                    .catch(error)
            })
            .catch(error)
            .done()
    }

    // FALTA IMPLEMENTAR 
    findByTeacher(name,success,error) {
        this.group.find()
            .populate('admin')
            .populate('students')
            .exec()
            .then(success)
            .catch(error);
    }

    findGroupsFullObject(id,success,error) {
        this.group.findOne({_id:id})
            .populate('admin','name birthDate email')
            .populate('students')
            .exec()
            .then(success)
            .catch(error);
    }

    listAll(success,error) {
        this.Model.find()
            .populate('admin',{name:1,email:1})
            .exec()
            .then(success)
            .catch(error);
    };

}

export default StudyGroupDAO;