interface RelatedCategoriesProps {
    categories: string[]
  }
  
  export function RelatedCategories({ categories }: RelatedCategoriesProps) {
    return (
      <div className="mt-16 pb-8">
        <h2 className="text-xl font-semibold mb-4">Related Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border hover:border-gray-400 text-sm transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    )
  }
  
  