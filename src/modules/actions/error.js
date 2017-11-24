export default (reply) => (err) => {
  if(err.errors.username) {
    return reply(JSON.parse(err.errors.username.message.toString()));
  } else if(err.errors.email) {
    return reply(JSON.parse(err.errors.email.message));
  } else {
    return reply(err);
  }
  //reply(err.errors.username.message);
}