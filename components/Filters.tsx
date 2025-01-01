"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Category } from "@/lib/types";
import { ChevronDown } from "lucide-react";

interface FiltersProps {
  categories: Category[];
}

export function Filters({ categories }: FiltersProps) {
  const [showAll, setShowAll] = useState(false);

  const displayedCategories = showAll ? categories : categories.slice(0, 8);

  return (
    <div className="w-full max-w-xs space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Categories</h3>
        <div className="space-y-3">
          {displayedCategories.map((category) => (
            <div key={category.name} className="flex items-center space-x-2">
              <Checkbox id={category.name} />
              <label
                htmlFor={category.name}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category.name} ({category.count})
              </label>
            </div>
          ))}
        </div>
        {categories.length > 8 && (
          <Button
            variant="ghost"
            className="flex items-center text-sm rounded-3xl shadow-md hover:bg-black hover:text-white"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </Button>
        )}
      </div>

      <div className="space-y-4 border-black">
        <h3 className="text-lg font-semibold">Gender</h3>
        <div className="space-y-3">
          {["Men", "Women", "Unisex"].map((gender) => (
            <div key={gender} className="flex items-center space-x-2">
              <Checkbox id={gender} />
              <label
                htmlFor={gender}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {gender}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* by Kids */}

      <div className="space-y-4 border-t">
        <h3 className="text-lg font-semibold">Kids</h3>
        <div className="space-y-3">
          {["Boys", "Girls"].map((kids) => (
            <div key={kids} className="flex items-center space-x-2">
              <Checkbox id={kids} />
              <label
                htmlFor={kids}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {kids}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
