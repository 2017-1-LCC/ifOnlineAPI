function create(object) {

    const user = {
        username:object.username,
        password:object.password,
        typeUser:object.typeUser,
        email:object.email,
    };

    const other = {
        name:object.name,
        birthDate:object.birthDate,
        user:null,
        groups:[]
    }

    return {
        user,
        other
    }
}

function executeRollBack(entity, id, error, err) {
    entity.remove({ _id: id })
        .then(() => {
            return error(err);
        })
        .catch(error)
};

function executeFindAndUpdate(firstModel, secondModel, account, user, type, sucess, error) {

    firstModel.findOneAndUpdate(user)
        .then(inseredUser => {

            account[type] = inseredUser._id;
            secondModel.findOneAndUpdate(account)
                .then(sucess)
                .catch(error)

        })
        .catch(error)
        .done()
};

function executeCreate(firstModel, secondModel, account, user, type, success, error) {

    firstModel.create(user)
        .then(inseredUser => {

            account[type] = inseredUser._id;

            this.secondModel.create(account)
                .then(success)
                .catch(err => {
                    if (err) {
                        executeRollBack(firstModel, inseredUser._id, error, err);
                    }
                })
        })
}


const factory = {
    create,
    update,
    executeRollBack,
    executeFindAndUpdate,
    executeCreate
}

export default factory;