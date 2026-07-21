// @ts-nocheck
export const CANON: any = {
  RELIC_MAP: { wolf:{symbol:'🐺',name:'Wolf Blade'}, default:{symbol:'⚔️',name:'Relic'} },
  ARMORY: [{id:'wolf',name:'Wolf Blade',symbol:'🐺'}],
  BIBLE:{FLOW:[]}, WORD:[], BOOKS:[], CHRONICLES:[]
}
export const getRelic = (id?:string) => CANON.RELIC_MAP[id||'default'] || CANON.RELIC_MAP.default
