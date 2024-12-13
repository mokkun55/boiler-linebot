export const sendLine = async (message: string) => {
  const headers = {
    Authorization: `Bearer ${process.env.LINE_NOTIFY_TOKEN}`,
    "Content-Type": "application/json",
  };

  const messages = {
    to: process.env.LINE_NOTIFY_GROUP_ID,
    messages: [
      {
        type: "text",
        text: message,
      },
    ],
  };

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(messages),
  };

  const res = await fetch("https://api.line.me/v2/bot/message/push", options);

  if (!res.ok) {
    throw new Error(`Failed to send message: ${res.status}`);
  }
};
