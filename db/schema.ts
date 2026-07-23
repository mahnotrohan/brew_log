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

// Tombstones: ids that have been deleted. POST refuses these, so stale
// clients (old cached bundles with local copies) can never resurrect them.
export const deletedRecipes = sqliteTable("deleted_recipes", {
  id: text("id").primaryKey(),
  deletedAt: text("deleted_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
