import { BaseHandler } from './base-handler';
import type { eventDto, createEventDto } from '../../dto/event';
import { wrapperPromise } from '@src/share/utils/network/network';
import { DIContainer } from '@src/container/container';
import { TOKENS } from '@src/container/tokens';
import type { AIModel } from '@src/share/utils/ai/interfaces/ai-model.interface';

export class ParticipantsHandler extends BaseHandler {
    private readonly _ai: AIModel = DIContainer.getInstance().resolve<AIModel>(
        TOKENS.aiModel
    );

    override async handle(
        messageEvent: eventDto,
        eventData: createEventDto
    ): Promise<[createEventDto, eventDto]> {
        if (!eventData.participants) {
            const [err, response] = await wrapperPromise(
                this._ai.generate(`
                Se te pasará un texto y debes extraer el/los participantes.
                Responde ÚNICAMENTE con un string.
                 No uses comillas simples, no uses markdown, no uses \`\`\`.
                Ejemplo: "lucku, juan, maria"
                Mensaje: ${messageEvent.message}
              `)
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
