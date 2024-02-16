import { firebaseConfig } from "./firebase"

const url_get_tasks = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/tasks?key=${firebaseConfig.apiKey}`

export const getTasksApi = async () => {
  try {
    let tempTasks = []
    const response = await fetch(url_get_tasks)
    const data = await response.json()

    if (data.documents) {
      for (let task of data.documents) {
        const { title, tableId } = task.fields
        tempTasks.push({
          id: task.name.split("/")[6],
          title: title.stringValue,
          tableId: tableId.stringValue,
        })
      }
      return tempTasks
    }

    return []
  } catch (error) {
    console.log(error)
  }
}

// export const postSpacesApi = async (title, bgcolor) => {
//   try {
//     let bodyPostSpace = {
//       fields: {
//         title: {
//           stringValue: title,
//         },
//         bgcolor: {
//           stringValue: bgcolor,
//         },
//       },
//     }

//     const response = await fetch(url_get_spaces, {
//       method: "POST",
//       body: JSON.stringify(bodyPostSpace),
//     })
//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const putSpacesApi = async (spaceId, title, bgcolor) => {
//   try {
//     let bodyPutSpace = {
//       fields: {
//         title: {
//           stringValue: title,
//         },
//         bgcolor: {
//           stringValue: bgcolor,
//         },
//       },
//     }

//     const url_put_spaces = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/spaces/${spaceId}?key=${firebaseConfig.apiKey}`

//     const response = await fetch(url_put_spaces, {
//       method: "PATCH",
//       body: JSON.stringify(bodyPutSpace),
//     })
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const deleteSpacesApi = async (listSpaceId) => {
//   try {
//     for (let spaceId of listSpaceId) {
//       const url_delete_spaces = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/spaces/${spaceId}?key=${firebaseConfig.apiKey}`

//       const response = await fetch(url_delete_spaces, {
//         method: "DELETE",
//       })
//       console.log("spaces supprimés avec succès")
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }
