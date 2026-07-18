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

function formatEnDateTime(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(date);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${get("month")} ${get("day")}, ${get("year")}, ${get("hour")}:${get("minute")} ${get("dayPeriod")}`;
}

/** クラウドファンディング開催期間の表示 */
export function formatCampaignPeriod(locale: string, startIso: string, endIso: string) {
  const start = new Date(startIso);
  const end = new Date(endIso);

  if (locale === "ja") {
    const startParts = getJstParts(start);
    const endParts = getJstParts(end);
    const sameYear = startParts.year === endParts.year;
    return `${formatJaDateTime(start)} ～ ${formatJaDateTime(end, { omitYear: sameYear })}`;
  }

  if (locale === "en") {
    return `${formatEnDateTime(start)} – ${formatEnDateTime(end)} JST`;
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

  const startStr = new Intl.DateTimeFormat("pt-PT", dateOptions).format(start);
  const endStr = new Intl.DateTimeFormat("pt-PT", dateOptions).format(end);

  return `${startStr} – ${endStr} (JST)`;
}
