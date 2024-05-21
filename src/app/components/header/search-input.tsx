"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useDebounce from "@/hook/useDebounce";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";

const SearchInput = () => {
  const [value, setValue] = useState<string>("");
  const search = useDebounce(value, 500);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `http://135.181.108.207/product_variant/?search=${search}`,
          {
            next: { revalidate: 10 },
          }
        );

        const data = await res.json();
        setData(data.results);
      } catch (error) {
        throw new Error("faild to fetch data");
      }
    };

    if (search.length > 1) {
      getData();
    }
  }, [search]);

  return (
    <div className="w-[500px] relative">
      <div className="flex items-center border border-[#FCB700] rounded-3xl">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search Products..."
          className="border-none focus:outline-none  dark:bg-[#020817] rounded-s-full"
        />
        <Button className="bg-[#FCB700] rounded-e-3xl rounded-s-none h-[50px]">
          Search
        </Button>
      </div>

      <div className="absolute   w-full  ">
        <div className="max-h-[50vh] overflow-auto">
          {value.length >= 3 ? (
            data.length > 0 ? (
              data.map((item) => (
                <Link
                  key={item.id}
                  className="border border-gray-300 flex gap-5 bg-white items-center p-3"
                  onClick={() => setValue("")}
                  href={`/product/${item.id}`}
                >
                  <Image
                    priority
                    width={200}
                    height={200}
                    className="w-[10%]"
                    src={item.images[0]?.image}
                    alt={item.title}
                  />
                  <span>{item.title}</span>
                </Link>
              ))
            ) : (
              <div className="w-full bg-white shadow-md p-3 text-center">
                <h1>Not Found</h1>
              </div>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
