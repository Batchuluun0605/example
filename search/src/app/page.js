"use client";
import Table from "@/Table";
import { data } from "@/utils/data";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const keys = ["name", "surname", "email"];
  const search = (e) => {
    return e.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center p-4">
        <input
          placeholder="search..."
          type="text"
          className="px-3 py-2 border"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <Table data={search(data)} />
    </div>
  );
}
