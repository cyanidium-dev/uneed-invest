import { ApplicationType } from "@/constants/application";

export async function POST(req: Request): Promise<Response> {
  try {
    const body = (await req.json()) as {
      name?: string;
      phone: string;
      message?: string;
      messageFrom: ApplicationType;
    };

    const { name, phone, message, messageFrom } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");

      return new Response(
        JSON.stringify({ error: "Missing Telegram credentials" }),
        { status: 500 }
      );
    }

    let text = `
💬 ${messageFrom}:
👤 Имя: ${name ? name : "-"}
📞 Телефон: ${phone}
    `.trim();

    if (message) {
      text += `\n💬 Повідомлення: ${message}`;
    }

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      }
    );

    if (!telegramRes.ok) {
      console.error("Telegram API error");

      return new Response(JSON.stringify({ error: "Telegram API error" }), {
        status: 502,
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Internal Server Error:", error);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
