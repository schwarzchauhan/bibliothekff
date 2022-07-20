import React, { useEffect, useState } from 'react';
import UserService from '../../services/UserService'


function Profile(props) {
    
  const userService = new UserService();
  const [picture, setPicture] = useState({});
    
  const uploadPicture = (e) => {
    var files = e.target.files;
    var fileName = files[0].name;
    setPicture({
        /* contains the preview, if you want to show the picture to the user
           you can access it with this.state.currentPicture
       */
        picturePreview : URL.createObjectURL(e.target.files[0]),
        /* this contains the file we want to send */
        pictureAsFile : e.target.files[0], 
        pictureName: fileName
    })
  };

  const setImageAction = async (event) => {
    try {
      event.preventDefault();
    console.log(picture);
      var formData = new FormData();
      formData.append(
          "image",
          picture.pictureAsFile
      );
      console.error('formData', formData);
      // do your post request
      const link = await userService.uploadImg(formData);
      console.error('link', link);
    } catch (error) {
      console.error('error', error);
    }
  };

  useEffect(() => {
    // updated useerdetails
    console.log(picture);
  }, [picture]);

    return (
        <div className="cstm-profile-cont container p-3 d-flex justify-content-center">
        <div className="card p-4">
          <div className="profileImg d-flex flex-column justify-content-center align-items-center">
            <button className="btn btn-secondary">
            {picture.picturePreview &&  <img src={picture.picturePreview} alt="" height="100" width="100" />}
              {!picture.picturePreview &&  <img src={props.imgUrl} height="100" width="100" />}
            </button>
            <div className='text-center'>
              <form onSubmit={setImageAction}>
                <br />
                <label for="dpImg" className='dpUpload-fld'>
                  Select Image <br/>
                  <i class="lni lni-camera"></i>
                  <input  id="dpImg" type="file" name="image" onChange={uploadPicture} />
                  <br/>
                  <span id="dpImgName">{picture.pictureName}</span>
                </label>
                <br />
                <br />
                <button className='btn btn-primary' type="submit" name="upload">
                  Upload
                </button>
              </form>
            </div>     
            <span className="mt-3 fw-bold fs-5 text-uppercase">{props.name}</span>
            <span className="fw-bold fs-6">@{props.username}</span>
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
              <span className="fs-6">{props._id}</span>
              <span>
                <i className="">📄</i>
              </span>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
              <span className="fw-bold fs-5">0 <span className="fs-6 fw-light">Followers</span>
              </span>
            </div>
            <div className=" d-flex mt-2">
              <button className="btn1 btn-dark">Edit Profile</button>
            </div>
            <div className="text mt-3">
              <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork. <br />
                <br /> Artist/ Creative Director by Day #NFT minting@ with FND night. </span>
            </div>
            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                <a className="btn  btn-floating m-1" href="#!" role="button"><i className="lni lni-facebook-filled"></i></a>
                <a className="btn  btn-floating m-1" href="#!" role="button"><i className="lni lni-twitter-original"></i></a>
                <a className="btn  btn-floating m-1" href="#!" role="button"><i className="lni lni-instagram-original"></i></a>
                <a className="btn  btn-floating m-1" href="#!" role="button"><i className="lni lni-whatsapp"></i></a>
                <a className="btn  btn-floating m-1" href="#!" role="button"><i className="lni lni-telegram-original"></i></a>
                <a className="btn  btn-floating m-1" href="#!" role="button"><i className="lni lni-github-original"></i></a>
            </div>
            <div className="px-2 rounded mt-4 createdAt-date">
              <span className="fw-bold">Joined May,2021</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Profile;