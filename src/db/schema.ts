import { integer, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';

export const eventsTable = pgTable('events', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    description: varchar({ length: 255 }).notNull(),
    date: timestamp().notNull(),
    participants: varchar({ length: 255 }).notNull(),
});
