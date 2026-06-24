import Image from 'next/image'
import Link from 'next/link'

export default function HeavenIsCalling() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/music" className="text-gray-400 hover:text-white mb-8 inline-block">← Back to Music</Link>
        
        <Image 
          src="/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp" 
          alt="Heaven Is Calling"
          width={600}
          height={600}
          className="w-full max-w-md mx-auto rounded-lg mb-8 shadow-2xl shadow-blue-900/30"
        />
        
        <h1 className="text-4xl font-bold text-center mb-2">Heaven Is Calling</h1>
        <p className="text-center text-gray-400 mb-8">RUNNINGWOLF | Jessy Marquez</p>

        <div className="bg-gray-900/50 border border-red-900/30 rounded-lg p-6 mb-12 text-center">
          <p className="text-red-200 font-semibold mb-2">Official Visualizer</p>
          <p className="text-gray-500 text-sm">YouTube video uploading soon</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h3 className="text-red-400 font-semibold mb-2">🌌 INTRO (0:00–0:25)</h3>
            <p className="italic text-gray-500 mb-2">(soft piano, wind, distant choir)</p>
            <p>I hear it in the silence…<br/>
            A whisper through the storm…<br/>
            Something deeper than the darkness…<br/>
            Is calling me home…</p>
          </div>

          <div>
            <h3 className="text-red-400 font-semibold mb-2">🪶 VERSE 1 (0:25–1:05)</h3>
            <p>I walked through valleys made of stone<br/>
            Carrying burdens not my own<br/>
            The world was heavy on my soul<br/>
            But I still felt a higher call<br/>
            Through broken nights and endless rain<br/>
            I heard a voice beyond the pain<br/>
            Like thunder wrapped in gentle light<br/>
            Pulling me into the fight</p>
          </div>

          <div>
            <h3 className="text-red-400 font-semibold mb-2">🌿 PRE-CHORUS (1:05–1:35)</h3>
            <p>Can you feel it rising now<br/>
            Like fire breaking through the clouds<br/>
            Every scar begins to sing<br/>
            I was made for something more than this</p>
          </div>

          <div>
            <h3 className="text-red-400 font-semibold mb-2">⚔️ CHORUS (1:35–2:20)</h3>
            <p className="italic text-gray-500 mb-2">(MAHALLA CALL & RESPONSE)</p>
            <p className="font-bold text-white text-lg">HEAVEN IS CALLING!<br/>
            CALLING! CALLING!<br/>
            THROUGH THE FIRE, THROUGH THE STORM<br/>
            WE RISE! WE RISE!</p>
            <p className="font-bold text-white text-lg mt-4">I HEAR THE KINGDOM BREAKING THROUGH<br/>
            BREAK THROUGH! BREAK THROUGH!<br/>
            WE ARE THE VOICE THAT WON’T BACK DOWN<br/>
            WE STAND! WE STAND!</p>
            <p className="mt-4">We are the sons of light and flame<br/>
            We lift the name above all names<br/>
            No darkness can erase our path<br/>
            We follow where the heavens call</p>
          </div>

          <div>
            <h3 className="text-red-400 font-semibold mb-2">🛡️ VIKING BRIDGE (2:20–2:55)</h3>
            <p className="italic text-gray-500 mb-2">(slower, heavier, chant tone)</p>
            <p>From frozen seas and shattered ground<br/>
            We rise when hope cannot be found<br/>
            Not by sword nor strength alone<br/>
            But by the light that calls us home</p>
            <p className="italic text-gray-500 mt-2">(background chants: “oh… oh… oh…”) (horn echoes in distance)</p>
          </div>

          <div>
            <h3 className="text-red-400 font-semibold mb-2">🔥 FINAL CHORUS (2:55–3:40)</h3>
            <p className="font-bold text-white text-lg">HEAVEN IS CALLING!<br/>
            CALLING! CALLING!<br/>
            WE ARE THE FIRE IN THE NIGHT<br/>
            WE RISE! WE RISE!<br/>
            NO CHAINS CAN HOLD US ANYMORE<br/>
            WE BREAK! WE BREAK!<br/>
            THE KINGDOM OPENS WIDE ABOVE<br/>
            WE RISE IN LOVE, WE RISE IN LOVE</p>
          </div>

          <div>
            <h3 className="text-red-400 font-semibold mb-2">🌅 OUTRO (3:40–END)</h3>
            <p className="italic text-gray-500 mb-2">(soft piano + choir fade)</p>
            <p>And I will follow where You lead<br/>
            Through every storm You carry me<br/>
            The war is over, I am free<br/>
            Heaven is calling me…<br/>
            <span className="italic text-gray-500">*(echo: “calling… calling… calling…”) *</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
