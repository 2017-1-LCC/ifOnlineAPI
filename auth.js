import UserService from './src/modules/user/UserService';
import Bcrypt from 'bcrypt';

exports.register = (server, options ,next) => {
  server.register(require('hapi-auth-basic'),(err) => {

      if(err) throw err;

      const service = new UserService(server.app.db.models.user);

      function basicValidation(request, username, password, callback) {

        function success(user) {
          if (!user) {
              return callback(null, false)
          }
          
          Bcrypt.compare(password, user[0].password, function (err, isValid) {
              callback(err, isValid, { id: user.id, username: user.username })
          })
        };

        function error(error) {
          return error;
        };

        service.findByUsername(username,success,error);

      }

      server.auth.strategy('simple','basic',{ validateFunc: basicValidation });
      next();
  })
}

exports.register.attributes = {
  name: 'authentication',
  version: '1.0.0'
}