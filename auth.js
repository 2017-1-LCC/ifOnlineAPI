import UserService from './src/modules/user/UserService';
import Bcrypt from 'bcrypt';

var plugins = [
    {
        register: require('hapi-auth-jwt')
    },
    {
        register: require('hapi-authorization'),
        options: {
            roles: ['STUDENT', 'TEACHER']
        }
    }
];

exports.register = (server, options ,next) => {
  server.register(plugins,(err) => {

      if(err) throw err;

      const service = new UserService(server.app.db.models.user);

      function validate(request, decodedToken, callback) {
        let err = "";
        function success(user) {
          if (!user) {
              err = "usuário não encontrado";
              return callback(err, false, user);
          }
          return callback(err, true, user)
        };

        function error(error) {
          return error;
        };

        service.findByDecodedToken(decodedToken.idUser,success,error);
          
      };

      server.auth.strategy('token', 'jwt', {
          key: 'secret',
          validateFunc: validate,
          verifyOptions: { algorithms: [ 'HS256' ] }  // only allow HS256 algorithm
      });
      next();
  })
}


/*
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
*/



exports.register.attributes = {
  name: 'authentication',
  version: '1.0.0'
}