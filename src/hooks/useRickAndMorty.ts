import { getCharacter } from "@/service/rick-and-morty-api";
import { TCharacter } from "@/service/types";
import { useState, useEffect } from "react";

let timer: ReturnType<typeof setTimeout> | null = null;

const debounce = (func: () => void, time = 300) => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    func();
  }, time);
};

const useRickAndMorty = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<TCharacter[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<TCharacter | null>(
    null
  );

  const getData = async (search: string) => {
    const response = await getCharacter(search);
    if (response.status === "success") {
      setResult(response.data.results || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (search.length > 1 && !selectedCharacter) {
      setLoading(true);
      debounce(() => getData(search));
    } else {
      setResult([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, selectedCharacter]);

  useEffect(() => {
    if (selectedCharacter) {
      setResult([]);
      setSearch(selectedCharacter.name);
      setSelectedCharacter(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCharacter]);

  return {
    search,
    setSearch,
    result,
    setSelectedCharacter,
    loading,
  };
};

export default useRickAndMorty;
