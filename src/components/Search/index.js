import styles from "./Search.module.scss"

const Search = () => {
    return (
        <div className="searchContainer">
            {/* <label for="site-search"></label> */}
              <img src="/img/magnifier.svg"/>
              <input type="search" id="site-search" name="q" />

              {/* <button>Search</button> */}

          </div>
    )
}

export default Search;