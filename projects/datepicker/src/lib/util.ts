export interface XotbInternalDate {
  year: number;
  month: number;
  day: number;
  disabled?: boolean;
}

export function parseDate(date: Date): XotbInternalDate {
  if (!date) {
    return null;
  }
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate()
  };
}

export function isEqualDate(d1: XotbInternalDate, d2: XotbInternalDate) {
  return (
    d1 &&
    d2 &&
    d1.day === d2.day &&
    d1.month === d2.month &&
    d1.year === d2.year
  );
}

export function getToday(): XotbInternalDate {
  const today = new Date();
  return {
    year: today.getFullYear(),
    month: today.getMonth(),
    day: today.getDate()
  };
}

export function numberOfDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

// Split array into smaller arrays
export function split(arr: any[], size = 7) {
  const arrays: any[] = [];
  while (arr.length > 0) {
    arrays.push(arr.splice(0, size));
  }
  return arrays;
}

export function isDisabled(
  d: XotbInternalDate,
  disabledCallback: (d: Date) => boolean,
  min: XotbInternalDate,
  max: XotbInternalDate
): boolean {
  const date = new Date(d.year, d.month, d.day);
  return (
    (disabledCallback && disabledCallback(date)) ||
    (min && compareDate(d, min) < 0) ||
    (max && compareDate(d, max) > 0)
  );
}

export function compareDate(d1: XotbInternalDate, d2: XotbInternalDate) {
  if (isEqualDate(d1, d2)) {
    return 0;
  }
  const keys = ['year', 'month', 'day'];
  for (let i = 0; i < 3; i++) {
    const key = keys[i];
    const diff = d1[key] - d2[key];
    if (diff !== 0) {
      return diff > 0 ? 1 : -1;
    }
  }
}

export function isSameMonth(
  d1: XotbInternalDate,
  d2: XotbInternalDate
): boolean {
  return d1.year === d2.year && d1.month === d2.month;
}
