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
  youtubeId?: string;
  youtubeIdBonus?: string;
  audioFile?: string;
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
    youtubeId: "4lcbjsNLlzo",
    audioFile: "blood-of-the-cross.mp3",
    genre: "Cinematic Worship • Orchestral • Choral",
    story: [
      {
        title: "THE WEIGHT",
        text: "Every sin carried. Every shame lifted. The cross was not symbolic. It
