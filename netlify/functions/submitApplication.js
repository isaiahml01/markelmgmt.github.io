import fetch from "node-fetch";

export const handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    // Your Zapier webhook
    const zapierWebhook = "https://hooks.zapier.com/hooks/catch/25046980/urdo6cy/";

    const resp = await fetch(zapierWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!resp.ok) return { statusCode: 500, body: "Failed to send to Zapier" };

    return { statusCode: 200, body: "Success" };
  } catch (err) {
    return { statusCode: 500, body: "Error: " + err.message };
  }
};
