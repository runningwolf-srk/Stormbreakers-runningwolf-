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
    title: 'The Valley',
    subtitle: 'Brokenness. The storm. The beginning.',
    content: `I woke up to machines. Tubes in my throat. My chest felt like concrete. 

The doctor said "massive heart attack." I was 39. Flatlined. 

They gave up. Jesus didn't. 

That's where God found me. Not in a church. In ICU. Psalm 23 wasn't poetry anymore. It was a map. 

"Even though I walk through the valley of the shadow of death..." 

I wasn't walking. I was flat on my back. But He was with me. 

By His wounds, I was healed. 

This isn't theology. This is my biography.`,
    scripture: {
      ref: 'Psalm 23:4',
      text: 'Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me'
    },
    relicSlug: 'jesus-is-an-healer'
  },
  {
    slug: 'the-encounter',
    title: 'The Encounter',
    subtitle: 'The moment God calls.',
    content: `They pronounced me dead. 

Then I heard my name. Not from the doctors. From Him. 

"Get up." 

I came back with lungs that work and a name I didn't choose. Running Wolf. 

The wolf runs alone, but not without the Shepherd. I died in the valley. I came back for the storm. 

Jeremiah 1:5 wasn't written about someone else. "Before I formed you in the womb I knew you. Before you were born I set you apart." 

He set me apart in ICU. 

He didn't save me to sit. He saved me to run. Into the storm. With a war cry. 

Mahalla of the Storm — that's the pack. That's the mission. 

But I know my Savior will never die.`,
    scripture: {
      ref: 'Jeremiah 1:5',
      text: 'Before I formed you in the womb I knew you, before you were born I set you apart'
    },
    relicSlug: 'running-wolf'
  },
  {
    slug: 'the-armory',
    title: 'The Armory',
    subtitle: 'Preparation before the battle.',
    content: `Chapter coming soon.`,
    scripture: {
      ref: 'Ephesians 6:11',
      text: 'Put on the full armor of God, so that you can take your stand against the devil’s schemes'
    },
    relicSlug: 'war-cry'
  },
  {
    slug: 'the-commission',
    title: 'The Commission',
    subtitle: 'Refinement and brotherhood.',
    content: `Chapter coming soon.`,
    scripture: {
      ref: 'Isaiah 6:8',
      text: 'Then I heard the voice of the Lord saying, "Whom shall I send?" And I said, "Here am I. Send me!"'
    },
    relicSlug: null
  },
  {
    slug: 'the-journey',
    title: 'The Journey',
    subtitle: 'Restoration and purpose.',
    content: `Chapter coming soon.`,
    scripture: {
      ref: 'Jeremiah 29:11',
      text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you'
    },
    relicSlug: null
  },
  {
    slug: 'the-battle',
    title: 'The Battle',
    subtitle: 'Scars, sacrifice, and redemption.',
    content: `This is where the war cry rises. 

The enemy wants silence in the valley. God commands a sound. 

Joel 2:1 says blow the trumpet. Sound the alarm. 

This isn't worship for the church stage. This is warfare. Drums. Steel. A cry that makes hell flinch. 

The weapons we fight with are not the weapons of the world. 

We don't swing swords. We declare Scripture. We sing until strongholds break. 

War Cry was forged here.`,
    scripture: {
      ref: '2 Corinthians 10:4',
      text: 'The weapons we fight with are not the weapons of the world. On the contrary, they have divine power to demolish strongholds'
    },
    relicSlug: 'war-cry'
  },
  {
    slug: 'the-witness',
    title: 'The Witness',
    subtitle: 'The testimony revealed.',
    content: `Chapter coming soon.`,
    scripture: {
      ref: 'Revelation 12:11',
      text: 'They triumphed over him by the blood of the Lamb and by the word of their testimony'
    },
    relicSlug: null
  },
  {
    slug: 'the-hope',
    title: 'The Hope',
    subtitle: 'Worship beyond the storm.',
    content: `Chapter coming soon.`,
    scripture: {
      ref: 'Romans 15:13',
      text: 'May the God of hope fill you with all joy and peace as you trust in him'
    },
    relicSlug: null
  },
]
