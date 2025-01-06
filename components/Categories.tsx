interface Category {
    title: string
    items: string[]
  }
  
  const categories: Category[] = [
    {
      title: "Icons",
      items: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"],
    },
    {
      title: "Shoes",
      items: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"],
    },
    {
      title: "Clothing",
      items: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"],
    },
    {
      title: "Kids'",
      items: [
        "Infant & Toddler Shoes",
        "Kids' Shoes",
        "Kids' Jordan Shoes",
        "Kids' Basketball Shoes",
      ],
    },
  ]
  
  export function Categories() {
    return (
      <nav className="hidden md:block">
        <div className="container sm:w-[880] mx-auto px-4 py-8">
          <div className="grid grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category.title}>
                <h3 className="mb-4 font-bold">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-gray-900"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </nav>
    )
  }
  
  