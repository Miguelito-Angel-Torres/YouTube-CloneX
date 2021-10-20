
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos';
// https://reactrouter.com/web/guides/quick-start */
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SearchPage from './SearchPage';
// https://www.youtube.com/watch?v=XWRik18G0Ls&t=454s

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>

          <Switch>
            <Route path="/search/:searchTerm">
              
            <div className="app__page"> 
                  <Sidebar/>
                  <SearchPage/>
            </div> 
            </Route>
            <Route path="/">
               
                <div className="app__page"> 
                  <Sidebar/>
                  <RecommendedVideos/>
                </div> 
            </Route>
          </Switch>
        </Router>
       
      {/* <Header />
        <div className="app__page"> 
          <Sidebar/>
          <RecommendedVideos/>
       </div>  */}
       

        {/*Header */}
        {/*Sidebar */}
        {/* RecomendedVideo*/}
    </div>
  );
}

export default App;
