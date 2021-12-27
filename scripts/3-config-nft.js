import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x2140dfe8b573d93b97861b8e0cfb51a43f21f03e",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "The Peace of Tomorrow ",
        description: "This NFT will give you access to CharityDAO!",
        image: readFileSync("scripts/assets/chess.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()