import TimelineService from './TimelineService';
import Timeline from './Timeline';
import action from '../actions/actions';

exports.register = function(server, options ,next) {
    
    const service = new TimelineService(server.app.db.models.timeline);

    server.route({
        method: 'GET',
        path: '/timeline',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.find(request,reply,service);
            }
        }
    });

    return next();
}

exports.register.attributes = {
    name: 'routes-timeline'
};