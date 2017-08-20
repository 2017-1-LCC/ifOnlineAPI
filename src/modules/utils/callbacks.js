const obj = {

    find: (request,reply,service) => {
        service.listAll((err,docs) => {
            if(!err) {
                return reply(docs);
            } else {
                console.log("ERRO NO CALLBACK DO FIND!!");
                return reply({error:"ERRO AO TENTAR FAZER BUSCA"});
            }
        })
    },
    findById: (request, reply, service) => {
        service.listById(request.params.id,(err,doc) => {
            if(!err) {
                return reply(doc);
            } else {
                console.log("ERRO NO CALLBACK DO FINDBYID!!");
                return reply({error:"ERRO AO TENTAR FAZER BUSCA POR ID"});
            }
        })
    },
    insert: (request,reply,service) => {
        service.create(request.payload,(err, doc) => {
            if(!err) {
                return reply(doc);
            } else {
                console.log("ERRO NO CALLBACK DO CREATE!!");
                return reply({error:"ERRO AO TENTAR CADASTRAR UM NOVO REGISTRO"}); 
            }
        })
    },
    remove: (request, reply, service) => {
        service.remove(request.params.id,(err) => {
            if(!err) {
                return reply("Registro removido com sucesso!");
            } else {
                console.log("ERRO NO CALLBACK DO CREATE!!");
                return reply({error:"ERRO AO TENTAR CADASTRAR UM NOVO REGISTRO"}); 
            }
        })
    }
    

}

export default obj;