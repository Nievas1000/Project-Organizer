export const useGraphic = (tasks) => {
  const calculateTaskCounts = () => {
    let todoCount = 0
    let inProgressCount = 0
    let doneCount = 0

    tasks.forEach(task => {
      switch (task.state) {
        case 'TO DO':
          todoCount++
          break
        case 'IN PROGRESS':
          inProgressCount++
          break
        case 'DONE':
          doneCount++
          break
        default:
          break
      }
    })
    return {
      todoCount,
      inProgressCount,
      doneCount
    }
  }

  const taskCounts = calculateTaskCounts()
  const data = {
    labels: ['DONE', 'TO DO', 'IN PROGRESS'],
    datasets: [
      {
        data: [taskCounts.doneCount, taskCounts.todoCount, taskCounts.inProgressCount],
        backgroundColor: ['#2C3E50', '#27AE60', '#BDC3C7'],
        hoverBackgroundColor: ['#1F2C35', '#218B4B', '#AAB5B8']
      }
    ]
  }

  return { data }
}
