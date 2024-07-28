"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filter-group";

interface Props {
  className?: string;
}

export const Filter: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title text={"Filter"} size="sm" className="mb-5 font-bold" />
      {/* upper checkbox */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Collect" value="1" />
        <FilterCheckbox text="New products" value="2" />
      </div>
      {/* Filter price */}
      <div className="mt-5 border-y border-y-neutral-100 my-6 pb-7">
        <p className="font-bold mb-3">Price from Up to </p>
        <div>
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input
            type="number"
            min={0}
            max={1000}
            value={500}
            placeholder="1000"
          />
        </div>

        <RangeSlider min={0} max={500} step={10} value={[0, 500]} />

        <CheckboxFiltersGroup
          title="Ingredient"
          className="mt-5"
          limit={6}
          defaultItems={[
            { text: "Cheese sauce", value: "1" },
            { text: "Mozzarella", value: "2" },
            { text: "Garlic", value: "3" },
            { text: "Pickled cucumber", value: "4" },
            { text: "Red onion", value: "5" },
            { text: "tomatoes", value: "6" },
          ]}
          items={[
            { text: "Cheese sauce", value: "Cheese sauce" },
            { text: "Mozzarella", value: "Mozzarella" },
            { text: "Garlic", value: "Garlic" },
            { text: "Pickled cucumber", value: "Pickled cucumber" },
            { text: "Red onion", value: "Red onion" },
            { text: "tomatoes", value: "tomatoes" },
          ]}
        />
      </div>
    </div>
  );
};