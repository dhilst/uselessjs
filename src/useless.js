// @flow
export default function (...args: any): void {
  return undefined;
} 

export function useless(...args: any): void {
  return undefined;
}

export class UselessClass {
  useless(...args: any): void {
    return undefined;
  }
}

export function UselessPromise(...args: any): Promise<void> {
  return new Promise(fulfill => fulfill(undefined));
}
