import * as dotenv from 'dotenv';

dotenv.config();

export class Config {
  static get(key: string): string {
    return process.env[key];
  }

  static getNumber(key: string): number {
    return parseInt(process.env[key], 10);
  }

  static getBoolean(key: string): boolean {
    return process.env[key] === 'true';
  }

  static getMultiLine(key: string): string {
    try {
      return process.env[key].replace(/\\n/g, '\n');
    } catch (e) {
      return null;
    }
  }

  static getObject<T>(key: string): T {
    try {
      return JSON.parse(process.env[key]) as T;
    } catch (e) {
      return null;
    }
  }

  static getArray(key: string): string[] {
    if (!process.env[key]) return [];
    try {
      return process.env[key].split(',');
    } catch (e) {
      return [];
    }
  }
}
