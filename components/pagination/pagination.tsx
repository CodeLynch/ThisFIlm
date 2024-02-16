export default function PaginationComponent(){
    return <nav>
    <ul className="inline-flex -space-x-px text-sm">
      <li>
        <div className="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-black border border-e-0 border-cyan-700 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">Previous</div>
      </li>
      <li>
        <div className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-white bg-black border border-cyan-700 hover:bg-gray-100 hover:text-gray-700">1</div>
      </li>
      <li>
        <div className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-white bg-black border border-cyan-700 hover:bg-gray-100 hover:text-gray-700">2</div>
      </li>
      <li>
        <div className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-white bg-black border border-cyan-700 hover:bg-gray-100 hover:text-gray-700">3</div>
      </li>
      <li>
        <div className="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-black border border-e-0 border-cyan-700 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">Next</div>
      </li>
    </ul>
  </nav>
}