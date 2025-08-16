import type { createEventDto, eventDto } from '../../dto/event';
import { DescriptionHandler } from './description-handler';
import type { INlpHandler } from './interfaces/nlp-handler';
import { ParticipantsHandler } from './participants-handlers';
import { TimeHandler } from './time-handler';
import { TitleHandler } from './title-handler';

export class NlpProcessor {
    private _chain: INlpHandler;
    constructor() {
        this._chain = new TitleHandler();
        const timeHandler = new TimeHandler();
        const descriptionHandler = new DescriptionHandler();
        const participantsHandler = new ParticipantsHandler();

        this._chain.setNextHandler(timeHandler);
        timeHandler.setNextHandler(descriptionHandler);
        descriptionHandler.setNextHandler(participantsHandler);
    }

    async process(messageEvent: eventDto): Promise<[createEventDto, eventDto]> {
        const createEvent: createEventDto = {
            title: '',
            description: '',
            date: new Date(),
            participants: '',
        };
        return await this._chain.handle(messageEvent, createEvent);
    }
}
