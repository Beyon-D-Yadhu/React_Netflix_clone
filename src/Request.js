// require('')
export const key = '383da997f2eb32cd621df7683b25340b'
//https://api.themoviedb.org/3/discover/movie?api_key=383da997f2eb32cd621df7683b25340b&language=pt-BR&page=1&with_genres=28
const requests = {
    Action:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=US-BR&page=1&with_genres=28`,
    Adventure:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=US-BR&page=1&with_genres=12`,
    Animation:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=US-BR&page=1&with_genres=16`,
    Comedy:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=US-BR&page=1&with_genres=35`
}


export default requests