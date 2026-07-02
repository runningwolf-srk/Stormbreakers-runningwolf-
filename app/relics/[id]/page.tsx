import Link from 'next/link'
import { notFound } from 'next/navigation'

const relics = [
  {
    id: 1,
    title: "Horn of War",
    subtitle: "The Battle Cry",
    verse: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming.",
    ref: "Joel 2:1",
    tags: "CINEMATIC WORSHIP • VIKING WAR HYMN • ORCHESTRAL",
    videoId: "M4wGCg5oCx0",
    videoTitle: "Horn of war mahalla",
    backgroundImage: "/images/horn-of-war-bg.jpg",
    progress: "01 / 06",
    devotionalTitle: "THE SILENCE",
    devotional: "Before the horn, there is silence. Not peace - silence. The moment before war breaks. God uses silence to prepare warriors. David was anointed in the field before he ever faced Goliath. Your horn is coming. Let the silence train you."
  },
  {
    id: 2,
    title: "Heaven Calling",
    subtitle: "The Voice That Finds Us",
    verse: "The Lord came and stood there, calling as at the other times, 'Samuel! Samuel!' Then Samuel said, 'Speak, for your servant is listening.'",
    ref: "1 Samuel 3:10",
    tags: "CINEMATIC WORSHIP • VIKING • ORCHESTRAL • CHORAL",
    videoId: "oxNauKuxg4Q",
    videoTitle: "Heaven calling in Viking",
    backgroundImage: "/images/heaven-calling-bg.jpg",
    progress: "02 / 06",
    devotionalTitle: "THE CALL",
    devotional: "Heaven doesn't whisper suggestions. It calls names. When God speaks your name, the valley ends and the ascent begins. Samuel thought it was Eli. You might think it's coincidence. It's not. Answer: Speak, Lord."
  },
  {
    id: 3,
    title: "Iron Collide",
    subtitle: "Sharpened Together",
    verse: "As iron sharpens iron, so one person sharpens another.",
    ref: "Proverbs 27:17",
    tags: "CINEMATIC WORSHIP • VIKING WAR HYMN • ORCHESTRAL",
    videoId: "odIsEMUtNJI",
    videoTitle: "Iron collide hybrid",
    backgroundImage: "/images/iron-collide-bg.jpg",
    progress: "03 / 06",
    devotionalTitle: "THE FORGE",
    devotional: "
