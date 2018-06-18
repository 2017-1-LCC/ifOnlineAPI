import jwt from 'jwt-simple';

export default (reply, data) => (user) => {
  user.comparePassword(data.password, (err,isMath) => {
    if(isMath) {

      const payload = {idUser:user._id,typeUser:user.typeUser};
      const resposta = {
        token:jwt.encode(payload,'secret'),
      }

      reply(resposta);
      
    } else{
      reply("no tokens");
    }
  });
}
