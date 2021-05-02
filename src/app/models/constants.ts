export enum COLORS{
    red,
    blue,
    green,
    yellow,
    purple,
    orange
}

export const START_COUTNT = 1;

export const sleep = async time => {
    return new Promise(resolve => setTimeout(resolve, time));
};