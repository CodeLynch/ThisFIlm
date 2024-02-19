export default function PaginationComponent(props:{
  page: number,
  lastPage: number
}){
    return <nav>
    <ul className="inline-flex -space-x-px text-sm">
      <li>
        <div className={"flex items-center justify-center px-3 h-8 ms-0 leading-tight " + (props.page === 1? "cursor-default text-gray-400 bg-gray-300 border border-e-0 border-gray-400 rounded-s-lg ": " cursor-pointer text-white bg-black border border-e-0 border-cyan-700 rounded-s-lg hover:bg-gray-100 hover:text-gray-700")}>Previous</div>
      </li>
      <li>
        <div className={"flex items-center justify-center px-3 h-8 ms-0 leading-tight " + (props.page === props.lastPage? "cursor-default text-gray-400 bg-gray-300 border border-e-0 border-gray-400 rounded-e-lg ": " cursor-pointer text-white bg-black border border-e-0 border-cyan-700 rounded-e-lg hover:bg-gray-100 hover:text-gray-700")}>Next</div>
      </li>
    </ul>
  </nav>
}