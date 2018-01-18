 let errorMessage = {
   message:'',
   error:true
 };

export default (reply) => (err) => {
  console.log(err.errors.username);
  if(err.errors.username) {
    errorMessage.message = err.errors.username.message;
    return reply(errorMessage);

  } else if(err.errors.email) {
    errorMessage.message = err.errors.email.message;
    return reply(errorMessage);

  } else {
    errorMessage.message = "Erro desconhecido.";
    return reply(errorMessage);
  }
  
}