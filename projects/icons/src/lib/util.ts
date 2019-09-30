export function normalizeIconName(iconName: string) {
  return iconName.indexOf(':') > -1 ? iconName : `utility:${iconName}`;
}
