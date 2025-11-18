import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";

export default function SearchPage({ searchParams }) {
  const query = searchParams.q || "";

  return (
    <div className="pt-24 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Search Products</h1>

      <SearchBox defaultValue={query} />

      {query && (
        <SearchResults query={query} />
      )}
    </div>
  );
}
