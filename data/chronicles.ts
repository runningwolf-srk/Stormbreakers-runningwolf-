// data/chronicles.ts
export type Chapter = {
  num: number;
  title: string;
  slug: string;
  verse: string;
  ref: string;
  relic: string;
  content: string[]; // Each string = paragraph
};

export const chronicles: Chapter[] = [
  {
    num: 1,
    title: "The Valley",
    slug: "the-valley",
    verse: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    ref: "Psalm 23:4",
    relic: "jesus-is-an-healer",
    content: [
      "I was in the valley before I knew its name. The storm didn’t let up. Every prayer felt like shouting into wind. I kept asking God to stop the rain.",
      "He didn’t.",
      "Instead, He showed me He was in the rain with me. Isaiah 53:5 became my anchor — 'by His wounds we are healed.' Not 'we might be' or 'we could be.' We ARE.",
      "The Valley isn’t punishment. It’s preparation. It’s where you learn that healing doesn’t come from your strength. It flows from His wounds.",
      "The Storm Crown isn’t given to those who avoided the downpour. It’s placed on those who stood in it and did not drown."
    ]
  },
  {
    num: 2,
    title: "The Encounter",
    slug: "the-encounter", 
    verse: "The Lord came and stood there, calling as at the other times, 'Samuel! Samuel!' Then Samuel said, 'Speak, for your servant is listening.'",
    ref: "1 Samuel 3:10",
    relic: "heaven-calling",
    content: [
      "Heaven doesn't whisper suggestions. It calls names.",
      "I was not ready. Not clean. Not qualified. But He called anyway. 'Jessy.'",
      "When God speaks your name, the valley ends and the ascent begins. The shame that kept you hiding gets burned off by the sound of His voice.",
      "You don’t climb out of the valley. You get called out."
    ]
  },
  {
    num: 3,
    title: "The Armory",
    slug: "the-armory",
    verse: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming.",
    ref: "Joel 2:1",
    relic: "horn-of-war",
    content: [
      "Before the horn, there is silence. Not peace — silence. The moment before war breaks.",
      "God called me out of the valley. Then He armed me.",
      "The Horn of War isn’t just noise. It’s a call to stand. A call to remember who you are and whose you are.",
      "The trumpet in Zion was never meant for comfort. It was meant for courage."
    ]
  },
  {
    num: 4,
    title: "The Commission",
    slug: "the-commission",
    verse: "As iron sharpens iron, so one person sharpens another.",
    ref: "Proverbs 27:17",
    relic: "iron-collide",
    content: [
      "You don’t go to war alone. God puts brothers in your path who scrape against your pride until Christ is formed.",
      "It hurt. Pastors who corrected me. Friends who called out my sin. Heat. Pressure. Friction.",
      "Iron doesn’t sharpen iron by accident. The Commission isn’t just a calling — it’s a forging.",
      "He uses people to hammer you into a weapon."
    ]
  },
  {
    num: 5,
    title: "The Journey",
    slug: "the-journey",
    verse: "I will restore to you the years that the swarming locust has eaten.",
    ref: "Joel 2:25",
    relic: "spiritual-journey",
    content: [
      "You thought you were too far gone. Too broken. Too late.",
      "But God kept you alive for a reason. Your story isn't over.",
      "The same God who called Samuel calls you. The Lion and Lamb showed me the path. Now I walk it.",
      "He doesn’t just heal the wound. He redeems the time. Every year the enemy stole — He restores it."
    ]
  },
  {
    num: 6,
    title: "The Battle",
    slug: "the-battle",
    verse: "And through him to reconcile to himself all things, whether things on earth or things in heaven, by making peace through his blood, shed on the cross.",
    ref: "Colossians 1:20",
    relic: "blood-of-the-cross",
    content: [
      "After the sharpening came the cross.",
      "I realized all the war, all the scars, all the journey — it only matters because of His blood.",
      "Viking blood oaths bound men to vengeance. Christ's blood binds us to victory.",
      "My sin for His righteousness. My death for His life. That’s the price. That’s the peace."
    ]
  },
  {
    num: 7,
    title: "The Witness",
    slug: "the-witness",
    verse: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'",
    ref: "2 Corinthians 12:9",
    relic: "scars-that-preach",
    content: [
      "I used to hide my scars. The addiction. The shame. The nights I thought I'd never see morning.",
      "Then God said, 'Show them. That's where My power lives.'",
      "2 Corinthians 12:9 became my anthem. His strength is made perfect in my weakness.",
      "Now my scars preach the gospel better than my words ever could. God doesn't hide your scars. He hallows them."
    ]
  },
  {
    num: 8,
    title: "The Hope",
    slug: "the-hope",
    verse: "On his robe and on his thigh he has this name written: KING OF KINGS AND LORD OF LORDS.",
    ref: "Revelation 19:16",
    relic: "lord-of-lords",
    content: [
      "This is where the Armory ends and worship begins.",
      "After the healing, the calling, the war, the scars, the Lamb, the journey, the sharpening, the cross — there is only one response.",
      "He is Lord. Not just of heaven. Lord of my storm. Lord of my scars. Lord of my story.",
      "Every relic in this Armory bows to Him. King of Kings. Lord of Lords.",
      "The hope isn’t that the battle ends. The hope is who sits on the throne when it does."
    ]
  }
];
