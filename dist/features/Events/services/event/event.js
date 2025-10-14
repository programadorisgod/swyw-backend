import { DIContainer } from "../../../../container/container.js";
import { TOKENS } from "../../../../container/tokens.js";
export class EventService {
  constructor() {
    this._repository = DIContainer.getInstance().resolve(TOKENS.repositoryEvents);
    this.create = async eventData => {
      return await this._repository.createEvent(eventData);
    };
    this.getEventById = async id => {
      return await this._repository.getEventById(id);
    };
    this.getAllEvents = async () => {
      return await this._repository.getAllEvents();
    };
  }
}