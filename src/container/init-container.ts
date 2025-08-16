//TODO: Implement initContainer function

import { db } from '@src/db';
import { DIContainer } from './container';
import { TOKENS } from './tokens';
import { eventsTable } from '@src/db/schema';
import { BaseDao } from '@src/dao/base-dao';
import { NlpProcessor } from '@src/features/Events/services/nlp/nlp-processor';
import { EventRespository } from '@src/features/Events/repository/event';
import { EventMediator } from '@src/features/Events/mediator/event-mediator';
import { EventService } from '@src/features/Events/services/event/event';
import { EventController } from '@src/features/Events/controllers/event';

export const initContainer = () => {
    const container = DIContainer.getInstance();

    container.registerService(TOKENS.database, db);
    container.registerDAO(TOKENS.DAO, TOKENS.database, eventsTable, BaseDao);
    container.registerService(TOKENS.repositoryEvents, new EventRespository());
    container.registerService(TOKENS.eventService, new EventService());
    container.registerService(TOKENS.nlp, new NlpProcessor());
    container.registerService(TOKENS.eventMediator, new EventMediator());
    container.registerService(TOKENS.eventController, new EventController());
};
