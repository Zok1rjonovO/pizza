import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";

interface Props {
  className?: string;
}

export const Filter: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title text={"Filter"} size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Collect" value="1" />
        <FilterCheckbox text="New products" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 my-6 pb-7">
        <p className="font-bold mb-3">Price from Up to </p>
        <div>
            <Input type="number" placeholder="0" min={0} max={30000} defaultValue={0} />
            <Input type="number"  min={0} max={30000} placeholder="30000" />
        </div>
      </div>
    </div>
  );
};