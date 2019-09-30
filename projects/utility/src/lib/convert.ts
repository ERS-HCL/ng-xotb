import { coerceBooleanProperty, _isNumberValue } from '@angular/cdk/coercion';

function propDecoratorFactory<T, D>(
  name: string,
  fallback: (v: T) => D
): (target: any, propName: string) => void {
  function propDecorator(target: any, propName: string): void {
    const privatePropName = `$$__${propName}`;

    if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
      console.warn(
        `The property "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`
      );
    }

    Object.defineProperty(target, privatePropName, {
      configurable: true,
      writable: true
    });

    Object.defineProperty(target, propName, {
      get(): string {
        return this[privatePropName];
      },
      set(value: T): void {
        this[privatePropName] = fallback(value);
      }
    });
  }

  return propDecorator;
}

export function toBoolean(value: any): boolean {
  return coerceBooleanProperty(value);
}

export function InputBoolean(): any {
  return propDecoratorFactory('InputBoolean', toBoolean);
}

export function toNumber(value: number | string): number;
export function toNumber<D>(value: number | string, fallback: D): number | D;
export function toNumber(
  value: number | string,
  fallbackValue: number = 0
): number {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}

export function InputNumber(): any {
  return propDecoratorFactory('InputNumber', toNumber);
}
