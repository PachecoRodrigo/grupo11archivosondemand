import React from 'react';





function Category(props){
    return (
        <React.Fragment>



<div className="col-lg-6 mb-4">
                <div className="category-row">
                    <div className="categories">
                        <div className= "cate-title">
                        {props.categoria}: {props.cantidad}
                        </div>
                    </div>
                </div>
            </div>

            </React.Fragment>
    )}

export default Category;