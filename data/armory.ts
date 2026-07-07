// data/armory.ts
export type Relic = {
  relic: string;
  slug: string;
  subtitle: string;
  scripture: string;
  reference: string;
  supportingScripture?: {
    verse: string;
    reference: string;
  };
  declaration: string;
  meaning: string;
  reflection: string;
  song: string;
  youtube: string;
  image: string;
  tags: string[];
  relatedRelics: string[];
};

export const armory: Relic[] = [
  {
    relic: "Jesus Is An Healer",
    slug: "jesus-is-an-healer",
    song: "Jesus Is An Healer",
    subtitle: "Crowned in the Storm",
    scripture: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.",
    reference: "Isaiah 53:5",
    supportingScripture: {
      verse: "He heals the brokenhearted and binds up their wounds.",
      reference: "Psalm 147:3"
    },
    declaration: "By His wounds, I am healed.",
    meaning: "The Storm Crown is not earned in calm waters. It is placed on those who have stood in the downpour and not drowned. It marks warriors who carry healing not as a theory, but as a scar.",
    reflection: "I wrote this after a season where the storm didn't let up. I kept asking God to stop the rain. He didn't. Instead He showed me He was in the rain with me. Isaiah 53:5 became my anchor — 'by His wounds we are healed.' Not 'we might be' or 'we could be.' We ARE. The crown comes after the crushing, and the healing flows from His wounds, not our strength.",
    youtube: "https://youtu.be/stsryByK5h8",
    image: "/file_000000000fa471f882fd16e52afa59fd.png",
    tags: ["HEALING", "WORSHIP", "ISAIAH 53", "STORM"],
    relatedRelics: ["heaven-calling", "scars-that-preach"]
  },
  {
    relic: "Heaven Calling",
    slug: "heaven-calling",
    song: "Heaven Calling",
    subtitle: "The Voice That Finds Us",
    scripture: "The Lord came and stood there, calling as at the other times, 'Samuel! Samuel!' Then Samuel said, 'Speak, for your servant is listening.'",
    reference: "1 Samuel 3:10",
    declaration: "When He calls my name, I rise.",
    meaning: "Heaven doesn't whisper suggestions. It calls names. When God speaks your name, the valley ends and the ascent begins.",
    reflection: "THE CALL\nHeaven doesn't whisper suggestions. It calls names. When God speaks your name, the valley ends and the ascent begins. I was in the valley when He called. Not ready. Not clean. But He called anyway.",
    youtube: "https://youtu.be/oxNauKuxg4Q",
    image: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    tags: ["CINEMATIC WORSHIP", "VIKING", "ORCHESTRAL", "CHORAL"],
    relatedRelics: ["jesus-is-an-healer", "horn-of-war"]
  },
  {
    relic: "Horn of War",
    slug: "horn-of-war",
    song: "Horn of War",
    subtitle: "The Battle Cry",
    scripture: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming.",
    reference: "Joel 2:1",
    declaration: "Sound the alarm. The war is here.",
    meaning: "The Horn of War isn't just noise. It's a call to stand. A call to remember who you are and whose you are. The trumpet in Zion was never meant for comfort — it was meant for courage.",
    reflection: "THE SILENCE\nBefore the horn, there is silence. Not peace — silence. The moment before war breaks. God uses silence to prepare warriors. He called me, then He armed me.",
    youtube: "https://youtu.be/M4wGCg5oCx0",
    image: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp",
    tags: ["CINEMATIC WORSHIP", "VIKING WAR HYMN", "ORCHESTRAL"],
    relatedRelics: ["heaven-calling", "scars-that-preach"]
  },
  {
    relic: "Scars That Preach",
    slug: "scars-that-preach",
    song: "im on fire",
    subtitle: "Born Through The Fire",
    scripture: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.",
    reference: "2 Corinthians 12:9",
    supportingScripture: {
      verse: "I bear on my body the marks of Jesus.",
      reference: "Galatians 6:17"
    },
    declaration: "My scars preach louder than my sermons.",
    meaning: "God doesn't hide your scars. He hallows them. Every wound becomes a weapon. Every mark becomes a message. The enemy meant to shame you. God uses it to save others.",
    reflection: "THE MARKS\nI used to hide my scars. The addiction. The shame. The nights I thought I'd never see morning. Then God said, 'Show them. That's where My power lives.' 2 Corinthians 12:9 became my anthem. His strength is made perfect in my weakness. Now my scars preach the gospel better than my words ever could.",
    youtube: "https://youtu.be/8XQUhWB_N5M",
    image: "/file_0000000065a071f5832301f52d11fb80.png",
    tags: ["TESTIMONY", "WORSHIP", "GRACE", "WEAKNESS", "CHRISTIAN ROCK"],
    relatedRelics: ["horn-of-war", "lion-and-lamb"]
  },
  {
    relic: "Lion and Lamb",
    slug: "lion-and-lamb",
    song: "Lion and Lamb",
    subtitle: "The Paradox of the Slain",
    scripture: "Then one of the elders said to me, 'Do not weep! See, the Lion of the tribe of Judah, the Root of David, has triumphed. He is able to open the scroll and its seven seals.'",
    reference: "Revelation 5:5",
    supportingScripture: {
      verse: "Then I saw a Lamb, looking as if it had been slain, standing at the center of the throne.",
      reference: "Revelation 5:6"
    },
    declaration: "The Lamb who was slain is the Lion who reigns.",
    meaning: "He didn't come to dominate. He came to be slaughtered. Weakness was the weapon. The cross looked like defeat, but it was the throne room of heaven breaking into earth.",
    reflection: "THE LAMB\nRevelation 5 wrecked me. John weeps because no one is worthy. Then an elder says 'Do not weep. The Lion has triumphed.' John looks for a Lion... and sees a Lamb, slain. That's the paradox of the Kingdom. God conquers by being crushed. He rules by being slaughtered. My strength had to die so His could live in me.",
    youtube: "https://youtu.be/17bwrxNCCBs",
    image: "/AQMD_81y8KYxQT01wEtDigzM9YS3l862OtPv5Nl1QlgdfAnOR1t1VNIvwOAzU5ZjySzHJixWWpJzctzObN4JM2wd.png",
    tags: ["CINEMATIC WORSHIP", "REVELATION 5", "VIKING", "ORCHESTRAL"],
    relatedRelics: ["scars-that-preach", "spiritual-journey"]
  },
  {
    relic: "Spiritual Journey",
    slug: "spiritual-journey",
    song: "Spiritual Journey - god kept me alive",
    subtitle: "Kept By Grace",
    scripture: "I will restore to you the years that the swarming locust has eaten.",
    reference: "Joel 2:25",
    declaration: "God kept me alive for a reason.",
    meaning: "God doesn't just heal the wound. He redeems the time. Every year the enemy stole, every season wasted in the valley — He restores it in the ascent.",
    reflection: "THE RESTORATION\nYou thought you were too far gone. Too broken. Too late. But God kept you alive for a reason. Your story isn't over. The same God who called Samuel calls you. The Lion and Lamb showed me the path. Now I walk it.",
    youtube: "https://youtu.be/umDFjJjh0_c",
    image: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp",
    tags: ["CINEMATIC WORSHIP", "TESTIMONY"],
    relatedRelics: ["lion-and-lamb", "iron-collide"]
  },
  {
    relic: "Iron Collide",
    slug: "iron-collide",
    song: "Iron Collide",
    subtitle: "Sharpened Together",
    scripture: "As iron sharpens iron, so one person sharpens another.",
    reference: "Proverbs 27:17",
    declaration: "God uses friction to form Christ in me.",
    meaning: "Iron doesn't sharpen iron by accident. It takes heat. Pressure. Friction. God will put people in your life that scrape against your pride until Christ is formed.",
    reflection: "THE FORGE\nThe journey wasn't solo. God put brothers in my path who scraped against my pride. Pastors who corrected me. Friends who called out my sin. It hurt. But iron doesn't sharpen iron by accident. It takes heat. Pressure. Friction. That's how He forms Christ in us.",
    youtube: "https://youtu.be/fIkUDO2emoc",
    image: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp",
    tags: ["CINEMATIC WORSHIP", "VIKING WAR HYMN", "ORCHESTRAL"],
    relatedRelics: ["spiritual-journey", "blood-of-the-cross"]
  },
  {
    relic: "Blood of the Cross",
    slug: "blood-of-the-cross",
    song: "Blood of the Cross",
    subtitle: "The Covenant",
    scripture: "And through him to reconcile to himself all things, whether things on earth or things in heaven, by making peace through his blood, shed on the cross.",
    reference: "Colossians 1:20",
    declaration: "His blood binds me to victory.",
    meaning: "Viking blood oaths bound men to vengeance. Christ's blood binds us to victory. Your sin for His righteousness. Your death for His life.",
    reflection: "THE PRICE\nAfter the sharpening came the cross. I realized all the war, all the scars, all the journey — it only matters because of His blood. Viking blood oaths bound men to vengeance. Christ's blood binds us to victory. My sin for His righteousness. My death for His life.",
    youtube: "https://youtu.be/4lcbjsNLlzo",
    image: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp",
    tags: ["CINEMATIC WORSHIP", "ORCHESTRAL", "CHORAL", "SACRED"],
    relatedRelics: ["iron-collide", "lord-of-lords"]
  },
  {
    relic: "Lord of Lords",
    slug: "lord-of-lords",
    song: "Lord of Lords",
    subtitle: "A Spiritual Anthem",
    scripture: "On his robe and on his thigh he has this name written: KING OF KINGS AND LORD OF LORDS.",
    reference: "Revelation 19:16",
    supportingScripture: {
      verse: "Therefore God exalted him to the highest place and gave him the name that is above every name.",
      reference: "Philippians 2:9"
    },
    declaration: "Jesus is Lord of my storm, my scars, and my story.",
    meaning: "The Armory ends where it must — at His feet. Every relic points here. Every scar, every battle, every song bows to one name. He is not one option. He is the Lord of Lords.",
    reflection: "THE THRONE\nThis is where the Armory ends and worship begins. After the healing, the calling, the war, the scars, the Lamb, the journey, the sharpening, the cross — there is only one response. He is Lord. Not just of heaven. Lord of my storm. Lord of my scars. Lord of my story. Every relic in this Armory bows to Him. King of Kings. Lord of Lords.",
    youtube: "https://youtu.be/9vP0NPrEv9s",
    image: "/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    tags: ["WORSHIP", "VICTORY", "KINGSHIP", "REVELATION 19"],
    relatedRelics: ["blood-of-the-cross", "jesus-is-an-healer"]
  }
];
