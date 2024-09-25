import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Formik } from "formik";
import { signUpSchema } from "../validationSchema/validationSchema";
import { convertBase64 } from "../services/utils";
import LocalError from "../Components/Error/validationError";
import { useDispatch } from "react-redux";
import { signUpAction } from "../actions/authAction";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Registration() {
  const { t } = useTranslation();

  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = async (values) => {
    console.log(values);  // Debug the form values
    await dispatch(signUpAction({ ...values }, navigate));
  };

  const handleProfilePhoto = async (e, setFieldValue) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setFieldValue("ProfilePhoto", base64);
  };

  return (
    <>
      <Header />
      <section class="my_account account_create">
        <div class="account_inner">
          <div
            class="account_left"
            style={{ backgroundImage: `url(${"../../images/carefree.webp"})` }}
          >
            <div class="white_logo">
              <img src="images/WhiteLogo.webp" alt="white logo image" />
            </div>
          </div>
          <div class="account_content">
            <h2 class="box_heading">{t("Registration.createNew")}</h2>
            <Formik
              enableReinitialize
              initialValues={{
                Name: "",
                Email: "",
                Password: "",
                PhoneKey: "+966",
                IsSaudi: true,
                IdentityNumber: "1064860119",
                PhoneNumber: "",
                DateOfBirth: "",
                CityId: 18,
                Gender: "",  // No default gender selection
                ProfilePhoto: "",
              }}
              validationSchema={signUpSchema}
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
                handleSubmit,
              }) => (
                <form
                  class="login_account create_form"
                  onSubmit={handleSubmit}
                  id="create_form"
                >
                  <div class="avatar_box">
                    <div class="avatar_inner">
                      <img
                        src={values?.ProfilePhoto || "images/OBJECTS.webp"}
                        alt="Avatar"
                        id="avatarPreview"
                        class="avatar_img"
                      />
                      <label for="avatarUpload" class="upload_btn">
                        <img
                          src="images/camera-icon.webp"
                          alt="Camera Icon"
                          width="20"
                          height="20"
                        />
                      </label>
                      <input
                        type="file"
                        id="avatarUpload"
                        name="avatarUpload"
                        accept="image/*"
                        onChange={(e) => handleProfilePhoto(e, setFieldValue)}
                      />
                    </div>
                  </div>
                  <div class="form_group">
                    <label for="fullName">{t("Registration.FullName")}</label>
                    <input
                      type="text"
                      id="fullName"
                      name="Name"
                      placeholder="Enter Full Name"
                      value={values?.Name}
                      onChange={handleChange}
                    />
                    <LocalError touched={touched.Name} error={errors.Name} />
                  </div>
                  <div class="form_group ">
                    <label for="phone">{t("Registration.PhoneNumber")}</label>
                    <div class="phone_box">
                      <select
                        id="country_code"
                        name="PhoneKey"
                        class="flag_select"
                        value={values?.PhoneKey}
                        onChange={(e) => setFieldValue("PhoneKey", e.target.value)}  // Fix onChange
                      >
                        <option value="+965" class="flag_option">
                          <img src="images/flag.svg" alt="US Flag" width="20" />{" "}
                          +965
                        </option>
                        <option value="+91" class="flag_option">
                          <img
                            src="images/flag.svg"
                            alt="India Flag"
                            width="20"
                          />{" "}
                          +91
                        </option>
                        <option value="+966" class="flag_option">
                          <img
                            src="images/flag.svg"
                            alt="India Flag"
                            width="20"
                          />{" "}
                          +966
                        </option>
                      </select>
                      <input
                        type="tel"
                        id="PhoneNumber"
                        name="PhoneNumber"
                        placeholder="Enter phone number"
                        value={values?.PhoneNumber}
                        onChange={handleChange}
                      />
                      <LocalError
                        touched={touched.PhoneNumber}
                        error={errors.PhoneNumber}
                      />
                    </div>
                  </div>
                  <div class="form_group">
                    <label for="email">{t("Registration.Email")}</label>
                    <input
                      type="email"
                      id="email"
                      name="Email"
                      placeholder="Enter Email"
                      value={values?.Email}
                      onChange={handleChange}
                    />
                    <LocalError touched={touched.Email} error={errors.Email} />
                  </div>
                  <div class="form_group">
                    <label for="password">{t("Registration.Password")}</label>
                    <div class="password_box">
                      <input
                        type={showPass ? "text" : "password"}
                        id="password"
                        name="Password"
                        class="password_input"
                        placeholder="Password"
                        value={values?.Password}
                        onChange={handleChange}
                      />
                      <span
                        class="show_password"
                        onClick={() => setShowPass(!showPass)}
                      >
                        {showPass ? (
                          <img src="images/hide-icon.svg" class="hide" />
                        ) : (
                          <img src="images/show-icon.svg" class="show" />
                        )}{" "}
                      </span>
                    </div>
                    <LocalError
                      touched={touched.Password}
                      error={errors.Password}
                    />
                  </div>
                  <div class="form_group birth_date">
                    <label for="dob">{t("Registration.DateofBirth")}</label>
                    <input
                      type="date"
                      id="DateOfBirth"
                      name="DateOfBirth"
                      placeholder="Select date of birth"
                      value={values?.DateOfBirth}
                      onChange={handleChange}
                    />
                    <LocalError
                      touched={touched.DateOfBirth}
                      error={errors.DateOfBirth}
                    />
                  </div>
                  <div class="form_group gender gender_select">
                    <label>{t("Registration.Gender")}</label>
                    <div class="gender_options">
                      <label>
                        <input
                          type="radio"
                          name="Gender"
                          value="female"
                          checked={values?.Gender === "female"}
                          onChange={() => setFieldValue("Gender", "female")}
                        />
                        <span class="gender_cat">
                          Female
                          <img src="images/female-icon.svg" alt="female" />
                        </span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="Gender"
                          value="male"
                          checked={values?.Gender === "male"}
                          onChange={() => setFieldValue("Gender", "male")}
                        />
                        <span class="gender_cat">
                          Male
                          <img src="images/male-icon.svg" alt="Male" />
                        </span>
                      </label>
                    </div>
                    <LocalError touched={touched.Gender} error={errors.Gender} />
                  </div>
                  <button type="submit" class="login_button register_btn">
                    {t("Registration.RegisterNow")}
                  </button>
                  <div class="create_account">
                    <p onClick={() => navigate("/login")}>
                      {t("Registration.Already")}{" "}
                      <a href="javascript:void(0)">
                        {" "}
                        {t("Registration.LoginNow")}
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Registration;
