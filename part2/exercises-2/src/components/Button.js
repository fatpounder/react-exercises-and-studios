import './styles.css';

function Button() {
   function onLearnMore() {
      alert("Magikarp used Splash!")
   }
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;