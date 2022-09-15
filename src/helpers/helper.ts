export const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time * 1000));
export const MILLISECOND = 1000;