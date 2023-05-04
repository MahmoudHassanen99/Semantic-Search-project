import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const SearchParams = useSearchParams();
  const query = SearchParams ? SearchParams.get("query") : "";
  const [searchQuery, setSearchQuery] = useState(query);

  const handleSearch = (event) => {
    event.preventDefault();
    const encodedquery = encodeURI(searchQuery);
    router.push(`/search?query=${encodedquery}&type=${0}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className="px-5 py-1 w-[480px] sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-[#0e9c7d] placeholder:text-zinc-400"
          type="text"
          placeholder="What are you looking for...?"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#0e9c7d] text-white font-semibold rounded-lg shadow-md hover:bg-[#0a5344] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
