import { wrapperPromise } from '@src/share/utils/network/network';
import type { createEventDto, eventDto } from '../../dto/event';
import { BaseHandler } from './base-handler';
import type { AIModel } from '@src/share/utils/ai/interfaces/ai-model.interface';
import { DIContainer } from '@src/container/container';
import { TOKENS } from '@src/container/tokens';

export class TitleHandler extends BaseHandler {
    private readonly _ai: AIModel = DIContainer.getInstance().resolve<AIModel>(
        TOKENS.aiModel
    );
    override async handle(
        messageEvent: eventDto,
        eventData: createEventDto
    ): Promise<[createEventDto, eventDto]> {
        if (!eventData.title) {
            const [err, response] = await wrapperPromise(
                this._ai.generate(`
              Se te pasará un texto, de ese texto debes extraer o generar un título.
              Responde ÚNICAMENTE con un objeto JSON válido en este formato:
               No uses comillas simples, no uses markdown, no uses \`\`\`.
              {"title": "<titulo identificado o generado>"}
              Mensaje: ${messageEvent.message}
            `)
            );
            console.log(response);
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
