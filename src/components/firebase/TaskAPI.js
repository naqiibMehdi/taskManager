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

export const postTasksApi = async (title, tableId) => {
  try {
    let bodyPostTask = {
      fields: {
        title: {
          stringValue: title,
        },
        tableId: {
          stringValue: tableId,
        },
      },
    }

    const response = await fetch(url_get_tasks, {
      method: "POST",
      body: JSON.stringify(bodyPostTask),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const putTasksApi = async (taskId, title, tableId) => {
  try {
    let bodyPutTask = {
      fields: {
        title: {
          stringValue: title,
        },
        tableId: {
          stringValue: tableId,
        },
      },
    }

    const url_put_tasks = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/tasks/${taskId}?key=${firebaseConfig.apiKey}`

    const response = await fetch(url_put_tasks, {
      method: "PATCH",
      body: JSON.stringify(bodyPutTask),
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const deleteTasksApi = async (taskId) => {
  try {
    const url_delete_task = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/tasks/${taskId}?key=${firebaseConfig.apiKey}`

    const response = await fetch(url_delete_task, {
      method: "DELETE",
    })
    console.log("tache supprimée avec succès")
  } catch (error) {
    console.log(error)
  }
}
