import { BrowserStorage } from '../browserStorage.ts'

export class SessionStorage extends BrowserStorage {
  get(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  set(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  delete(key: string): void {
    sessionStorage.removeItem(key);
  }
}
