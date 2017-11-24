export default (reply) => (err) => {
  if(err.errors.username) {
    return reply(err.errors.username.message);
  } else if(err.errors.email) {
    return reply(err.errors.email.message);
  } else {
    return reply(err);
  }
  //reply(err.errors.username.message);
}