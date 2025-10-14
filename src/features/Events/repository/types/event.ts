import type { eventResponseDto } from '../../dto/event';

export type getAllEvents = {
    pagination: {
        total: number;
        pages: number;
    };
    items: Array<eventResponseDto>;
};
