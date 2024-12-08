import { BrowserStorageType } from './types/browserStorageTypes.ts'

export abstract class BrowserStorage implements BrowserStorageType {
  abstract get(key: string): string | null;
  abstract set(key: string, value: string): void;
  abstract delete(key: string): void;
}
