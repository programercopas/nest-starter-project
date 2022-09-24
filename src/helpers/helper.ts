import * as moment from 'moment';

export const sleep = (time: number) => {
  new Promise((resolve) => setTimeout(resolve, time * 1000)).then();
};

export const toLowerCase = (value: string): string => {
  return value.toLowerCase();
};

export const trim = (value: string): string => {
  return value.trim();
};

export const toDate = (value: string): Date => {
  return new Date(value);
};

export const toDateTimeFormat = (value: Date): string => {
  return moment(value).format('YYYY-MM-DD HH:mm:ss');
}

export const toBoolean = (value: string): boolean => {
  value = value.toLowerCase();
  return value === 'true' || value === '1';
};

export const toNumber = (value: string, opts: ToNumberOptions = {}): number => {
  let newValue: number = Number.parseInt(value || String(opts.default), 10);

  if (Number.isNaN(newValue)) {
    newValue = opts.default;
  }

  if (opts.min) {
    if (newValue < opts.min) {
      newValue = opts.min;
    }

    if (newValue > opts.max) {
      newValue = opts.max;
    }
  }

  return newValue;
};

export const camelToSnakeCase = (str: string): string => {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

export const snakeToCamelCase = (str: string): string => {
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

export const MILLISECOND = 1000;
