const obj = {

    find: (request,reply,service) => {
        service.listAll((err,docs) => {
            if(!err) {
                return reply(docs);
            } else {
                console.log("ERRO NO CALLBACK DO FIND!!");
                reply({error:"ERRO AO TENTAR FAZER BUSCA"});
            }
        })
    },
    

}

export default obj;