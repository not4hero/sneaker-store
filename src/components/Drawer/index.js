import styles from "./Drawer.module.scss"

const Drawer = () => {
    return (
        <div className="drawer">
        <div className="drawerHeader">
        <h1>Корзина</h1>
        <button className="roundButton">
          <img className="" src="/img/cross.svg"/>
        </button>
        
        </div>
        

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
          <img className="arrowIcon" src="/img/arrow.svg" alt="Arrow"/>
        </button>

         
      </div>
    )
}

export default Drawer;