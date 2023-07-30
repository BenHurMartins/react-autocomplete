/* eslint-disable @next/next/no-img-element */
import "./styles.css";
import { CSSProperties, FC } from "react";

type Props = {
  containerStyles?: CSSProperties;
  loading: boolean;
};

const NoResults: FC<Props> = ({ containerStyles, loading }) => {
  return (
    <div style={containerStyles} className="item-empty">
      {loading ? <div className="loader" /> : <span>No results founds</span>}
    </div>
  );
};

export default NoResults;
