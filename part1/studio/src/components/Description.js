import styles from './Description.module.css'
import React from 'react'

const RecipeAuthor = () => {
    let authorLink = "https://natashaskitchen.com/"
    let authorPhoto = "https://natashaskitchen.com/wp-content/uploads/2023/02/NK-Head-Red-Shirt-small.png"
    let authorName = "Natasha"

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = {authorName} className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Natasha's Kitchen</a> 
           </div>
        </div>
     );
};

class RecipeDescription extends React.Component {
   render () {
      return (
         <div> 
         <div>
            <h1>Apple Crisp</h1>
            <p>Our easy Apple Crisp Recipe is a classic dessert loaded with freshly sliced apples and topped with a crunchy, crispy, buttery cinnamon oat topping.</p>
         </div>
         <RecipeAuthor />
      </div>
      )
   }   
}

export default RecipeDescription;