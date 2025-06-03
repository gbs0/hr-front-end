import { configDotenv } from "dotenv";
import { fakerPT_BR as faker } from '@faker-js/faker';

configDotenv();
configDotenv({ path: `.env.local`, override: true });

import * as schema from "@/db/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { pgTable, text, serial } from "drizzle-orm/pg-core";


const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const emailProvider = ["hotmail", "live", "outlook", "gmail", "bol", "supplychain"]

const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  first_name: text("first_name").notNull(),
  last_name: text("last_name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  role: text("role").notNull().default("user"),
  phone: text("phone").default("(11) 9****-****"),
});

async function createRandomUser() {
  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: `${faker.person.firstName()}.${faker.person.lastName()}@${emailProvider[Math.floor(Math.random() * emailProvider.length)]}.com`,
    password: faker.internet.password({ length: 10 }),
    role: faker.helpers.arrayElement(['user', 'admin'] as const),
    phone: faker.phone.number('(11) 9####-####'),
  };
}

const main = async () => {
  try {
    console.log("🌱 Iniciando seed do banco de dados...");

    console.log("🗑️  Deletando dados existentes...");
    await db.delete(usersTable);

    console.log("👥 Criando usuários fictícios...");
    const fakeUsers = await Promise.all(
      Array.from({ length: 10 }, createRandomUser)
    );

    console.log("💾 Inserindo usuários no banco...");
    await db.insert(usersTable).values(fakeUsers);

    console.log("✅ Seed concluído com sucesso!");
  } catch (error) {
    console.error("❌ Erro durante o seed:", error);
    throw new Error("Falha ao realizar o seed do banco de dados");
  } finally {
    process.exit(0);
  }
};

main();
