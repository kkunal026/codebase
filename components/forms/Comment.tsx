interface Props {
    threadId: string,
    currentUserImg: string,
    currentUserId: string 
}

const Comment = ({ 
    threadId, currentUserImg, currentUserId
} : Props) => {
    return (
        <h1 className="text-white">Comment Form</h1>
    )
}

export default Comment;