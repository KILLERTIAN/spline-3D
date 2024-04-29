

function Navbar() {
  return (
    <div className="w-100 h-[10vh] bg-green-100 px-10"> 
    <div className="flex flex-row items-center justify-between">
        <div className="text-4xl text-black font-bold p-8 px-10">Spline-3D</div>
        <ul className="flex flex-row">
            <li className="p-5">Home</li>
            <li className="p-5">About</li>
            <li className="p-5">Spline</li>
            <li className="p-5">React + Vite</li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar