import type { createEventDto, eventDto } from '../../dto/event';
import type { INlpHandler } from './interfaces/nlp-handler';

export class BaseHandler implements INlpHandler {
    private _nextHandler: INlpHandler;

    setNextHandler(handler: INlpHandler): INlpHandler {
        this._nextHandler = handler;
        return handler;
    }

    async handle(
        messageEvent: eventDto,
        eventData: createEventDto
    ): Promise<[createEventDto, eventDto]> {
        if (this._nextHandler) {
            return this._nextHandler.handle(messageEvent, eventData);
        }
        return [eventData, messageEvent];
    }
}
