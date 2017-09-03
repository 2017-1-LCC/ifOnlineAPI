import jwt from 'jwt-simple';

export default (reply, data) => (user) => {
  user.comparePassword(data.password, (err,isMath) => {
    if(isMath) {
      const payload = {id:user._id};
      const resposta = {
        token:jwt.encode(payload,'secret'),
        idUser:user._id
      }
      reply(resposta);
    } else{
      reply("no tokens");
    }
  });
}
