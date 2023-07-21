import axios from "axios";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";

export interface Item {
  label: string;
  link?: {
    url: string;
    text: string;
  }
}

export interface StatableItem extends Item {
  isDone: boolean;
}

function getItems() {
  return axios
    .get("https://run.mocky.io/v3/59fe4372-8bb0-4de5-97d4-2fae5dd6c9e5")
    .then((response) => {
      return response.data;
    });
}

function useGetItems(maxItems: number) {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState<StatableItem[]>([]);
  const { data, isLoading, isError } = useQuery({
    queryKey: "items",
    queryFn: getItems
  });

  useEffect(() => {
    if (data) {
      setItems(data.map((item: Item) => ({ ...item, isDone: false })));
    }
  }, [data]);

  function checkItem(label: string) {
    const newItems = [...items];
    const index = newItems.findIndex((item) => item.label === label);
    newItems[index].isDone = !newItems[index].isDone;
    setItems(newItems);
  }

  function nextPage() {
    if (page === Math.floor(items.length / maxItems) - 1) {
      return;
    }

    setPage(page + 1);
  }

  function prevPage() {
    if (page === 0) {
      return;
    }

    setPage(page - 1);
  }

  function resetPageStates() {
    const newItems = [...items];

    for (let i = page * maxItems; i < page * maxItems + maxItems; i++) {
      newItems[i].isDone = false;
    }

    setItems(newItems);
  }

  return {
    data: items.slice(page * maxItems, page * maxItems + maxItems),
    isLoading,
    isError,
    checkItem,
    nextPage,
    prevPage,
    resetPageStates,
    isLastPage: page === Math.floor(items.length / maxItems) - 1,
    isFirstPage: page === 0
  };
}

export default useGetItems;
