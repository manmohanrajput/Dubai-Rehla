import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { signUpSchema, userSchema } from '../validationSchema/validationSchema';
import LocalError from '../Components/Error/validationError';
import { convertBase64 } from '../services/utils';
import { updateProfileAction, updateProfileImageAction } from '../actions/authAction';
import moment from 'moment/moment';
import ProfileSpinner from '../Components/CustomLoader/profileSpinner';


function EditProfile() {
   const {userDetails,isUploading} = useSelector((state) => state.userStore);
   
   const dispatch= useDispatch()

   const handleSubmitForm = async (values) => {
       
      await dispatch(updateProfileAction({...values,Gender:values?.Gender==="male"}))
     };
   

     const handleProfilePhoto = async (e, setFieldValue) => {
      e.preventDefault()
      const file = e.target.files[0];
      if(file){
         const base64 = await convertBase64(file);
          dispatch(updateProfileImageAction({ProfilePhoto:base64.split(",")[1]})) 
        
      }
      
    };

  return (
    <>
        <Header/>
        <section class="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}}>
      <div class="container">
         <div class="banner_head">
            <h1>Edit profile</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
         </div>
         <div class="bredcrub">
            <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow"/></span> 
            <p>Edit profile </p>
         </div>
      </div>
   </section>
   <section class="profile_edit ptb100">
      <div class="container">
         <div class="profile_box">
         <Formik
              enableReinitialize
              initialValues={{...userDetails,Gender:userDetails?.Gender?"male":"female"}}
                validationSchema={userSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                await handleSubmitForm(values);
                resetForm();
                setSubmitting(false);
              }}
            >
               {({
                values,
                errors,
                touched,            
                handleChange,
                setFieldValue,
               handleSubmit
                
              })=>
               (
              <form class="edit_profile" id="edit_profile" onSubmit={handleSubmit}>
               <div class="avatar_box edit_avatar">
                  <div class="avatar_inner edit_inner relative">
                      <img src={values?.ProfilePhoto||"images/OBJECTS.webp"} alt="Avatar" id="avatarPreview" class="avatar_img edit_img" />
                     {isUploading&& <div className='spinner-container'><ProfileSpinner/></div>}
                      <label for="avatarUpload" class="upload_btn edit_btn">
                          <img src="images/camera-icon.webp" alt="Camera Icon" width="20" height="20"/>
                      </label>
                      <input type="file" id="avatarUpload" name="avatarUpload" accept="image/*"  onChange={(e) => handleProfilePhoto(e, setFieldValue)}/>
                  </div>
               </div>
               <div class="edit_grid edit_box">
                  <div class="form_edit">
                      <label for="fullName">Full Name*</label>
                      <input type="text" id="fullName" name="Name" placeholder="Enter Full Name" value={values?.Name} onChange={handleChange}/>
                  </div>
                  <LocalError touched={touched.Name} error={errors.Name} />
                  <div class=" form_edit">
                         <label for="phone">Phone Number*</label>
                         <div class="phone_box">
                            <select id="country_code" name="PhoneKey" value={values?.PhoneKey} onChange={handleChange}>
                                <option value="+965">+965</option>
                                <option value="+966">+966</option>
                                <option value="+91">+91</option>
                            </select>
                            <input type="tel" id="phone" name="PhoneNumber" value={values?.PhoneNumber} placeholder="Enter phone number" onChange={handleChange} />
                            <LocalError touched={touched.PhoneNumber} error={errors.PhoneNumber} />
                         </div>
                  </div>
               </div>
               <div class="edit_grid">
                  <div class=" form_edit">
                      <label for="email">Email*</label>
                      <input type="email" id="email" name="Email" placeholder="Enter Email" value={values?.Email} onChange={handleChange}/>
                      <LocalError touched={touched.Email} error={errors.Email} />
                  </div>
                  <div class=" form_edit edit_date birth_date">
                     <label for="dob">Date of Birth*</label>
                     <input type="date" id="dob" name="DateOfBirth" placeholder="Select date of birth" value={moment(values?.DateOfBirth).format("yyyy-MM-DD")} onChange={handleChange}/>
                  </div>
               </div>      
               <div class="selection_box">               
                  <label>Gender*</label>
                  <div class="gender_selection">
                     <div class="genders_grid">
                        <input type="radio" name="Gender" checked={values?.Gender === "female"}
                          onChange={handleChange} />
                        <label for="female" class="gender_option">
                            <span>Female</span>
                            <img src="images/female-icon.svg" alt="Female Icon"/>
                        </label>
                     </div>
                     <div class="genders_grid">
                        <input type="radio" name="Gender"  checked={values?.Gender === "male"}
                          onChange={handleChange} />
                        <label for="male" class="gender_option">
                           <span>Male</span>
                              <img src="images/male-icon.svg" alt="Male Icon"/>
                        </label>
                     </div>  
                  </div>
               </div>
               <button type="submit" class="edit_sub">Edit profile</button>
            </form>
         )
         }
            
            </Formik>
         </div>
      </div>
   </section>
        <Footer/>
    </>
  )
}

export default EditProfile