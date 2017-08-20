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
            console.log("to no callback",doc);
            if(!err) {
                return reply(doc);
            } else {
                console.log("ERRO NO CALLBACK DO FINDBYID!!");
                return reply({error:"ERRO AO TENTAR FAZER BUSCA POR ID"});
            }
        })
    },
    insert: (request,reply,service) => {
        console.log("to no fora callback",request.payload);
        service.create(request.payload,(err, doc) => {
            console.log("to no callback",doc);
            if(!err) {
                return reply(doc);
            } else {
                console.log("ERRO NO CALLBACK DO CREATE!!");
                return reply({error:"ERRO AO TENTAR CADASTRAR UM NOVO REGISTRO"}); 
            }
        })
    }
    

}

export default obj;