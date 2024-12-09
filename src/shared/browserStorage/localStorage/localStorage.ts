import { BrowserStorage } from '../browserStorage.ts'

export class LocalStorage extends BrowserStorage {
  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }
}
