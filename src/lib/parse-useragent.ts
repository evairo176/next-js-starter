import { UAParser } from "ua-parser-js";
import { format, formatDistanceToNowStrict, isPast } from "date-fns";
import { Laptop, LucideIcon, Smartphone } from "lucide-react";

interface AgentType {
  deviceType: string;
  browser: string;
  os: string;
  timeAgo: string;
  icon: LucideIcon;
}

export const parseUserAgent = (
  userAgent: string,
  createdAt: string
): AgentType => {
  const parser = new UAParser(userAgent);
  const result = parser.getResult();

  const deviceType = result.device.type || "desktop";
  const browser = result.browser.name || "Web";
  const os = `${result.os.name || "Unknown OS"} ${
    result.os.version || ""
  }`.trim();

  const icon = deviceType === "mobile" ? Smartphone : Laptop;

  const formattedAt = isPast(new Date(createdAt))
    ? `${formatDistanceToNowStrict(new Date(createdAt))} ago`
    : format(new Date(createdAt), "d MMM, yyyy");

  return {
    deviceType,
    browser,
    os,
    timeAgo: formattedAt,
    icon,
  };
};
