
const dataURL = "https://www.omdbapi.com?apikey=d65f947"

export function fetchAPI1(title, page=1) {
    return fetch(dataURL+`&s=${title}&type=movie&page=${page}`,{
        method:'GET',
        mode: 'cors'
    }).then(data=>
        data.json()
    ).catch(error => 
        console.log("error....", "Failed to fetch")
    )
}








