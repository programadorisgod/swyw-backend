import { DIContainer } from "../../../container/container.js";
import { TOKENS } from "../../../container/tokens.js";
import { wrapperPromise } from "../../../share/utils/network/network.js";
export class EventController {
  constructor() {
    this._eventMediator = DIContainer.getInstance().resolve(TOKENS.eventMediator);
    this._eventService = DIContainer.getInstance().resolve(TOKENS.eventService);
    this.createEvent = async (req, res) => {
      const eventToCreate = req.body;
      try {
        const [err, event] = await wrapperPromise(this._eventMediator.createEvent({
          eventToCreate
        }));
        if (err) {
          console.log('Error creating event:', err);
          res.status(500).json({
            error: err.message
          });
          return;
        }
        res.status(201).json(event);
      } catch (error) {
        console.error(error);
        res.status(500).json({
          error: 'Internal Server Error'
        });
      }
    };
    this.getEvents = async (req, res) => {
      try {
        const [err, events] = await wrapperPromise(this._eventService.getAllEvents());
        if (err) {
          res.status(500).json({
            error: err.message
          });
          return;
        }
        res.status(200).json(events);
      } catch (error) {
        console.error(error);
        res.status(500).json({
          error: 'Internal Server Error'
        });
      }
    };
  }
}