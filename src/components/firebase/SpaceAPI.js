import { firebaseConfig } from "../firebase/firebase"

const url_get_spaces = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/spaces?key=${firebaseConfig.apiKey}`

export const getSpacesApi = async () => {
  try {
    let tempSpaces = []
    const response = await fetch(url_get_spaces)
    const data = await response.json()

    for (let space of data.documents) {
      const { title, bgcolor } = space.fields
      tempSpaces.push({
        id: space.name.split("/")[6],
        title: title.stringValue,
        bgcolor: bgcolor.stringValue,
      })
    }

    return tempSpaces
  } catch (error) {
    console.log(error)
  }
}

export const postSpacesApi = async (title, bgcolor) => {
  try {
    let bodyPostSpace = {
      fields: {
        title: {
          stringValue: title,
        },
        bgcolor: {
          stringValue: bgcolor,
        },
      },
    }

    const response = await fetch(url_get_spaces, {
      method: "POST",
      body: JSON.stringify(bodyPostSpace),
    })
    const data = await response.json()

    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
