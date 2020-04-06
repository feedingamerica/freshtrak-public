
/**
 * Created by Basil on 04/04/20.
 */

import React from 'react';
import ButtonComponent from '../General/ButtonComponent';
const SearchComponent = () => {
	 const handleClick = (e) => {
        alert("basil");
    };
    return (
    	<div>       
            <div className ="data-text">
                <span>Street<input type ="text" name="street" placeholder="street" /></span>
				<span>Zip<input type ="text" name="zip" placeholder="Zip" /></span>            
                <span><ButtonComponent type ='button' name="searchForResources" dataid= '' id="search-resource" value="Search For Resources" className = 'test' onClickfunction={handleClick} /></span>
            </div>
        </div>
    )
};
export default SearchComponent;

