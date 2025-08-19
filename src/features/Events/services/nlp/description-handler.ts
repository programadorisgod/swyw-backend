import { BaseHandler } from './base-handler';
import type { eventDto, createEventDto } from '../../dto/event';
import { wrapperPromise } from '@src/share/utils/network/network';
import type { AIModel } from '@src/share/utils/ai/interfaces/ai-model.interface';
import { DIContainer } from '@src/container/container';
import { TOKENS } from '@src/container/tokens';

export class DescriptionHandler extends BaseHandler {
    private readonly _ai: AIModel = DIContainer.getInstance().resolve<AIModel>(
        TOKENS.aiModel
    );

    override async handle(
        messageEvent: eventDto,
        eventData: createEventDto
    ): Promise<[createEventDto, eventDto]> {
        if (!eventData.description) {
            const [err, response] = await wrapperPromise(
                this._ai.generate(`
              Responde ÚNICAMENTE un objeto JSON válido.
              Formato: {"description":"<texto de la descripción>"}
               No uses comillas simples, no uses markdown, no uses \`\`\`.
              Mensaje: ${messageEvent.message}
            `)
            );

            if (err || !response) {
                console.log('DescriptionHandler: Error occurred:', err);
                return [eventData, messageEvent];
            }

            const responseObject = JSON.parse(response);

            console.log(
                'DescriptionHandler: Response from AI:',
                responseObject
            );
            const updatedEventData = {
                ...eventData,
                description: responseObject.description,
            };

            return super.handle(messageEvent, updatedEventData);
        }

        return super.handle(messageEvent, eventData);
    }
}
