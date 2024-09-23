import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { registerTravelerSchema } from '../validationSchema/validationSchema';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

function RegisterTraveler() {
   const { t } = useTranslation();


    const handleSubmitForm = async (values) => {
        console.log({ values });
        // let res = await AddWithdrawalRequest(values)
        // console.log({ res });
        // navigate('/my-wallet');

    };
    return (
        <>
            <Header />
            <section class="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
                <div class="container">
                    <div class="banner_head">
                        <h1>{t('header.registerAsTraveler')}</h1>
                        <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
                    </div>
                    <div class="bredcrub">
                        <a href="index.html" target="_self">{t('header.home')}</a><span> <img src="images/arrow.png" alt="arrow" /></span>
                        <p>{t('header.registerAsTraveler')}</p>
                    </div>
                </div>
            </section>
            <section class="prebooking_trips ptb60">
                <div class="container">
                    <Formik
                        enableReinitialize
                        initialValues={{
                            experience: "",
                            cost: "",
                            cities: "",
                            languages: "",
                            license: "",
                            biography: "",
                            trip: "",
                            terms: "",
                        }}
                        validationSchema={registerTravelerSchema}
                        validateOnChange={false}
                        validateOnBlur={false}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                            setSubmitting(true);
                            await handleSubmitForm(values);
                            console.log({ values });
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
                        }) =>
                        (
                            <form class="prebooking_form" id="prebooking_form" onSubmit={handleSubmit} name="prebooking_form">

                                {/* <form method="post" action="#" class="prebooking_form" id="prebooking_form"> */}
                                <div class="prebooking_box">
                                    <div class="booking_grid">
                                        <div class="booking_group">
                                            <label for="experience">Years of Experience*</label>
                                            <input onChange={handleChange} value={values?.experience} type="number" id="experience" minlength="0" name="experience" placeholder="5" required />
                                        </div>
                                        <div class="booking_group">
                                            <label for="cost">Hourly cost*</label>
                                            <input onChange={handleChange} value={values?.cost} type="text" id="cost" name="cost" placeholder="250 SAR" required />
                                        </div>
                                    </div>
                                    <div class="booking_grid">
                                        <div class="booking_group">
                                            <label for="cities">Select work cities*</label>
                                            <div class="select-multiple">
                                                <button onChange={handleChange} value={values?.cities} type="button">Al-Ula</button>
                                                <button type="button">Makkah</button>
                                                <button type="button">Al Ahsa</button>
                                            </div>
                                            <select id="cities" name="cities" multiple style={{ display: 'none' }}>
                                                <option>Al-Ula</option>
                                                <option>Makkah</option>
                                                <option>Al Ahsa</option>
                                            </select>
                                        </div>
                                        <div class="booking_group">
                                            <label for="languages">Languages*</label>
                                            <div class="select-multiple">
                                                <button type="button">Arabic</button>
                                                <button type="button">English</button>
                                                <button type="button">Spanish</button>
                                            </div>
                                            <select id="languages" name="languages" multiple style={{ display: 'none' }}>
                                                <option>Arabic</option>
                                                <option>English</option>
                                                <option>Spanish</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="booking_group">
                                        <label for="license">Expert license*</label>
                                        <input onChange={handleChange} value={values?.license} type="file" id="license" name="license" placeholder="Attach a copy of the license" required />
                                    </div>
                                    <div class="booking_group">
                                        <label for="biography">Biography*</label>
                                        <textarea onChange={handleChange} value={values?.biography} id="biography" name="biography" placeholder="An introduction about yourself" required></textarea>
                                    </div>
                                    <div class="booking_group">
                                        <label for="trip">Trip programme*</label>
                                        <textarea onChange={handleChange} value={values?.trip} id="trip" name="trip" placeholder="Enter Trip programme in details" required></textarea>
                                    </div>
                                    <div class="booking_group checkbox-group">
                                        <input type="checkbox" id="terms" name="terms" onChange={handleChange} value={values?.terms} required />
                                        <label for="terms">Accept <a href="#">Terms & conditions</a></label>
                                    </div>
                                </div>

                                <button type="submit" value="Prebooking Now" class="prebooking_sub">Send</button>
                            </form>
                        )}
                    </Formik>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default RegisterTraveler