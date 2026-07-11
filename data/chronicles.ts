export type Chapter = {
  slug: string
  title: string
  subtitle: string
  content: string
  scripture: {
    ref: string
    text: string
  }
  relicSlug: string | null
}

export const chapters: Chapter[] = [
  {
    slug: 'the-valley',
   
