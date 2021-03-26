import '../index.css';
import React from "react";
import Marquee from './Marquee';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function Routes({ jsonData }) {
 
  return (
    
      <div className="App">
        <Switch>
            <Route exact path="/">
              <Redirect to="/industries" />
            </Route>
          {jsonData.pages ? jsonData.pages.map((data) => {
            let val = data.blocks[0];
            return(
              
              <Route key={data.title} path={`/${data.slug}`} >
                <Marquee 
                  key={data.title} 
                  background={val.background} 
                  headline={val.headline} 
                  subhead={val.subhead}
                  cta={val.cta}
                  slug={data.slug} 
                />
              </Route>
            )
          }) : ""}
          
        </Switch>
      </div>
   
  );
}

export default Routes;
