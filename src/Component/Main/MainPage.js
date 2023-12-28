import React from "react";
import Categories from "./Categories"
import SearchButton from "./SearchButton";

const MainPage = (props) =>{
    const books = props.books;
    const categories = props.categories;
    const onMove = props.onMove;
    
    return(
        <div className="MainPage">
            <div className="MainPageTitle">
                <h1>My Reads</h1>
            </div>
            <Categories books={books} categories={categories} onMove={onMove}/>
            <SearchButton/>
        </div>
    );
}

export default MainPage;