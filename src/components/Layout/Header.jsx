import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import { Fragment } from 'react'
function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img
          src={mealsImage}
          alt='A table full of delicious food'
        />
      </div>
    </Fragment>
  )
}

export default Header