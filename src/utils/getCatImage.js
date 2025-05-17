export default async function getCatImage () {
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search")
        if (!response.ok) throw new Error ("Error on fetching data: ", response?.statusText)
        const data = await response.json()
        return data[0].url
    } catch (err) {
        console.log("Error on fetching data: ", err)
        return null
    }
}