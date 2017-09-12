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
                const idTeacher = {'_id':group.source.admin};
                const query = {$push:{'groups':group.source}}
                this.teacher.update(idTeacher,query) 
                    .then()
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
                const query = {$pull:{'groups':{'_id':group._id}}}
                this.teacher.update(idTeacher,query)
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