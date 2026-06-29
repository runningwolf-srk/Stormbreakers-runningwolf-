// app/music//page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

type StoryItem = {
  title: string;
  text: string;
};

type SongData = {
  slug: string;
  title: string;
  subtitle: string;
  scripture: string;
  youtubeId: string;
  youtubeIdBonus?: string;
  audioFile?: string; // expects file in public/audio/
  genre: string;
  story: StoryItem[];
  meaning: string;
  sagaNext?: string;
  sagaPrev?: string;
  trackNumber: string;
};

const songs: Record<string, SongData> = {
  "blood-of-the-cross": {
    slug: "blood-of-the-cross",
    title: "Blood of the Cross",
    subtitle: "The Sacrifice",
    scripture: "But he was pierced for our transgressions, he was crushed for our iniquities. — Isaiah 53:5",
    youtubeId: "YOUR_YOUTUBE_ID_1",
    audioFile: "blood-of-the-cross.mp3",
    genre: "Cinematic Worship • Orchestral • Choral",
    story: [
      {
        title: "THE WEIGHT",
        text: "Every sin carried. Every shame lifted. The cross was not symbolic. It was execution."
      },
      {
        title: "THE EXCHANGE",
        text: "His blood for your freedom. His wounds for your healing. The price was paid in full."
      },
      {
        title: "THE VICTORY",
        text: "Death thought it won. The grave thought it held Him. Three days later, the stone rolled away."
      }
    ],
    meaning: "The cross is not the end of the story. It's where your story begins.",
    sagaNext: "horn-of-war",
    track
