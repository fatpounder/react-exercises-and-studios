export default function BookList() {
   let pageTitle = "The Border Trilogy by Cormac McCarthy";
   let book1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmKhYY-ip5Xos1gog7O4tBaST2v5eIOYMv1CnMnnrHRtvHcg3JllkGfX6zjxyghEc-4k&usqp=CAU";
   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1686576935i/365990.jpg";
   let book3 = "https://m.media-amazon.com/images/I/81sNQEDXdQL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="All the Pretty Horses" width="200" height="200"/>
         <img src={book2} alt="The Crossing" width="200" height="200"/>
         <img src={book3} alt="Cities of the Plain" width="200" height="200"/>
      </div>      
   );
}