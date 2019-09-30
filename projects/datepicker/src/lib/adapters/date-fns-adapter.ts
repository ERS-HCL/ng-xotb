import { Injectable } from '@angular/core';
import { format as dateFnsFormat, parse as dateFnsParse } from 'date-fns';
import { XotbDateAdapterBase } from './adapter';

const PATTERNS = {
  'big-endian': 'yyyy/MM/dd',
  'little-endian': 'dd/MM/yyyy',
  'middle-endian': 'MM/dd/yyyy'
};

@Injectable()
export class XotbDateAdapter extends XotbDateAdapterBase {
  parse(value: string, format: string): Date | null {
    const date = dateFnsParse(value, format, new Date());
    return this.isValidDate(date) ? date : null;
  }

  format(date: Date, format: string): string {
    return dateFnsFormat(date, format);
  }

  pattern(
    name: 'big-endian' | 'little-endian' | 'middle-endian',
    delimiter: string
  ): string {
    const pattern = PATTERNS[name];
    return delimiter && delimiter !== '/'
      ? pattern.replace(/\//g, delimiter)
      : pattern;
  }

  private isValidDate(value): boolean {
    const dateWrapper = new Date(value);
    return !isNaN(dateWrapper.getDate());
  }
}
