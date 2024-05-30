// import dotenv from "dotenv";
// import { TwitterApi } from "twitter-api-v2";
// import { sendNotification } from "./sendNotification";
// dotenv.config();

// const client = new TwitterApi({
//   appKey: process.env.TWITTER_APP_KEY,
//   appSecret: process.env.TWITTER_APP_SECRET,
//   accessToken: process.env.TWITTER_ACCESS_TOKEN,
//   accessSecret: process.env.TWITTER_ACCESS_SECRET,
// });

// const twitterClient = client.readOnly;
// const zkSyncTwitterId = "zksync"; // Ensure this is the correct Twitter handle or user ID

// export async function checkTwitter() {
//   try {
//     const tweets = await twitterClient.v2.userTimeline(zkSyncTwitterId, {
//       exclude: "replies",
//     });
//     const latestTweet = tweets.data.data[0];

//     if (latestTweet && latestTweet.text.toLowerCase().includes("airdrop")) {
//       await sendNotification(
//         "Twitter Update",
//         `New airdrop tweet: https://x.com/zksync/status/${latestTweet.id}`
//       );
//     }
//   } catch (error: any) {
//     console.error("Error checking Twitter:", error.message);
//   }
// }
