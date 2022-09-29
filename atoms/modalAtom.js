import { FastForwardIcon } from "@heroicons/react/outline";
import { atom } from "recoil";

export const modalState = atom({
    key: 'modalState',
    default: false,
});