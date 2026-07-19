import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

// Shared, durable storage for published recipes.
// The full Recipe object is stored as JSON in `data`; the extra columns
// exist so we can order/filter without parsing every row.
export const recipes = sqliteTable("recipes", {
  id: text("id").primaryKey(),
  creator: text("creator").notNull().default(""),
  title: text("title").notNull().default(""),
  data: text("data").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
