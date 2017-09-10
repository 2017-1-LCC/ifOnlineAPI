import AbstractDAO from '../AbstractDAO';

class StudyGroupDAO extends AbstractDAO {

    constructor(StudyGroup, Teacher) {
        super(StudyGroup);
        this.group = StudyGroup;
        this.teacher = Teacher;
    };

    create(data,success,error) {
        this.group.create(data)
            .then(success)
            .then(group => {
                const query = {'_id':group.source.admin};
                this.teacher.findOne(query)
                    .exec()
                    .then(teacher => {
                        const Teacher = new this.teacher(teacher);
                        Teacher.groups.push(group.source._id);
                        Teacher.save();
                    })
                    .catch(error)
                
            })
            .catch(error)
            .done()
    };

    remove(id,success,error) {
        const idGroup = {'_id':id};
        this.group.findOne(idGroup)
            .exec()
            .then(group => {
                const idTeacher = {'_id':group.admin};
                this.teacher.findOne(idTeacher)
                    .then(teacher => {
                        const Teacher = new this.teacher(teacher);
                        Teacher.groups.remove(id);
                        Teacher.save();
                    })
                    .then(() => {
                        this.group.remove(idGroup)
                            .then(success)
                            .catch(error);
                    })  
                    .catch(error)
            })
            .catch(error)
            .done()
    };


    findWithPopulate(id,success,error) {
        this.group.findOne({_id:id})
            .populate('admin')
            .populate('teacher')
            .populate('students')
            .exec()
            .then(success)
            .catch(error);
    }

}

export default StudyGroupDAO;