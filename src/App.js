


function App() {
  return (
    
    <div className="wrapper">

      <div className="overlay">
        <div className="drawer">
          <h1>Корзина</h1>

          <div className="items">
          <div className="cartItem">

            <div className="cartItemImage"
              style={ {backgroundImage: "url(/img/image3.jpg)"} }
            >

            </div>
            
            <div>
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>8 900 руб.</b>
              
            </div>
            <button className="roundButton itemRemoveButton">
              <img className="itemRemoveButton" src="/img/cross.svg"/>
            </button>

            </div>  

            <div className="cartItem">

            <div className="cartItemImage"
              style={ {backgroundImage: "url(/img/image5.png)"} }
            >

            </div>
            
            <div>
              <p>Мужские Кроссовки Under Armour Curry 8</p>
              <b>11 999 руб.</b>
              
            </div>
            <button className="roundButton itemRemoveButton">
              <img className="itemRemoveButton" src="/img/cross.svg"/>
            </button>

            </div> 
          </div>

          <ul className="cartTotalContainer">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>19 854 руб.</b>
            </li>
            <li>
              <span>Скидка 5%</span>
              <div></div>
              <b>1045 руб.</b>
            </li>
          </ul>

          <button className="checkoutButton">
            Оформить заказ
            <img className="arrowIcon" src="/img/arrow.svg"/>
          </button>

           
        </div>
      </div>
     

      <header>
        

        <div className="headerLeft">
          
          <img src="/img/logo.svg" width={40} height={40}/>
          <div className="headerInfo">
            <h3>SNEAKERS</h3>
            <p>Магазин кроссовок</p>
          </div>
        </div>

        <div className="headerRight">
          <li>
            <img width={20} height={20} src="/img/cart.svg" />
            <span><b>19 854 руб.</b></span>
          </li>
          <li>
            
            
          </li>
        </div>
        
        
      </header>


      <div className="content">
        <div className="section">
          <h1>Все кроссовки</h1>
          <div className="searchContainer">
            {/* <label for="site-search"></label> */}
              <img src="/img/magnifier.svg"/>
              <input type="search" id="site-search" name="q" />

              {/* <button>Search</button> */}

          </div>
        </div>
        

        <div className="sneakers">

        <div className="card">

          <button className="roundButton">
            <img src="/img/heart-liked.svg" alt="Liked"/>
          </button>
          

          
          <div className="cardImageContainer">
            <img src="/img/image5.png" />
          </div>
          
          <p>Мужские Кроссовки Under Armour Curry 8</p>
          <div className="cardBottom">
            <div className="cardPrice">
              <span>Цена:</span>
              <b>11 999 руб.</b>
            </div>
            
            <button class="roundButton">
              <img width={12} height={12} src="/img/plus.svg"/>
            </button>
          </div>
        </div>

        <div className="card">

          <button className="roundButton">
            <img src="/img/heart-liked.svg" alt="Liked"/>
          </button>
          

          
          <div className="cardImageContainer">
            <img src="/img/image3.jpg" />
          </div>
          
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="cardBottom">
            <div className="cardPrice">
              <span>Цена:</span>
              <b>8 990 руб.</b>
            </div>
            
            <button class="roundButton">
              <img width={12} height={12} src="/img/plus.svg"/>
            </button>
          </div>
        </div>

        

        
        

        </div>

        

      </div>
    </div>
  );
}

export default App;
