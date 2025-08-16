import type { createEventDto, eventDto } from '@src/features/Events/dto/event';

export interface INlpHandler {
    setNextHandler(handler: INlpHandler): INlpHandler;
    handle(
        messageEvent: eventDto,
        eventData: createEventDto
    ): Promise<[createEventDto, eventDto]>;
}
