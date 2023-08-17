import React, { useState} from "react";
import "./post.css";
import { Avatar } from "@mui/material";
import profile_pic from "../samples/images/profile_pic.jpeg";
import samplepost from "../samples/images/samplepost.jpeg";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const Post = () => {
  const user = [
    {
      username: "john",
      uid: 1,
      caption: "bitcoin is falling",
      noLikes: 10,
      comments: [{commentname:"gautam",comment:"mera paisa dub gaya"}, {commentname:"gautam",comment:"i am a gone case"}]
    },
    {
      username: "johnny",
      uid: 2,
      caption: "bitcoin is rising",
      noLikes: 20,
      comments: [{commentname:"gautam",comment:"mera paisa dub gaya"}, {commentname:"gautam",comment:"i am a gone case"}]
    },
  ];

  const [comment, setComment] = useState("");
  const [show, setShow] = useState("like2"); //ye jab like karte hai toh wo blue rahe uske liye
  const [show2, setShow2] = useState("textforlike");

  const likeHandle = (event) => {
    event.preventDefault();
    if (show === "like2") {
      setShow("like2 blue");
      setShow2("textforlike bluetextforlike");
    } else {
      setShow("like2");
      setShow2("textforlike");
    }
  };


  const handleNewComment=(event)=>{
    setComment(event.target.value); //ye bas naya comment set karne ke liye hai
  };

  const PostUserComment=(event,uid)=>{
    event.preventDefault();    
    if(comment.length>0)
    {
        const newComment = [{commentname:"newuser",comment:comment}]; //abhi muje ye nahi ata ki abhi comment add kiya hai toh tuarnt display kaise kare abhi
        user[uid-1].comments.push(newComment); //sayad static hai abhi website isliye nahi ho para ispe jayda dhyan mat dena
        setComment("");
    }
  };


  return (
    <div>
      {user.map((poster) => ( //2 users hai jinke post visible honge ek loop ke chalya hai phela section user name photo hai phir dusra section usne kya post kiya hai 3 and 4 like comment wagera ke hai
        <div className="post">
          <div className="post__header">
            <Avatar
              className="post__avatar"
              alt=""
              src={profile_pic !== "" && profile_pic}
            />
            <h3 style={{ cursor: "pointer" }}>{poster.username}</h3>
            <CheckCircleRoundedIcon sx={{width:15, height:15 ,color:"#4080FF"}} className="post__verified" />
          </div>
          <h4 className="post__text">{poster.caption}</h4>

          <img src={samplepost} alt="sdda" className="post__image" />

          <div className="post__likeandlove">  
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
              alt=""
              className="post__like"
            />
            <p>
              {poster.noLikes} {poster.noLikes === 1 ? "Like" : "Likes"}
            </p>
          </div>

          <div className="hr" />

          <div className="post__likeoptions">
            <div className="like" onClick={likeHandle}>
              <ThumbUpOffAltIcon className={show} />
              <h3 className={show2}>Like</h3>
            </div>
            <div className="comment">
              <i className="comment2" />
              <h3 className="dope">Comment</h3>
            </div>
            <div className="share">
              <i className="share2" />
              <h3>Share</h3>
            </div>
          </div>
          <form onSubmit={(event)=> PostUserComment(event,poster.uid)}> 
            <div className="commentBox">
              <Avatar className="post__avatar2" alt="" src={profile_pic} />
              <input
                className="commentInputBox"
                type="text"
                placeholder="Write a comment ... "
                value={comment}
                onChange= {handleNewComment}
              />
              <input
                type="submit"
                disabled={!comment}
                className="transparent__submit"
              />
            </div>
          </form>
          {poster.comments.map((data) => ( //us user ke post mai jitne bhi comments honge unhe show kara hai ye loop
            <div
              className={`comments__show `}
            >
              <Avatar className="post__avatar2" alt="" />
              <div className="container__comments">
                <p>
                  <span>{data.commentname}</span>
                  <CheckCircleRoundedIcon sx={{width:15, height:15 ,color:"#4080FF"}} className="post__verified"/>&nbsp;{data.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Post;
