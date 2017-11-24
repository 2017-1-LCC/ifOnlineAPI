export default (reply) => (err) => {
  console.log("deu erro!",err.errors);
  if(err.errors.username) {
    return reply(err.errors.username.message);
  } else if(err.errors.email) {
    return reply({ message:err.errors.email.message });
  } else {
    return reply(err);
  }
  //reply(err.errors.username.message);
}