import { DIContainer } from '@src/container/container';
import type { createEventDto, eventDto } from '../dto/event';
import { TOKENS } from '@src/container/tokens';
import type { NlpProcessor } from '../services/nlp/nlp-processor';
import { EventService } from '../services/event/event';

export class EventMediator {
    async createEvent({ messageEvent }: { messageEvent: eventDto }) {
        const container = DIContainer.getInstance();
        // 1. NLP (in process)
        // 2. Event creation (finished)
        // 3. Event scheduling (next)
        // 4. Event notification (next)
        const nlp = container.resolve<NlpProcessor>(TOKENS.nlp);

        const eventCreate = await nlp.process(messageEvent);
        console.log(eventCreate);
        if (eventCreate instanceof Error) {
            console.log('error ');
            throw eventCreate;
            //TODO: Call to handle error method
        }

        const eventService = container.resolve<EventService>(
            TOKENS.eventService
        );

        const createdEvent = await eventService.create(eventCreate);

        return createdEvent;
    }
}
