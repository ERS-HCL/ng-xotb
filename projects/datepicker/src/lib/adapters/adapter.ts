export abstract class XotbDateAdapterBase {
  /**
   * Converts a user supplied string to a `Date` object based on the supplied `format`.
   * If conversion is invalid, it returns `null`.
   */
  abstract parse(value: string, format: string): Date | null;

  /**
   * Converts a `Date` object to the desired `format`.
   */
  abstract format(date: Date, format: string): string;

  /**
   * Converts a pre-defined name or custom format to well valid date pattern.
   */
  abstract pattern(
    name: 'big-endian' | 'little-endian' | 'middle-endian' | string,
    delimiter?: string
  ): string;
}
