import { atom } from 'jotai'
const nameAtom = atom<string>("Alex");
const experienceAtom = atom<number>(0);
const heightAtom = atom<number>(0);
export {nameAtom, experienceAtom, heightAtom}