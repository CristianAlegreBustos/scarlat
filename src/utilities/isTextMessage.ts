export default function isTextMessage(message: any): message is { text: string; fromUser: boolean } {
    return message && typeof message === "object" && "text" in message && "fromUser" in message;
  }