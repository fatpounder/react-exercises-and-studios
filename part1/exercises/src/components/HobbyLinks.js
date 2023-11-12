export default function HobbyLinks() {
    let hobbyTitle = "My Hobbies"
    const hobbyLinks = ["https://ebird.org/explore", "https://zelda.nintendo.com/"]

    return (
        <div>
           <h3>{hobbyTitle}</h3>
            <li><a href = {hobbyLinks[0]}>Birding</a></li>
            <li><a href = {hobbyLinks[1]}>The Legend of Zelda</a></li>
        </div>      
     );
}