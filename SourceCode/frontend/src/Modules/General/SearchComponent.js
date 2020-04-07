import React from 'react';
import ButtonComponent from '../General/ButtonComponent';
import ResourceListComponent from './Search/ResourceListComponent';

const SearchComponent = () => {

	 const handleClick = (e) => {
        alert("basil");
    };

    return (
    	<div className="search-area text-left">       
            <form>
                <div className=" row align-items-end">
                    <div className="col-sm-6 col-md-6 col-lg-7 col-xl-8">
                        <div className="d-flex">
                            <div className="form-group flex-grow-1">
                                <label>Street</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group zip-code">
                                <label>Zip</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                        <div className="col-sm-6 col-md-6 col-lg-5 col-xl-4 text-right">
                            <ButtonComponent type ='submit' name="searchForResources" dataid= ''
                                             id="search-resource" value="Search For Resources"
                                             className = 'btn custom-button search-button'
                                             onClickfunction={handleClick} />
                        </div>
                </div>
            </form>

            <ResourceListComponent/>

        </div>
    )
};
export default SearchComponent;

