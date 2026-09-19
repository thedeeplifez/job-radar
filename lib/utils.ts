export function formatRelativeTime(postedAt: string): string {
  const diffMs = Date.now() - new Date(postedAt).getTime();
  const minutes = Math.max(0, Math.floor(diffMs / 60000));

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;

  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} day${days === 1 ? "" : "s"} ago`;

  return new Date(postedAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatSalary(min: number | null, max: number | null, currency: string): string {
  if (min == null && max == null) return "Salary not disclosed";
  const formatNumber = (value: number) => new Intl.NumberFormat("en-US").format(value);

  if (min != null && max != null) {
    return `${currency} ${formatNumber(min)} - ${formatNumber(max)}`;
  }

  if (min != null) {
    return `${currency} ${formatNumber(min)}+`;
  }

  return `${currency} up to ${formatNumber(max ?? 0)}`;
}
