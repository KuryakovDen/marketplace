import { BrowserStorage } from '../browserStorage.ts'

export class CookiesStorage extends BrowserStorage {
  get(key: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${key}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  set(key: string, value: string): void {
    document.cookie = `${key}=${value}`;
  }

  delete(key: string): void {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`
  }
}
