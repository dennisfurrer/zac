import dotenv from "dotenv";
import cron from "node-cron";
import { checkWebsite } from "./checkWebsite";
dotenv.config();

// Schedule tasks to run every 30 minutes
cron.schedule("*/1 * * * *", async () => {
  console.log("Checking website and Twitter for updates...");
  await checkWebsite();
  //   await checkTwitter();
});

console.log("zkSync Airdrop Checker started.");
