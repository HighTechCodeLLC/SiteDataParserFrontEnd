import React, { useState } from "react";
import styles from "./../styles/SearchBox.module.scss";
export default function Search() {
  const [isFiltersOpened, setIsFiltersOpened] = useState<boolean>(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__search}>
        <div className={styles.search__input}>
          <input
            className={styles.search__input__field}
            placeholder="Type here..."
          />
          <button className={styles.search__input__btn}>Search</button>
        </div>
        <div className={styles.search__filters}>
          <img
            className={
              isFiltersOpened
                ? styles.filters__toggle + " " + styles.filters__toggle__opened
                : styles.filters__toggle
            }
            onClick={() => {
              if (isFiltersOpened) {
                const list = document.getElementsByClassName(
                  styles.filters__options
                )[0];
                list.classList.toggle(styles.collapse);
                setTimeout(
                  () => setIsFiltersOpened((prev: boolean) => !prev),
                  1500
                );
              } else {
                setIsFiltersOpened((prev: boolean) => !prev);
              }
            }}
            src="/icons/filters.svg"
            alt="filters toggle icon"
          />
          {isFiltersOpened ? (
            <div className={styles.filters__options}>
              <input type="radio" id="seeds" name="searchOptions" />
              <label htmlFor="seeds">by seeds</label>
              <input type="radio" id="size" name="searchOptions" />
              <label htmlFor="size">by size</label>
              <input type="radio" id="date" name="searchOptions" />
              <label htmlFor="date">by date</label>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
