import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { format } from "date-fns";
import { UserContext } from '../UserContext';

const PostPage = () => {
    const [postInfo, setPostInfo] = useState(null)
    const { userInfo } = useContext(UserContext)
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            });
    }, []);
    if (!postInfo) return '';
    return (
        <div className='post-page'>
            <div className="image">
                <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
            </div>
            <div>

                <h1 className='post-title'>{postInfo.title}</h1>
                <p className="info-post">
                    <a href="" className="author">
                        by {postInfo.author.username}
                    </a>
                    <time>{format(new Date(postInfo.createdAt), 'MMM d, yyyy HH:mm')}</time>
                </p>
                {userInfo.id === postInfo.author._id && (
                    <div className='edit-row'>
                        <Link className="edit-btn" to={`/edit/${postInfo._id}`}>Edit Post</Link>
                    </div>
                )}
            </div>
            <div className='article' dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
    )
}

export default PostPage