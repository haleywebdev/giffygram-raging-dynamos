import { FilterByDate, PostsFromDropdown, SortByFavorites } from "../footer/Footer.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
   
    
    <footer>
    ${FilterByDate()}
    ${PostsFromDropdown()}
    ${SortByFavorites()}
    </footer>
    `
}
