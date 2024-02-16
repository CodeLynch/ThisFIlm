export default function SearchBar(){
 return <form>   
     <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
     <div className="relative">
         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
         </div>
         <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900  border border-transparent rounded-lg bg-gray-700 focus:ring-inherit text-white focus:outline-none focus:ring-0 focus:border-white" placeholder="Search for Movies..." required/>
         <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-white">Search</button>
     </div>
 </form>
 
}