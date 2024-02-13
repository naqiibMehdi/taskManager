export const addTaskDB = (task) => {
  const req = indexedDB.open("task-managerDB", 1)

  req.onsuccess = (e) => {
    const db = e.target.result

    const store = db.transaction(["tasks"], "readwrite").objectStore("tasks")

    const request = store.add(task)

    request.onsuccess = () => {
      console.log("tâche ajoutée avec succès")
    }

    request.onerror = () => {
      console.log("erreur lors de l'ajout de la tâche")
    }
  }
}

export const updateTaskDB = (task) => {
  const req = indexedDB.open("task-managerDB", 1)

  req.onsuccess = (e) => {
    const db = e.target.result

    const store = db.transaction(["tasks"], "readwrite").objectStore("tasks")

    const request = store.put(task)

    request.onsuccess = () => {
      console.log("tâche modifiée avec succès")
    }

    request.onerror = () => {
      console.log("erreur lors de la modification de la tâche")
    }
  }
}

export const deleteTaskDB = (taskId) => {
  const req = indexedDB.open("task-managerDB", 1)

  req.onsuccess = (e) => {
    const db = e.target.result

    const store = db.transaction(["tasks"], "readwrite").objectStore("tasks")

    const request = store.delete(taskId)

    request.onsuccess = () => {
      console.log("tâche modifiée avec succès")
    }

    request.onerror = () => {
      console.log("erreur lors de la modification de la tâche")
    }
  }
}
