import AbstractDAO from '../AbstractDAO';

class StudyGroupDAO extends AbstractDAO {

    constructor(StudyGroup, Teacher, Student) {
        super(StudyGroup)
        this.group = StudyGroup
        this.teacher = Teacher
        this.student = Student
    }

    create(data,success,error) {
        data.classSchedule = data.classSchedule.filter(el => !el.removed );
        data.proof = data.proof.filter(el => !el.removed );
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



    addProofOnGroup(idGroup, proof, success, error) {
        const group = {'_id':idGroup}
        const addProof = {$push:{'proof':proof}}
        this.group.update(group, addProof)
            .then(success)
            .catch(error)
    }
    
    removeProofOnGroup(idGroup, proof, success, error) {
        const group = {'_id':idGroup}
        const removeProof = {$pull:{'proof':proof}}
        this.group.update(group, removeProof)
            .then(success)
            .catch(error)
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