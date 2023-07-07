import React from 'react'

function BookDetails({ userID , title, author, publisher, publisheddate, duedate, image, description}) {
  return (
    <div> 
        <img src={image} alt={title}/>
        <h1>{title}</h1>
        <p>{description}</p>
        <h1>{author}</h1>
        <h1>{publisher}</h1>
        <h1>{publisheddate}</h1>
        <h1>{duedate}</h1>
        <h1>{userID}</h1>
        

    </div>
  )
}

export default BookDetails