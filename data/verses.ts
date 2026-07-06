export type Verse = {
  id: number;
  ref: string; // "Isaiah 53:5"
  text: string; // Full verse text
  book: string; // "Isaiah"
  chapter: number; // 53
  themes: string[]; // ["Healing", "Redemption", "Worship"]
  song?: {
    title: string;
    slug: string; // "jesus-is-an-healer"
  };
  relic?: {
    title: string;
    id: number;
  };
  reflection: string; // Stormbreakers commentary - NOT Scripture
};

export const VERSES: Verse[] = [
  {
    id: 1,
    ref: "Isaiah 53:5",
    text: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.",
    book: "Isaiah",
    chapter: 53,
    themes: ["Healing", "Redemption", "Hope"],
    song: { title: "Jesus Is An Healer", slug: "jesus-is-an-healer" },
    relic: { title: "The First Flame", id: 1 },
    reflection: "The First Flame was written to remind us that Christ's sacrifice is the source of true healing and hope."
  },
  {
    id: 2,
    ref: "Joel 2:1",
    text: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming.",
    book: "Joel",
    chapter: 2,
    themes: ["Calling", "Worship", "Victory"],
    song: { title: "Horn of War", slug: "horn-of-war" },
    relic: { title: "Thunder Drums", id: 3 },
    reflection: "Horn of War is the sound of the watchman. When God calls, we don't whisper — we blow the trumpet."
  },
  {
    id: 3,
    ref: "Revelation 4:1",
    text: "After this I looked, and there before me was a door standing open in heaven. And the voice I had first heard speaking to me like a trumpet said, 'Come up here, and I will show you what must take place after this.'",
    book: "Revelation",
    chapter: 4,
    themes: ["Calling", "Worship", "Faith"],
    song: { title: "Heaven Calling", slug: "heaven-calling" },
    relic: { title: "Spirit Mantle", id: 4 },
    reflection: "Heaven Calling came from a moment where the door opened and I heard: 'Come up here.' This is that invitation."
  },
  {
    id: 4,
    ref: "Galatians 6:17",
    text: "From now on, let no one cause me trouble, for I bear on my body the marks of Jesus.",
    book: "Galatians",
    chapter: 6,
    themes: ["Strength", "Redemption", "Faith"],
    song: { title: "Scars That Preach", slug: "scars-that-preach" },
    relic: { title: "Wolf Fang", id: 2 },
    reflection: "Scars That Preach is my testimony. These aren't wounds anymore — they're marks of ownership. I belong to Him."
  },
  {
    id: 5,
    ref: "Psalm 23:3",
    text: "He restores my soul. He leads me in paths of righteousness for his name's sake.",
    book: "Psalm",
    chapter: 23,
    themes: ["Healing", "Hope", "Faith"],
    song: { title: "Spiritual Journey", slug: "spiritual-journey" },
    reflection: "Spiritual Journey is the road from the valley to the throne. He doesn't just save you — He restores your soul."
  },
  {
    id: 6,
    ref: "Proverbs 27:17",
    text: "As iron sharpens iron, so one person sharpens another.",
    book: "Proverbs",
    chapter: 27,
    themes: ["Strength", "Calling", "Victory"],
    song: { title: "Iron Collide", slug: "iron-collide" },
    relic: { title: "Runningwolf's Blade", id: 5 },
    reflection: "Iron Collide is about brotherhood in battle. We don't fight alone. We sharpen each other for war."
  },
  {
    id: 7,
    ref: "Ephesians 1:7",
    text: "In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God's grace",
    book: "Ephesians",
    chapter: 1,
    themes: ["Redemption", "Hope", "Worship"],
    song: { title: "Blood of Cross", slug: "blood-of-cross" },
    relic: { title: "Eternal Fire", id: 6 },
    reflection: "Blood of Cross is the foundation. No blood, no redemption. No cross, no crown. It's that simple."
  },
  {
    id: 8,
    ref: "Revelation 19:16",
    text: "On his robe and on his thigh he has this name written: KING OF KINGS AND LORD OF LORDS.",
    book: "Revelation",
    chapter: 19,
    themes: ["Victory", "Worship", "Calling"],
    song: { title: "Lord of Lords", slug: "lord-of-lords" },
    relic: { title: "Storm Crown", id: 7 },
    reflection: "Lord of Lords is the anthem of the throne. We don't reign — He does. We just rule from the eye of HIS storm."
  },
  {
    id: 9,
    ref: "Habakkuk 2:2",
    text: "Then the Lord replied: 'Write down the revelation and make it plain on tablets so that a herald may run with it.'",
    book: "Habakkuk",
    chapter: 2,
    themes: ["Calling", "Faith", "Victory"],
    relic: { title: "Chronicle Stone", id: 8 },
    reflection: "Chronicle Stone is my commission. God said WRITE. So I write. So you can run with it."
  }
];

export const THEMES = ["Healing", "Faith", "Calling", "Strength", "Redemption", "Worship", "Hope", "Victory"];
