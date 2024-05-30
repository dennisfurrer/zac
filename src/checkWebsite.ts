import axios from "axios";
import { sendNotification } from "./sendNotification";

const urlsToCheck = [
  "https://zksync.io/airdrop",
  "https://zksync.io/claim",
  "https://airdrop.zksync.io",
  "https://claim.zksync.io",
];

export async function checkWebsite() {
  try {
    for (const url of urlsToCheck) {
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          await sendNotification(
            "Website Update",
            `The airdrop page is available: ${url}`
          );
          return;
        }
      } catch (error: any) {
        if (error.response && error.response.status !== 404) {
          console.error(`Error checking ${url}:`, error.message);
        }
      }
    }
  } catch (error: any) {
    console.error("Error checking website:", error.message);
  }
}
