import AbstractDAO from '../AbstractDAO';

class StudyGroupDAO extends AbstractDAO {

    constructor(StudyGroup, Teacher, Student, Timeline) {
        super(StudyGroup);
        this.group = StudyGroup;
        this.teacher = Teacher;
        this.student = Student;
        this.timeline = Timeline;
    }

    create(data,success,error) {
        this.group.create(data)
            .then(success)
            .then(group => {

                const idTeacher = {'_id':group.source.admin};
                const query = {$push:{'groups':group.source}};

                this.teacher.update(idTeacher,query) 
                    .then(() => {

                        this.teacher.findOne({_id:idTeacher})
                            .exec()
                            .then(teacher => {
        
                                const eventTimeLine = {
                                    description:'grupo '+group.source.discipline+' foi criado pelo professor '+teacher.name,
                                    birthDate: new Date(),
                                    user: teacher.user,
                                    group: group.source._id
                                }

                                this.timeline.create(eventTimeLine)
                                    .then()
                            })
                    })
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
                    .then(() => {

                        this.student.findOne({_id:idStudent})
                            .exec()
                            .then(studentFinded => {

                                this.group.findOne({_id:idGroup})
                                    .exec()
                                    .then(groupFinded => {

                                        const eventTimeLine = {
                                            description: 'O aluno '+studentFinded.name+' entrou no grupo '+groupFinded.discipline,
                                            birthDate: new Date(),
                                            user: student.user,
                                            group: group._id
                                        }
        
                                        this.timeline.create(eventTimeLine)
                                            .then()
                                    })
                            })
                    })
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
                    .then(() => {

                        this.student.findOne({_id:idStudent})
                        .exec()
                        .then(studentFinded => {

                            this.group.findOne({_id:idGroup})
                                .exec()
                                .then(groupFinded => {

                                    const eventTimeLine = {
                                        description: 'O aluno '+studentFinded.name+' saiu no grupo '+group.discipline,
                                        birthDate: new Date(),
                                        user: student.user,
                                        group: group._id
                                    }
    
                                    this.timeline.create(eventTimeLine)
                                        .then()
                                })
                        })
                    })
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
            .populate({
                path:'admin',
                model:'teacher',
                select:'-groups -__v ',
                populate: {
                    path:'user',
                    model:'user'
                }
            })
            .populate({
                path:'students',
                model:'student',
                populate:{
                    path:'user',
                    model:'user'
                }
            })
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