import AbstractDAO from '../AbstractDAO';

class TimelineDAO extends AbstractDAO {

  constructor(Timeline) {
    super(Timeline);
    this.timeline = Timeline;
  }
  
  listAll(success, error) {
    this.timeline.find()
      .sort([['birthDate', -1]])
      .populate('user')
      .populate('group')
      .exec()
      .then(success)
      .catch(error);
  }

}

export default TimelineDAO;