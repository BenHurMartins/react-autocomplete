/* eslint-disable @next/next/no-img-element */
import { TCharacter } from "@/service/types";
import "./styles.css";
import { CSSProperties, FC, useCallback } from "react";

type AutoCompleteItemProps = {
  containerStyles?: CSSProperties;
  onClick: (character: TCharacter) => void;
  character: TCharacter;
  searchedTerm: string;
};

const AutoCompleteItem: FC<AutoCompleteItemProps> = ({
  character,
  containerStyles,
  onClick,
  searchedTerm,
}) => {
  const exp = new RegExp(searchedTerm, "g");

  const getHighlighted = useCallback(() => {
    return character.name.replace(exp, `<b>${searchedTerm}</b>`);
  }, [searchedTerm, character.name, exp]);

  return (
    <div
      style={containerStyles}
      className="item-container"
      onClick={() => onClick(character)}
    >
      <img
        src={character.image}
        style={{ height: "40px", width: "40px" }}
        alt={character.name}
      />
      <span>{getHighlighted()}</span>
    </div>
  );
};

export default AutoCompleteItem;
