import { G4F } from 'g4f';
import { BaseHandler } from './base-handler';
import type { eventDto, createEventDto } from '../../dto/event';
import { wrapperPromise } from '@src/share/utils/network/network';

const g4f = new G4F();
const messages = [
    {
        role: 'system',
        content: `Se te pasará un texto, de ese texto vas a extraer la descripción o en base a todo el mensaje lo vas a generar.
                  Siempre responderas como {description: 'description generada o encontrda'}, solo el objeto, nada de explicaciones, ni tips, solo ese objeto'`,
    },
];

export class DescriptionHandler extends BaseHandler {
    override async handle(
        messageEvent: eventDto,
        eventData: createEventDto
    ): Promise<[createEventDto, eventDto]> {
        console.log('DescriptionHandler: Handling event', messageEvent);
        if (!eventData.description) {
            console.log('DescriptionHandler: No description provided');
            messages.push({
                role: 'user',
                content: JSON.stringify(messageEvent),
            });
            const [err, response] = await wrapperPromise(
                Promise.resolve(
                    JSON.stringify({
                        description:
                            'Reunión con Pedro para acordar el horario',
                    })
                )
            );

            if (err || !response) {
                console.log('DescriptionHandler: Error occurred:', err);
                return [eventData, messageEvent];
            }

            const responseObject = JSON.parse(response);

            const updatedEventData = {
                ...eventData,
                description: responseObject.description,
            };

            return super.handle(messageEvent, updatedEventData);
        }

        return super.handle(messageEvent, eventData);
    }
}
