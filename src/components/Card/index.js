import styles from './Card.module.scss'

const Card = ( {name, price, imageUrl, addToCart}, props ) => {

    return (
        <div className="card">

          <button className="roundButton">
            <img src="/img/heart-liked.svg" alt="Liked"/>
          </button>
          

          
          <div className="cardImageContainer">
            <img src={ imageUrl } />
          </div>
          
          <p>{ name }</p>
          <div className="cardBottom">
            <div className="cardPrice">
              <span>Цена:</span>
              <b>{ price }</b>
            </div>
            
            <button class="roundButton" onClick={ addToCart }> 
            
              <img width={12} height={12} src="/img/plus.svg"/>
            </button>
          </div>
        </div>
    )
}

export default Card;