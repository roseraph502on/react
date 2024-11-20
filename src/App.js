import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div id = "wrap" className = "clearfix">
        {/*헤더*/}    
        <header id = "header"> 
        {/* 탭메뉴 */}
          <nav className='nav clearfix'>
            <ul>
              <li className="logo"><a href="#"><h1>logo</h1></a></li>
              <li><a href="#">첫번째 탭</a></li>
              <li><a href="#">두번째 탭</a></li>
              <li><a href="#">세번째 탭</a></li>
            </ul>
          </nav>
          {/* 배너 */}
          <div className='banner clearfix'>
            
          </div>
        </header>

        <div id='content'>

        </div>

        <footer id='footer'>

        </footer>

      </div>

    
    
  );
}

export default App;
