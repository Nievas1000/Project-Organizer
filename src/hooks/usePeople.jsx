import { useContext, useEffect, useState } from 'react'
import { ProjectContext } from '../context/project'
import axios from 'axios'

export const usePeople = (setShowModal) => {
  const [people, setPeople] = useState()
  const { selectedProject, setParticipants } = useContext(ProjectContext)

  const addPeople = async (participant) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}addProject`, { email: participant.email, projectId: selectedProject._id })
      if (response.status === 200) {
        setParticipants((prevParticipants) => [...prevParticipants, participant])
        setShowModal(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}usersNoProject/${selectedProject._id}`, { method: 'POST' }).then(response => response.json()).then(data => {
      if (data.length > 0) {
        setPeople(data)
      }
    })
  }, [selectedProject])

  return { people, addPeople }
}
