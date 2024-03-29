import { firebaseConfig } from "./firebase"

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
    return data
  } catch (error) {
    console.log(error)
  }
}

export const putSpacesApi = async (spaceId, title, bgcolor) => {
  try {
    let bodyPutSpace = {
      fields: {
        title: {
          stringValue: title,
        },
        bgcolor: {
          stringValue: bgcolor,
        },
      },
    }

    const url_put_spaces = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/spaces/${spaceId}?key=${firebaseConfig.apiKey}`

    const response = await fetch(url_put_spaces, {
      method: "PATCH",
      body: JSON.stringify(bodyPutSpace),
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const deleteSpacesApi = async (listSpaceId) => {
  try {
    for (let spaceId of listSpaceId) {
      const url_delete_spaces = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/spaces/${spaceId}?key=${firebaseConfig.apiKey}`

      const response = await fetch(url_delete_spaces, {
        method: "DELETE",
      })
      console.log("spaces supprimés avec succès")
    }
  } catch (error) {
    console.log(error)
  }
}
