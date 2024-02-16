import { firebaseConfig } from "./firebase"

const url_get_tables = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/tables?key=${firebaseConfig.apiKey}`

export const getTablesApi = async () => {
  try {
    let tempTables = []
    const response = await fetch(url_get_tables)
    const data = await response.json()

    if (data.documents) {
      for (let table of data.documents) {
        const { title, spaceId, order } = table.fields
        tempTables.push({
          id: table.name.split("/")[6],
          title: title.stringValue,
          spaceId: spaceId.stringValue,
          order: parseInt(order.integerValue),
        })
      }
      return tempTables
    }

    return []
  } catch (error) {
    console.log(error)
  }
}

export const postTablesApi = async (title, spaceId, order) => {
  try {
    let bodyPostTables = {
      fields: {
        title: {
          stringValue: title,
        },
        spaceId: {
          stringValue: spaceId,
        },
        order: {
          integerValue: order,
        },
      },
    }

    const response = await fetch(url_get_tables, {
      method: "POST",
      body: JSON.stringify(bodyPostTables),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

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

export const deleteTablesApi = async (tableId) => {
  try {
    const url_delete_tables = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/tables/${tableId}?key=${firebaseConfig.apiKey}`

    const response = await fetch(url_delete_tables, {
      method: "DELETE",
    })
    console.log("spaces supprimés avec succès")
  } catch (error) {
    console.log(error)
  }
}
