import {
  pgEnum,
  pgTable,
  serial,
  text,
} from "drizzle-orm/pg-core";

export const rolesEnum = pgEnum("roles", ["user", "admin"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  first_name: text("first_name").notNull(),
  last_name: text("last_name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  role: rolesEnum("role").notNull().default("user"),
  phone: text("phone")
});
