import jwt from 'jwt-simple';

export default (reply, data) => (user) => {
  user.comparePassword(data.password, (err,isMath) => {
    if(isMath) {
      const payload = {id:user._id};
      reply({token:jwt.encode(payload,'secret')});
    } else{
      reply("no tokens");
    }
  });
}
