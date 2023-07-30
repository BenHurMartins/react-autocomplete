"use client";
import "./styles.css";
import useRickAndMorty from "@/hooks/useRickAndMorty";
import AutoCompleteItem from "./AutoCompleteItem";
import { CSSProperties, FC, useState } from "react";
import { TCharacter } from "@/service/types";
import NoResults from "./NoResults";

type Props = {
  searchContainerStyle?: CSSProperties;
  itemContainerStyle?: CSSProperties;
  autoCompleteContainerStyle?: CSSProperties;
  rootContainerStyle?: CSSProperties;
  onCharacterSelected?: (character: TCharacter) => void;
};

const AutoComplete: FC<Props> = ({
  itemContainerStyle,
  searchContainerStyle,
  autoCompleteContainerStyle,
  rootContainerStyle,
  onCharacterSelected,
}) => {
  const [showList, setShowList] = useState(true);
  const { search, setSearch, result, setSelectedCharacter, loading } =
    useRickAndMorty();

  const onClick = (character: TCharacter) => {
    setSelectedCharacter(character);
    onCharacterSelected && onCharacterSelected(character);
  };

  return (
    <div className="container" style={rootContainerStyle}>
      <input
        className="input-container"
        style={searchContainerStyle}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onBlur={() => setShowList(false)}
        onFocus={() => setShowList(true)}
      />
      <div className="results-container" style={autoCompleteContainerStyle}>
        {result.length === 0 && search.length > 1 && (
          <NoResults loading={loading} />
        )}
        {showList &&
          result.slice(10).map((r) => {
            return (
              <AutoCompleteItem
                onClick={onClick}
                key={r.id}
                character={r}
                containerStyles={itemContainerStyle}
                searchedTerm={search}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AutoComplete;
