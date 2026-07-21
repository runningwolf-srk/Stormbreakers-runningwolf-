export type Relic = {
  slug: string
  title: string
  image: string
  num?: string
  sound?: string
  scripture?: string
  hook?: string
  practice?: string
  status?: 'forged' | 'unrevealed'
  category?: 'calling' | 'fire' | 'healing' | 'kingship' | 'redemption' | 'warfare' | 'worship'
}
