import { db } from "./index";
import { migrate } from "drizzle-orm/neon-http/migrator";

async function main() {
  try {
    await migrate(db, { migrationsFolder: "src/db/migrations" });
    console.log("Migration complete");
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

main();