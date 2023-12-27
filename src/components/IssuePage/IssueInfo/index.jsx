import { EditInfo } from './EditInfo'
import { useEditInfo } from '../../../hooks/useEditInfo'
import './index.css'
import { CurrentInfo } from './CurrentInfo'
import { CommentZone } from './CommentZone'

export const IssueInfo = ({ task }) => {
  const { selectedProject, isEditMode, handleEditClick, editedDescription, editedTitle, handleCancelClick, setEditedDescription, setEditedTitle } = useEditInfo()
  return (
    <div className='ms-3'>
      <h5 className='mt-4'>Projects / {selectedProject ? selectedProject.name : null}</h5>
      <div>
        {isEditMode
          ? (
            <EditInfo
              task={task} editedDescription={editedDescription} editedTitle={editedTitle}
              handleCancelClick={handleCancelClick}
              setEditedDescription={setEditedDescription} setEditedTitle={setEditedTitle}
            />
            )
          : (
            <CurrentInfo handleEditClick={handleEditClick} task={task} />
            )}
      </div>
      <CommentZone task={task} />
    </div>
  )
}
