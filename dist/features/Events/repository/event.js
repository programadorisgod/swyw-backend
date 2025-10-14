import { DIContainer } from "../../../container/container.js";
import { TOKENS } from "../../../container/tokens.js";
export class EventRespository {
  constructor() {
    this.dao = DIContainer.getInstance().resolve(TOKENS.DAO);
    this.createEvent = async eventData => {
      const dbEntity = this.mapDtoToDbEntity(eventData);
      console.log(dbEntity);
      const createdEvent = await this.dao.insert(dbEntity);
      return createdEvent;
    };
    this.getEventById = async id => {
      const event = await this.dao.findById(id);
      return event;
    };
    this.getAllEvents = async () => {
      const events = await this.dao.findAll();
      return events;
    };
  }
  mapDtoToDbEntity(eventData) {
    return {
      title: eventData.title,
      description: eventData.description,
      date: eventData.date && new Date(eventData.date),
      participants: eventData.participants || '',
      type: eventData.type,
      remember: eventData.remember
    };
  }
}