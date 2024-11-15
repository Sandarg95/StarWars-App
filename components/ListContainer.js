import React, { useState, useEffect } from "react";
import List from "./List";

function mapItems(items) {
  return items.map((value, i) => ({ key: i.toString(), value }));
}

export default function ListContainer({ fetchFunction }) {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const { items } = await fetchFunction(filter, asc);
      setData(mapItems(items));
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


