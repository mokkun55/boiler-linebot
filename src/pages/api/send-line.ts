import { sendLine } from "@/features/line/sendLine";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let message = "";

  const day = new Date();
  const dayOfWeek = day.getDay();

  // 金曜日の判定
  if (dayOfWeek == 5) {
    message =
      "もうすぐ５時ですボイラーをつけましょう。\n今日は金曜日です。点呼表を作りましょう";
  } else {
    message = "もうすぐ５時ですボイラーをつけましょう。";
  }

  try {
    await sendLine(message);
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
}
