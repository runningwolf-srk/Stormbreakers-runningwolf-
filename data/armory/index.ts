import {callingRelics} from "./calling";import {warfareRelics} from "./warfare";import {worshipRelics} from "./worship";import {legacyRelics} from "./legacy";
export const CANON_ORDER=["wolf-fang","wolf-blade","thunder-drums"];
export const CANON_LEDGER:Record<string,{num:string}>={"wolf-fang":{num:"VII"},"wolf-blade":{num:"X"},"thunder-drums":{num:"XI"}};
export const ALL_RELICS=[...callingRelics,...warfareRelics,...worshipRelics,...legacyRelics].filter(Boolean).map(r=>({...r,num:CANON_LEDGER[r.slug]?.num||r.num})).filter(r=>CANON_ORDER.includes(r.slug)).sort((a,b)=>CANON_ORDER.indexOf(a.slug)-CANON_ORDER.indexOf(b.slug));
export const CANON_PROGRESS={forged:3,inProgress:0,unrevealed:13,total:16};
export {callingRelics,warfareRelics,worshipRelics,legacyRelics};
