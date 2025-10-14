import { DIContainer } from "../../../container/container.js";
import { TOKENS } from "../../../container/tokens.js";
export class EventMediator {
  async createEvent({
    eventToCreate
  }) {
    const container = DIContainer.getInstance();
    // 1. NLP (finished)
    // 2. Event creation (finished)
    // 3. Event scheduling (next)
    // 4. Event notification (next)
    const nlpProcessor = container.resolve(TOKENS.nlp);
    const nlpOutput = await nlpProcessor.process(eventToCreate);
    if (nlpOutput instanceof Error) {
      console.log('error ');
      throw nlpOutput;
      //TODO: Call to handle error method
    }
    const eventPayload = {
      ...nlpOutput,
      type: eventToCreate.type,
      remember: eventToCreate.remember
    };
    const eventService = container.resolve(TOKENS.eventService);
    const savedEvent = await eventService.create(eventPayload);

    // TODO: If the event has enable remember then call service to manage google calendar o service calendar,
    // else only create event without appointment event in service calendar
    if (!savedEvent.remember) return savedEvent;
    return savedEvent; //for test
  }
}