import React, {useState} from "react";
import './posts.css';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import profile_pic from "../samples/images/profile_pic.jpeg";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Post from '../post/post';
const Posts = () => {
  const [open, setOpen]=useState(false);
  const [image, setImage]=useState('');
  const [imageURL, setImageURL]=useState('');
  const [caption, setCaption]= useState('');
  const [scroll, setScroll]= React.useState('paper');

  const handleChange = (e) => {
    if (e.target.files[0]) {
        setImage(e.target.files[0]);
    }
    setImageURL(URL.createObjectURL(e.target.files[0]));
  };

  const uploadFileWithClick = () => {
    document.getElementsByClassName('four')[0].click();
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
    setImage("");
    setImageURL("");
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
      if (open) {
          const { current: descriptionElement } = descriptionElementRef;
          if (descriptionElement !== null) {
              descriptionElement.focus();
          }
      }
  }, [open]);


  return (//last mai post component hai wo sare post dikhane ke liye aur baki ye upar post upload karne waala section
    <div className="posts">
      <div className="upload">
            <Dialog open={open}
              onClose={handleClose}
              scroll={scroll}>
                <div className="makeStyles-paper-1">
                  <div className="modalInit">
                    <h1>Create Post</h1>
                    <CloseIcon className="closeModalIcon" onClick={handleClose} />
                  </div>
                  <div className="hr2" />
                  <div className="profileHead">
                      <img src={profile_pic} className="Avatar" alt="img"/>
                      <h1>User Name</h1>
                      <div className="inputForUpload">
                        <input onChange={handleChange} type="file" accept="image/*" className='four' />
                        <textarea value={caption} onChange={(e) => setCaption(e.target.value)} rows="4" placeholder={`What's on your mind, user name`} />
                      </div>
                      <div className={`previewImage ${!image && "vanish"}`}>
                        <img src={imageURL} className="previewImaage" alt="preview"/>
                      </div>
                  </div>
                  <div className="publishOptions">
                        <div className="left">
                            <h1>Add to your post</h1>
                        </div>
                        <div className="right">
                            <i className="Icon roomIcon" onClick={uploadFileWithClick} ><VideoCameraBackIcon sx={{width:36,height:36,color:"white"}}/></i>
                            <i className="Icon photoIcon" onClick={uploadFileWithClick} ><PhotoLibraryIcon sx={{width:36,height:36,color:"white"}}/></i>
                            <i className="Icon friendsIcon" ><GroupAddIcon sx={{width:36,height:36,color:"white"}}/></i>
                            <i className="Icon feelingIcon" ><EmojiEmotionsOutlinedIcon sx={{width:36,height:36,color:"white"}}/></i>
                            <i className="Icon tagIcon" ><AddLocationIcon sx={{width:36,height:36,color:"white"}}/></i>
                            <i className="Icon moreIcon" ><MoreHorizIcon sx={{width:36,height:36,color:"white"}}/></i>
                        </div>
                    </div>
                    <button type="submit" className={`postButton ${caption.length < 1 && "disabled"} ${imageURL !== "" && "visible"}`}>Post</button>
                </div>
            </Dialog>
            <div className="imageupload__container">
                <div className="postArea">
                    <img src={profile_pic} className="Avatar" alt="" />
                    <input value={caption} onChange={(e) => setCaption(e.target.value)} onClick={handleClickOpen('body')} placeholder={`What's on your mind, user name`} />
                </div>
                <div className="hr" />
                <div className="options">
                    <div className="liveVideo" onClick={handleClickOpen('body')}>
                        <i className="liveVideoIcon" ><VideoCameraBackIcon sx={{width:36,height:36,color:"white"}}/></i>
                        <h2>Live video</h2>
                    </div>
                    <div className="photo" onClick={handleClickOpen('body')}>
                        <i className="photoIcon" ><PhotoLibraryIcon sx={{width:36,height:36,color:"white"}}/></i>
                        <h2>Photo/Video</h2>
                    </div>
                    <div className="feeling" onClick={handleClickOpen('body')}>
                        <i className="feelingIcon"><EmojiEmotionsOutlinedIcon sx={{width:36,height:36,color:"white"}}/></i>
                        <h2>Feeling/Activity</h2>
                    </div>
                </div>
            </div>
      </div>
      <Post />
    </div>
  );
};

export default Posts;
