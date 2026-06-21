export type Track = {
  id: string
  title: string
  artist: string
  youtubeId?: string
  note?: string
}

export const musicCatalog: Track[] = [
  { id: "iron-collide", title: "IRON COLLIDE", artist: "RunningWolf", youtubeId: "5VAKc7v2Mh0", note: "Viking energy" },
  { id: "horn-of-war", title: "HORN OF WAR", artist: "RunningWolf", youtubeId: "c4fPNzqlzIc", note: "War cry aesthetic" },
  { id: "spiritual-journey", title: "SPIRITUAL JOURNEY", artist: "RunningWolf", youtubeId: "pWpq4pmklTI", note: "Cinematic worship" }
]
