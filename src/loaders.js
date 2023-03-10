const URL = 'https://bookmarkapi.onrender.com'

export const bookmarksLoader = async () => {
    const response = await fetch(URL + "/bookmarks")
    const people = await response.json()
    return people
  }

  export const bookmarkLoader = async ({params}) => {
    const response = await fetch(URL + "/bookmarks/" + params.id )
    const person = await response.json()
    return person
}  