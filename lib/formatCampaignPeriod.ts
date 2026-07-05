function getJstParts(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value ?? 0);

  const weekday = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    weekday: "narrow",
  }).format(date);

  return {
    year: get("year"),
    month: get("month"),
    day: get("day"),
    hour: get("hour"),
    minute: String(get("minute")).padStart(2, "0"),
    weekday,
  };
}

function formatJaDateTime(date: Date, options?: { omitYear?: boolean }) {
  const { year, month, day, hour, minute, weekday } = getJstParts(date);
  const datePart = options?.omitYear ? `${month}月${day}日（${weekday}）` : `${year}年${month}月${day}日（${weekday}）`;
  return `${datePart}${hour}:${minute}`;
}

/** クラウドファンディング開催期間の表示 */
export function formatCampaignPeriod(locale: string, startIso: string, endIso: string) {
  const start = new Date(startIso);
  const end = new Date(endIso);

  if (locale === "ja") {
    const startParts = getJstParts(start);
    const endParts = getJstParts(end);
    const sameYear = startParts.year === endParts.year;
    return `${formatJaDateTime(start)} 〜 ${formatJaDateTime(end, { omitYear: sameYear })}`;
  }

  const timeZone = "Asia/Tokyo";
  const dateOptions: Intl.DateTimeFormatOptions = {
    timeZone,
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const localeTag = locale === "pt" ? "pt-PT" : "en-US";
  const startStr = new Intl.DateTimeFormat(localeTag, dateOptions).format(start);
  const endStr = new Intl.DateTimeFormat(localeTag, dateOptions).format(end);
  const suffix = locale === "pt" ? " (JST)" : " JST";

  return `${startStr} – ${endStr}${suffix}`;
}
