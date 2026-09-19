export function isValidHttpUrl(value: string): boolean {
  if (!value || typeof value !== "string") {
    return false;
  }

  try {
    const url = new URL(value);
    return (url.protocol === "http:" || url.protocol === "https:") && !url.username && !url.password;
  } catch {
    return false;
  }
}

export function sanitizeText(value: string): string {
  return value.replace(/[<>"'`]/g, "").trim();
}

export function isSafeRedirectPath(value: string): boolean {
  if (!value || typeof value !== "string") {
    return false;
  }

  if (value.startsWith("//") || value.startsWith("\\\\")) {
    return false;
  }

  return /^[A-Za-z0-9/_\-?.=&%:]+$/.test(value);
}
