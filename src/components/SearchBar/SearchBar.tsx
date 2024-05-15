import style from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { Props } from "./SearchBar.types";
import { FormEvent } from "react";

const SearchBar = ({ onSubmit }: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    const form = e.target as HTMLFormElement;
    e.preventDefault();
    const input = form.elements.namedItem("searchbar") as HTMLInputElement;
    const query = input.value.trim().toLowerCase();
    if (query === "") {
      toast.error("Field cannot be empty!", {
        duration: 2000,
        position: "top-right",
      });
      return;
    }
    onSubmit(query);
    form.reset();
  };
  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          name="searchbar"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={style.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
