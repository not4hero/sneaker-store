import styles from "./Header.module.scss"

const Header = () => {
    return (
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
    )
}

export default Header;