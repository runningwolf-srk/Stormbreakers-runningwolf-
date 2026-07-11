export type Scripture = {
  ref: string
  text: string
  relics: string[]
  chapters: string[]
}

export type Theme = {
  slug: string
  title: string
  icon: string
  scriptures: Scripture[]
}

export const themes: Theme[] = [
  {
    slug: `healing`,
    title: `Healing`,
    icon: `💧`,
    scriptures: [
      {
        ref: `Psalm 23:4`,
        text: `Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.`,
        relics: [`jesus-is-an-healer`],
        chapters: [`the-valley`]
      },
      {
        ref: `1 Peter 2:24`,
        text: `He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By his wounds you have been healed.`,
        relics: [`jesus-is-an-healer`],
        chapters: [`the-valley`, `the-journey`]
      },
      {
        ref: `Isaiah 53:5`,
        text: `But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.`,
        relics: [`jesus-is-an-healer`, `blood-of-cross`],
        chapters: [`the-valley`]
      },
      {
        ref: `Psalm 147:3`,
        text: `He heals the brokenhearted and binds up their wounds.`,
        relics: [`jesus-is-an-healer`],
        chapters: [`the-valley`, `the-hope`]
      }
    ]
  },
  {
    slug: `calling`,
    title: `Calling`,
    icon: `🔥`,
    scriptures: [
      {
        ref: `Jeremiah 1:5`,
        text: `Before I formed you in the womb I knew you, before you were born I set you apart.`,
        relics: [`running-wolf`],
        chapters: [`the-encounter`]
      },
      {
        ref: `Isaiah 49:2`,
        text: `He made my mouth like a sharp sword; in the shadow of his hand he hid me; he made me a polished arrow.`,
        relics: [`running-wolf-blade`],
        chapters: [`the-commission`, `the-battle`]
      },
      {
        ref: `Hebrews 4:12`,
        text: `For the word of God is living and active, sharper than any two-edged sword.`,
        relics: [`running-wolf-blade`],
        chapters: [`the-battle`]
      },
      {
        ref: `Ezekiel 3:9`,
        text: `Like the hardest stone, harder than flint, I have made your forehead; do not be afraid of them or terrified by them.`,
        relics: [`wolf-fang`],
        chapters: [`the-commission`, `the-battle`]
      },
      {
        ref: `Amos 3:8`,
        text: `The lion has roared; who will not fear? The Lord God has spoken; who can but prophesy?`,
        relics: [`wolf-fang`],
        chapters: [`the-commission`]
      },
      {
        ref: `Isaiah 6:8`,
        text: `Then I heard the voice of the Lord saying, "Whom shall I send?" And I said, "Here am I. Send me!"`,
        relics: [`running-wolf`],
        chapters: [`the-commission`]
      },
      {
        ref: `Romans 8:28`,
        text: `And we know that in all things God works for the good of those who love him, who have been called according to his purpose.`,
        relics: [`running-wolf`],
        chapters: [`the-encounter`, `the-journey`]
      }
    ]
  },
  {
    slug: `spiritual-warfare`,
    title: `Spiritual Warfare`,
    icon: `⚔️`,
    scriptures: [
      {
        ref: `1 Samuel 7:10`,
        text: `Then the Lord thundered with a mighty sound that day against the Philistines and threw them into confusion.`,
        relics: [`thunder-drums`],
        chapters: [`the-battle`]
      },
      {
        ref: `Joel 2:1`,
        text: `Blow the trumpet in Zion; sound the alarm on my holy hill.`,
        relics: [`war-cry`, `horn-of-war`],
        chapters: [`the-battle`]
      },
      {
        ref: `2 Corinthians 10:4`,
        text: `The weapons we fight with are not the weapons of the world. On the contrary, they have divine power to demolish strongholds.`,
        relics: [`war-cry`],
        chapters: [`the-battle`]
      },
      {
        ref: `Ephesians 6:11`,
        text: `Put on the full armor of God, so that you can take your stand against the devil's schemes.`,
        relics: [`war-cry`],
        chapters: [`the-armory`, `the-battle`]
      },
      {
        ref: `Numbers 10:9`,
        text: `When you go into battle in your own land against an enemy who is oppressing you, sound a blast on the trumpets.`,
        relics: [`horn-of-war`],
        chapters: [`the-battle`]
      },
      {
        ref: `Proverbs 27:17`,
        text: `As iron sharpens iron, so one person sharpens another.`,
        relics: [`iron-collide`],
        chapters: [`the-commission`, `the-battle`]
      },
      {
        ref: `Ezekiel 3:9`,
        text: `Like the hardest stone, harder than flint, I have made your forehead.`,
        relics: [`wolf-fang`],
        chapters: [`the-commission`, `the-battle`]
      },
      {
        ref: `Amos 3:8`,
        text: `The lion has roared; who will not fear? The Lord God has spoken; who can but prophesy?`,
        relics: [`wolf-fang`],
        chapters: [`the-commission`]
      }
    ]
  },
  {
    slug: `redemption`,
    title: `Redemption`,
    icon: `✝️`,
    scriptures: [
      {
        ref: `Isaiah 53:5`,
        text: `But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.`,
        relics: [`blood-of-cross`, `jesus-is-an-healer`],
        chapters: [`the-valley`]
      },
      {
        ref: `Ephesians 1:7`,
        text: `In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God's grace.`,
        relics: [`blood-of-cross`],
        chapters: [`the-redemption`]
      },
      {
        ref: `Colossians 1:13-14`,
        text: `For he has rescued us from the dominion of darkness and brought us into the kingdom of the Son he loves, in whom we have redemption, the forgiveness of sins.`,
        relics: [`blood-of-cross`],
        chapters: [`the-redemption`, `the-kingdom`]
      },
      {
        ref: `Titus 2:14`,
        text: `Who gave himself for us to redeem us from all wickedness and to purify for himself a people that are his very own, eager to do what is good.`,
        relics: [`blood-of-cross`],
        chapters: [`the-redemption`, `the-commission`]
      }
    ]
  },
  {
    slug: `worship`,
    title: `Worship`,
    icon: `🙌`,
    scriptures: [
      {
        ref: `Psalm 29:3`,
        text: `The voice of the Lord is over the waters; the God of glory thunders, the Lord, over many waters.`,
        relics: [`thunder-drums`],
        chapters: [`the-battle`, `the-throne`]
      },
      {
        ref: `Revelation 19:16`,
        text: `On his robe and on his thigh he has a name written, King of kings and Lord of lords.`,
        relics: [`lord-of-lords`],
        chapters: [`the-throne`]
      },
      {
        ref: `James 4:8`,
        text: `Draw near to God, and he will draw near to you.`,
        relics: [`spiritual-journey`],
        chapters: [`the-journey`, `the-throne`]
      },
      {
        ref: `Psalm 29:10`,
        text: `The Lord sits enthroned over the flood; the Lord sits enthroned as king forever.`,
        relics: [`storm-crown`],
        chapters: [`the-storm`, `the-throne`]
      }
    ]
  },
  {
    slug: `kingship`,
    title: `Kingship`,
    icon: `👑`,
    scriptures: [
      {
        ref: `Revelation 19:16`,
        text: `On his robe and on his thigh he has a name written, King of kings and Lord of lords.`,
        relics: [`lord-of-lords`],
        chapters: [`the-throne`]
      },
      {
        ref: `Revelation 5:5-6`,
        text: `Behold, the Lion of the tribe of Judah, the Root of David, has conquered... Then I saw a Lamb standing, as though it had been slain.`,
        relics: [`lion-and-lamb`],
        chapters: [`the-throne`]
      },
      {
        ref: `Psalm 29:10`,
        text: `The Lord sits enthroned over the flood; the Lord sits enthroned as king forever.`,
        relics: [`storm-crown`],
        chapters: [`the-storm`, `the-throne`]
      }
    ]
  },
  {
    slug: `fire`,
    title: `Fire`,
    icon: `🔥`,
    scriptures: [
      {
        ref: `Galatians 2:20`,
        text: `I have been crucified with Christ. It is no longer I who live, but Christ who lives in me.`,
        relics: [`im-on-fire`],
        chapters: [`the-fire`, `the-valley`]
      },
      {
        ref: `Hebrews 12:29`,
        text: `For our God is a consuming fire.`,
        relics: [`eternal-fire`],
        chapters: [`the-fire`, `the-throne`]
      },
      {
        ref: `Leviticus 6:13`,
        text: `The fire on the altar must be kept burning; it must not go out.`,
        relics: [`eternal-fire`],
        chapters: [`the-fire`]
      },
      {
        ref: `2 Kings 2:13-14`,
        text: `Elisha picked up the cloak that had fallen from Elijah. The Spirit of the Lord God is upon me, because the Lord has anointed me.`,
        relics: [`spirit-mantle`],
        chapters: [`the-commission`, `the-fire`]
      },
      {
        ref: `Isaiah 61:1`,
        text: `The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor.`,
        relics: [`spirit-mantle`],
        chapters: [`the-commission`]
      }
    ]
  }
]
