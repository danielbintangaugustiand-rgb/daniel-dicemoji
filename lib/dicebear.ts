export function getAvatarUrl(
  seed: string,
  format: "svg" | "png" = "svg"
) {
return `https://api.dicebear.com/7.x/lorelei/${format}?seed=${seed}`;
}
