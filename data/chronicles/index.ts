// data/chronicles/index.ts
// LEGACY FILE - Only use if you have content that isn't in data/armory
import { Relic } from '../armory'

// If this file had old chapters, convert them to Relic format:
export const chapters: Relic[] = [
  {
    slug: 'old-chapter-1',
    title: 'Old Chapter Title', // was: relic:
    image: '/relics/old-chapter-1.jpg',
    theme: 'Old Theme', // was: primaryTheme:
    description: 'Your old description here',
    scriptureRef: 'John 3:16', // was: scripture: or reference:
    lyrics: 'Old Song Name', // was: song:
    youtube: 'https://www.youtube.com/watch?v=OLD_VIDEO'
  },
  {
    slug: 'old-chapter-2', 
    title: 'Another Old Chapter',
    image: '/relics/old-chapter-2.jpg',
    theme: 'Another Theme',
    description: 'Another description',
    scriptureRef: 'Psalm 23:1',
    lyrics: 'Another Song',
    youtube: 'https://www.youtube.com/watch?v=ANOTHER_OLD_VIDEO'
  }
]

// Export default for backward compatibility
export default chapters
