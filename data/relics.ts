// Define the shape of a Relic
export type Relic = {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  verse: {
    text: string;
    ref: string;
  };
  declaration: string;
};

// The actual relics data
export const RELICS: Relic[] = [
  {
    id: 1,
    title: "The First Flame",
    image: "/AQNawBYhZi5D3mTWqF8M9hfxg8zmT6ExMD0oErYvItBSZP7UeI86XPd2kca7gYcPkxv5rsNNaYrM-_4jYBIIupX9.png",
    imageAlt: "Golden pillar of fire rising from darkness",
    verse: { text: "But he was pierced for our transgressions", ref: "Isaiah 53:5" },
    declaration: "I was broken so you could be whole."
  },
  {
    id: 2,
    title: "Wolf Fang",
    image: "/AQNaCDj13mbCjvyJA47tjBiuR6D-WpUweMqib7Hbp4kQlHoSgm3XdKzfnagSdD4b8kNiNWrOpPugyuGGlJZ0Zmp7.png",
    imageAlt: "Ancient wolf fang pendant glowing with gold runes",
    verse: { text: "The wolf will live with the lamb", ref: "Isaiah 11:6" },
    declaration: "I am the hunter turned guardian. I protect what I once stalked."
  },
  {
    id: 3,
    title: "Thunder Drums",
    image: "/AQOz4uIRTVBY1w495PKpiAaJkqdN0z3TUXi6XBCq3BTu5pojjvcJeQoIJbmduV4EbRJKxE183PEOaupTTShyCiqg.png",
    imageAlt: "Stone drum suspended in storm clouds with lightning",
    verse: { text: "The voice of the Lord strikes with flashes of lightning", ref: "Psalm 29:7" },
    declaration: "When I speak, the heavens answer."
  },
  {
    id: 4,
    title: "Spirit Mantle",
    image: "/AQMILikpY_4YzpC0ogoZpZ-dI1kxVJiVzqbyR-nBMd64rS--eSuhxWQnpBDaKhlBu2e5g6eNQCVPKEViBhWOME3B.png",
    imageAlt: "Tattered golden mantle dripping with fire",
    verse: { text: "The Spirit of the Lord will rest on him", ref: "Isaiah 11:2" },
    declaration: "I am clothed in fire. I carry His weight."
  },
  {
    id: 5,
    title: "Runningwolf's Blade",
    image: "/AQNSqpHW8gV1OxAJb-5woTpal2mMV6yPY3VCIyhfmXJ51cTaGP38bt7ry6ooj4APZbACwuHTNzTNlLA2GCzab6o8.png",
    imageAlt: "Snow-covered wolf head with golden sword through ornate crest",
    verse: { text: "The sword of the Spirit, which is the word of God", ref: "Ephesians 6:17" },
    declaration: "I run with the pack. I strike with the Word."
  },
  {
    id: 6,
    title: "Eternal Fire",
    image: "/AQNv1x8JFS1A0AB4rym1t36t9z9Ah7gwaP2Vr3PS3hhoCAOZs5UhX4LeEiGXg2acWrcSt1iyqKQrCPhuA6O9d5My.png",
    imageAlt: "Diamond stone with cross of living flame burning inside",
    verse: { text: "For our God is a consuming fire", ref: "Hebrews 12:29" },
    declaration: "I burn but I'm not consumed. I carry what cannot die."
  },
  {
    id: 7,
    title: "Storm Crown",
    image: "/AQMuwnjDLB5qcpKNKR8cB7D1JCIwUVH55YwQ1CwxwBeVt1LFwoHctkJr4-EqxEcc7luealmOHzEm81t1QIngLRHX-i2YAtlixooMqpxK7lZSs-I4BxkQTPSu4Qr7nqFZLR9x4GlJp9KczAb7bDQYcukJc_-YWw.png",
    imageAlt: "Golden crown suspended in the eye of a storm with lightning",
    verse: { text: "The Lord reigns, let the earth be glad", ref: "Psalm 97:1" },
    declaration: "I am crowned in the storm. I rule from the eye."
  }
];
