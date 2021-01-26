import React from 'react';
import TopBar from './TopBar';
import MainContent from './MainContent';

function Content (){

    return ( 
        <React.Fragment>      
			
			<div id="content">
                <TopBar/>
                <MainContent />
            
            </div>
            

        </React.Fragment>
    )

}

export default Content;