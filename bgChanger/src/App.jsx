import { useState } from "react"

function App() {
  const [color, setColor] = useState("#333333")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg px-6 py-4 rounded-xl">
          <button onClick={() => setColor("red")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("blue")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("pink")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={() => setColor("orange")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "orange" }}>Orange</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-5 py-2 rounded-lg text-black font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={() => setColor("purple")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "purple" }}>Purple</button>
          <button onClick={() => setColor("teal")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "teal" }}>Teal</button>
          <button onClick={() => setColor("cyan")} className="outline-none px-5 py-2 rounded-lg text-black font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "cyan" }}>Cyan</button>
          <button onClick={() => setColor("brown")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "brown" }}>Brown</button>
          <button onClick={() => setColor("lime")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "lime" }}>Lime</button>
          <button onClick={() => setColor("olive")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "olive" }}>Olive</button>
          <button onClick={() => setColor("violet")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "violet" }}>Violet</button>
          <button onClick={() => setColor("gray")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "gray" }}>Gray</button>
          <button onClick={() => setColor("indigo")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "indigo" }}>Indigo</button>
          <button onClick={() => setColor("fuchsia")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "fuchsia" }}>Fuchsia</button>
          <button onClick={() => setColor("skyblue")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "skyblue" }}>Skyblue</button>
          <button onClick={() => setColor("magenta")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "magenta" }}>Magenta</button>
          <button onClick={() => setColor("coral")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "coral" }}>Coral</button>
          <button onClick={() => setColor("salmon")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "salmon" }}>Salmon</button>
          <button onClick={() => setColor("khaki")} className="outline-none px-5 py-2 rounded-lg text-grey font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "khaki" }}>Khaki</button>
          <button onClick={() => setColor("navy")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "navy" }}>Navy</button>
          <button onClick={() => setColor("plum")} className="outline-none px-5 py-2 rounded-lg text-white font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "plum" }}>Plum</button>
        </div>
      </div>
    </div>
  )
}

export default App
