import React, { useState, useEffect } from "react";
import List from "./List";

function mapItems(items) {
  return items.map((value, i) => ({ id: i.toString(), name: value }));
}


export default function ListContainer({ fetchFunction }) {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { items } = await fetchFunction(filter, asc);
        setData(mapItems(items));
        console.log("Data fetched:", mapItems(items)); // Log fetched data after mapping
      } catch (error) {
        console.error("Error fetching data:", error); // Log errors if any occur
      }
    })();
  }, [filter, asc, fetchFunction]);
  

  

  return (
    <List
      data={data}
      asc={asc}
      onFilter={async (text) => {
        setFilter(text);
        const { items } = await fetchFunction(text, asc);
        setData(mapItems(items));
      }}
      onSort={async () => {
        setAsc(!asc);
        const { items } = await fetchFunction(filter, asc);
        setData(mapItems(items));
      }}
    />
  );
}


