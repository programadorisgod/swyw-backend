import { wrapperPromise } from '@src/share/utils/network/network';
import type { createEventDto, eventDto } from '../../dto/event';
import { BaseHandler } from './base-handler';
import { G4F } from 'g4f';

const g4f = new G4F();
const messages = [
    {
        role: 'system',
        content: `Se te pasará un texto, de ese texto vas a extraer el titulo o en base a todo el mensaje lo vas a generar.
                  Siempre responderas como '{title: 'titulo identificado o generado'}, solo el objeto, nada de explicaciones, ni tips, solo ese objeto'`,
    },
];
export class TitleHandler extends BaseHandler {
    override async handle(
        messageEvent: eventDto,
        eventData: createEventDto
    ): Promise<[createEventDto, eventDto]> {
        if (!eventData.title) {
            messages.push({
                role: 'user',
                content: JSON.stringify(messageEvent),
            });
            const [err, response] = await wrapperPromise(
                Promise.resolve(JSON.stringify({ title: 'Reunión con Pedro' }))
            );

            if (err || !response) {
                console.log(err);
                return [eventData, messageEvent];
            }

            const responseObject = JSON.parse(response);

            const updatedEventData = {
                ...eventData,
                title: responseObject.title,
            };

            return super.handle(messageEvent, updatedEventData);
        }

        return super.handle(messageEvent, eventData);
    }
}
