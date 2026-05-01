import { useState } from "react"

export default function App() {
  const [color, setColor] = useState('gray-800');

  return (
    <div className={`w-full h-screen duration-200 bg-${color}`}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl px-4 py-3">
          <button onClick={() => setColor('red-600')} className="outline-none px-4 bg-red-600 py-1 rounded-xl text-white shadow-lg font-bold">Red</button>
          <button onClick={() => setColor('green-600')} className="outline-none px-4 bg-green-600 py-1 rounded-xl text-white shadow-lg font-bold">Green</button>
          <button onClick={() => setColor('orange-500')} className="outline-none px-4 bg-orange-500 py-1 rounded-xl text-white shadow-lg font-bold">Orange</button>
          <button onClick={() => setColor('blue-500')} className="outline-none px-4 bg-blue-500 py-1 rounded-xl text-white shadow-lg font-bold">Blue</button>
          <button onClick={() => setColor('yellow-400')} className="outline-none px-4 bg-yellow-400 py-1 rounded-xl text-black shadow-lg font-bold">Yellow</button>
          <button onClick={() => setColor('white')} className="outline-none px-4 bg-white py-1 rounded-xl text-black shadow-lg font-bold">White</button>
          <button onClick={() => setColor('gray-800')} className="outline-none px-4 bg-gray-800 py-1 rounded-xl text-white shadow-lg font-bold">Gray</button>
          <button onClick={() => setColor('black')} className="outline-none px-4 bg-black py-1 rounded-xl text-white shadow-lg font-bold">Black</button>
        </div>
      </div>
    </div>
  )
}
