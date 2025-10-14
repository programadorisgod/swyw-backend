import { DIContainer } from "../../../container/container.js";
import { Router } from 'express';
import { TOKENS } from "../../../container/tokens.js";
const eventRouter = Router();
const PREFIX = '/api/events';
export const createEventRouter = () => {
  const controller = DIContainer.getInstance().resolve(TOKENS.eventController);
  eventRouter.post(PREFIX, controller.createEvent);
  eventRouter.get(PREFIX, controller.getEvents);
  return eventRouter;
};