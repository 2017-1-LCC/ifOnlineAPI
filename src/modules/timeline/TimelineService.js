import TimelineDAO from './TimelineDAO';
import AbstractService from '../AbstractService';

class TimelineService extends AbstractService {

    constructor(Timeline) {
        super(new TimelineDAO(Timeline));
        this.timelineDAO = new TimelineDAO(Timeline);
    };

    listAll(success, error) {
        return this.timelineDAO.listAll(success, error);
    }

}

export default TimelineService;