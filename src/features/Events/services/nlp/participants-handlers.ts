import { G4F } from 'g4f';
import { BaseHandler } from './base-handler';
import type { eventDto, createEventDto } from '../../dto/event';
import { wrapperPromise } from '@src/share/utils/network/network';

const g4f = new G4F();
const messages = [
    {
        role: 'system',
        content: `Se te pasará un texto, de ese texto vas a extraer el/los participantes o en base a todo el mensaje lo vas a generar.
                  Siempre responderas como 'participante1, participante2, participante3', solo esoo, nada de explicaciones, ni tips, solo ese objeto'`,
    },
];

export class ParticipantsHandler extends BaseHandler {
    override async handle(
        messageEvent: eventDto,
        eventData: createEventDto
    ): Promise<[createEventDto, eventDto]> {
        console.log('ParticipantsHandler', eventData.participants);

        if (!eventData.participants) {
            console.log('ParticipantsHandler');
            messages.push({
                role: 'user',
                content: JSON.stringify(messageEvent),
            });
            const [err, response] = await wrapperPromise(
                Promise.resolve('Tu, yo, el veci')
            );
            if (err || !response) {
                console.log(err);
                return [eventData, messageEvent];
            }

            const responseString = JSON.stringify(response);

            const eventDataUpdated = {
                ...eventData,
                participants: responseString,
            };

            return super.handle(messageEvent, eventDataUpdated);
        }
        return super.handle(messageEvent, eventData);
    }
}
