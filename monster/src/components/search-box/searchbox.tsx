import "./search-box.css";
import { ChangeEvent } from "react";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const searchBox = ({
  onChangeHandler,
  placeholder,
  className,
}: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default searchBox;
