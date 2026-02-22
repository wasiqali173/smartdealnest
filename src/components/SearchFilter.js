export default function SearchFilter({ search, setSearch, category, setCategory }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 text-black bg-white border rounded-lg w-full md:w-1/2"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 text-black bg-white border rounded-lg w-full md:w-1/3"
      >
        <option value="">All Categories</option>
        <option value="Tech">Tech</option>
        <option value="Home">Home</option>
        <option value="Kitchen">Kitchen</option>
      </select>
    </div>
  );
}
