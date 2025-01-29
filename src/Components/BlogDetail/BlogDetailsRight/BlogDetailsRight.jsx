import React, { useState } from 'react';
import './BlogDetailsRight.css';
import BlogImg from '../../../assets/images/blogimg.jpg';
import ManImg from '../../../assets/images/man-img.jpg';
const initialComments = [
   {
      id: 1,
      name: 'Aaron Johnson',
      date: 'November 6, 2024',
      comment:
         "This involves outsourcing some or all of a company's safety potency to a service provider. Services may include security monitoring, incident response, and managing security devices and systems.",
      replies: [],
   },
   {
      id: 2,
      name: 'Aaron Johnson',
      date: 'November 6, 2024',
      comment:
         "This involves outsourcing some or all of a company's safety potency to a service provider. Services may include security monitoring, incident response, and managing security devices and systems.",
      replies: [],
   },
];
function BlogDetailsRight() {
   const [comments, setComments] = useState(initialComments);
   const [showReplyBox, setShowReplyBox] = useState(null);
   const [showReplyBoxForReply, setShowReplyBoxForReply] = useState({});
   const [replyText, setReplyText] = useState({});
   const handleReplyClick = (id) => {
      setShowReplyBox((prev) => (prev === id ? null : id));
   };
   const handleReplyClickForReply = (commentId, replyId) => {
      setShowReplyBoxForReply((prev) => ({
         ...prev,
         [commentId]: prev[commentId] === replyId ? null : replyId,
      }));
   };
   const handleReplyChange = (id, value) => {
      setReplyText((prev) => ({
         ...prev,
         [id]: value,
      }));
   };
   const handleSubmitMainCommentReply = (id) => {
      if (!replyText[id]) return;
      const newReply = { id: Date.now(), text: replyText[id], date: new Date().toLocaleString() };
      setComments((prevComments) =>
         prevComments.map((comment) =>
            comment.id === id
               ? {
                  ...comment,
                  replies: [...comment.replies, newReply],
               }
               : comment
         )
      );
      setShowReplyBox(null);
      setReplyText((prev) => ({
         ...prev,
         [id]: '',
      }));
      console.log('New main comment reply:', newReply);
   };
   const handleSubmitNestedReply = (commentId, replyId) => {
      if (!replyText[replyId]) return;
      const newNestedReply = { id: Date.now(), text: replyText[replyId], date: new Date().toLocaleString() };
      setComments((prevComments) =>
         prevComments.map((comment) =>
            comment.id === commentId
               ? {
                  ...comment,
                  replies: comment.replies.map((reply) =>
                     reply.id === replyId
                        ? {
                           ...reply,
                           nestedReplies: [
                              ...(reply.nestedReplies || []),
                              newNestedReply,
                           ],
                        }
                        : reply
                  ),
               }
               : comment
         )
      );
      setShowReplyBoxForReply((prev) => ({ ...prev, [commentId]: null }));
      setReplyText((prev) => ({
         ...prev,
         [replyId]: '',
      }));
      console.log('New nested reply:', newNestedReply);
   };
   const handleDeleteReply = (commentId, replyId) => {
      setComments((prevComments) =>
         prevComments.map((comment) =>
            comment.id === commentId
               ? { ...comment, replies: comment.replies.filter((reply) => reply.id !== replyId) }
               : comment
         )
      );
   };
   return (
      <div className="blog-details-right-sidebar">
         <div className="blog-info blog-card">
            <div className="blog-meta">
               <span className="meta-item">
                  <i className="fa fa-calendar"></i>
                  <span>November 6, 2024</span>
               </span>
            </div>
            <div className="blog_info_content">
               <h1>Navigating the Impact of Blockchain Technology</h1>
               <p>
                  Blockchain technology has revolutionized industries, reshaping how we approach security, transparency, and
                  trust. This decentralized ledger system offers unparalleled potential for transforming financial systems,
                  supply chain management, healthcare, and beyond. However, fully harnessing its benefits requires navigating
                  challenges such as regulatory hurdles, scalability issues, and public perception.
               </p>
               <div className="blog_info_img blog-img">
                  <img src={BlogImg} alt="Blog" />
               </div>
               <p>
                  As businesses and individuals adapt to this innovation, understanding its multifaceted impact becomes
                  essential. From decentralization and enhanced transparency to fostering secure transactions,
               </p>
               <div className="blog_info_main-content">
                  <p>
                     <strong>
                        Blockchain technology is revolutionizing industries, offering transformative opportunities alongside
                        significant challenges.
                     </strong>
                  </p>
               </div>
               <p>
                  As this innovation reshapes traditional systems, its potential for decentralization, enhanced transparency,
                  and secure transactions drives widespread adoption. Yet, understanding blockchain’s broader implications is
                  essential to navigate its complexities. Key considerations include regulatory hurdles, scalability
                  limitations, and environmental impacts.
               </p>
            </div>
         </div>
         <div className="blog_comments-box">
            <h2>Comments</h2>
            {comments.map((comment) => (
               <div key={comment.id} className="comment-card">
                  <div className="user d-flex align-items-center">
                     <div className="image">
                        <img src={ManImg} alt={comment.name} />
                     </div>
                     <div className="content">
                        <h3>{comment.name}</h3>
                        <p>{comment.date}</p>
                     </div>
                  </div>
                  <p>{comment.comment}</p>
                  <div className="replies">
                     {comment.replies.map((reply) => (
                        <div key={reply.id} className="reply-content d-flex justify-content-between">
                           <div className="reply_box_row">
                              <div className='uers_box-inner'>
                                 <img src={ManImg} alt="User Reply" className="reply-avatar" />
                                 <div className="reply-text">
                                    <p>{reply.text}</p>
                                    <small>{reply.date}</small>
                                 </div>
                              </div>
                              <div className="reply-actions">
                                 <button
                                    className="reply-btn"
                                    onClick={() => handleReplyClickForReply(comment.id, reply.id)}
                                 >
                                    Reply
                                 </button>
                              </div>
                              {showReplyBoxForReply[comment.id] === reply.id && (
                                 <div className="reply-box">

                                    <textarea
                                       value={replyText[reply.id] || ''}
                                       onChange={(e) => handleReplyChange(reply.id, e.target.value)}
                                       placeholder="Write your reply here..."
                                       rows="3"
                                    ></textarea>
                                    <div className="reply-box-actions">
                                       <button onClick={() => handleSubmitNestedReply(comment.id, reply.id)} className='submit-reply-btn '>
                                          Submit
                                       </button>
                                    </div>
                                 </div>
                              )}
                           </div>
                           {reply.nestedReplies && reply.nestedReplies.map((nestedReply) => (
                              <div className='uers_box-inner nested-reply-content'>
                                 <div className=''>
                                    <img src={ManImg} alt="User Reply" className="reply-avatar" />
                                 </div>
                                 <div key={nestedReply.id} className=" reply-text">
                                    <p>{nestedReply.text}</p>
                                    <small>{nestedReply.date}</small>
                                 </div>
                              </div>
                           ))}
                        </div>
                     ))}
                  </div>
                  <div className="Reply_btn">
                     <button onClick={() => handleReplyClick(comment.id)} className='reply-btn'>
                        {showReplyBox === comment.id ? 'Cancel' : 'Reply'}
                     </button>
                  </div>
                  {showReplyBox === comment.id && (
                     <div className="reply-box">
                        <textarea
                           value={replyText[comment.id] || ''}
                           onChange={(e) => handleReplyChange(comment.id, e.target.value)}
                           placeholder="Write your reply here..."
                           rows="3"
                        ></textarea>
                        <div className="reply-box-actions">
                           <button onClick={() => handleSubmitMainCommentReply(comment.id)} className='submit-reply-btn '>
                              Submit
                           </button>
                        </div>
                     </div>
                  )}
               </div>
            ))}
         </div>
      </div>
   );
}
export default BlogDetailsRight;