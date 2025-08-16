import type { createEventDto, eventDto } from '../../dto/event';
import { BaseHandler } from './base-handler';
import * as chrono from 'chrono-node';

export class TimeHandler extends BaseHandler {
    override async handle(
        messageEvent: eventDto,
        eventData: createEventDto
    ): Promise<[createEventDto, eventDto]> {
        const date = chrono.parseDate(messageEvent.message, new Date(), {
            forwardDate: true,
        });

        if (!date) {
            return Promise.resolve([eventData, messageEvent]);
        }

        const eventDataUpdate = { ...eventData, date };

        return super.handle(messageEvent, eventDataUpdate);
    }
}
