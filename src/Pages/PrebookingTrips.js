import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Formik } from 'formik';
import { prebookingSchema } from '../validationSchema/validationSchema';
import LocalError from '../Components/Error/validationError';
import { useDispatch } from 'react-redux';
import { addNewTripAction } from '../actions/tripAction';
import { addPrebookingTrip } from '../services/tripService';
import { useNavigate } from 'react-router-dom';


function PrebookingTrips() {
   const navigate = useNavigate()
   const [tripDetails, setTripDetails] = useState({
      // FromCaption: "",
      // ToCaption: "",
      // FromLatitude: "",
      // FromLongitude: "",
      // ToLatitude: "",
      // ToLongitude: "",
      SourceCity: "",
      DistinationCity: "",
      StartDateTime: "",
      // EndDateTime: "",
      // ExpectedDistance: "",
      // ExpectedCost: "",
      // RealCost: "",
      // RealCostWithoutCommission: "",
      // SeatCountId: "",
      // IsGoingOnly: "",
      // ReturnStartDateTime: "",
      // ReturnEndDateTime: "",
      // DiscountProgramId: "",
      CarCategoryId: "",
      // Description: "",
      // Coupon: "",
      CouponValue: "",
      // SystemSettingId: "",
      PaymentType: "",
      start_time: "",
   });

   const dispatch = useDispatch();

   const handleSubmitForm = async (values) => {
      let post = {
         ...values,
         StartDateTime: values?.StartDateTime + " " + values?.start_time
      }
      console.log({ post });
      // dispatch(addNewTripAction(post));
      let res = await addPrebookingTrip(post)
      console.log({ res });
      navigate('/my-trip')
   };
   return (
      <>
         <Header />
         <section class="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }} id='prebooking-trips'>
            <div class="container">
               <div class="banner_head">
                  <h1>Prebooking Trips</h1>
                  <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
               </div>
               <div class="bredcrub">
                  <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <p>Prebooking Trips </p>
               </div>
            </div>
         </section>
         <section class="prebooking_trips ptb60">
            <div class="container">
               <Formik
                  enableReinitialize
                  initialValues={tripDetails}
                  validationSchema={prebookingSchema}
                  validateOnChange={false}
                  validateOnBlur={false}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                     setSubmitting(true);
                     console.log({ values });
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
                  }) =>
                  (
                     <form class="prebooking_form" id="prebooking_form" onSubmit={handleSubmit}>
                        <div class="prebooking_box">
                           <div class="booking_grid">
                              <div class="booking_group">
                                 <label for="SourceCity">Start Place</label>
                                 <input type="text" id="SourceCity" value={values?.SourceCity} placeholder="please enter Start Place" onChange={handleChange} />
                                 <LocalError touched={touched.SourceCity} error={errors.SourceCity} />

                              </div>
                              <div class="booking_group">
                                 <label for="DistinationCity">Arrival Place</label>
                                 <input type="text" id="DistinationCity" value={values?.DistinationCity} placeholder="please enter Arrival Place" onChange={handleChange} />
                                 <LocalError touched={touched.DistinationCity} error={errors.DistinationCity} />

                              </div>
                           </div>
                           <div class="booking_grid">
                              <div class="booking_group">
                                 <label for="StartDateTime">Start date</label>
                                 <input type="date" id="StartDateTime" value={values?.StartDateTime} placeholder="please Select Start date" onChange={handleChange} />
                                 <LocalError touched={touched.StartDateTime} error={errors.StartDateTime} />

                              </div>
                              <div class="booking_group">
                                 <label for="start_time">Start time</label>
                                 <input type="time" id="start_time" value={values?.start_time} placeholder="please Select Start time" onChange={handleChange} />
                                 <LocalError touched={touched.start_time} error={errors.start_time} />

                              </div>
                           </div>
                           <div class="booking_grid">
                              <div class="booking_group">
                                 <label for="PaymentType">Payment type</label>
                                 <select id="PaymentType" onChange={handleChange} value={values?.PaymentType} >
                                    <option value="">please Select Payment type</option>
                                    <option value="credit">Credit Card</option>
                                    <option value="debit">Debit Card</option>
                                    <option value="paypal">PayPal</option>
                                 </select>
                                 <LocalError touched={touched.PaymentType} error={errors.PaymentType} />

                              </div>
                              <div class="booking_group">
                                 <label for="CarCategoryId">Select car category</label>
                                 <select id="CarCategoryId" onChange={handleChange} value={values?.CarCategoryId} >
                                    <option value="">please Select car category</option>
                                    <option value="economy">Economy</option>
                                    <option value="luxury">Luxury</option>
                                    <option value="suv">SUV</option>
                                 </select>
                                 <LocalError touched={touched.CarCategoryId} error={errors.CarCategoryId} />

                              </div>
                           </div>
                           <div class="booking_group">
                              <label for="CouponValue">coupon</label>
                              <input type="text" id="CouponValue" value={values?.CouponValue} placeholder="please enter coupon" onChange={handleChange} />
                              <LocalError touched={touched.CouponValue} error={errors.CouponValue} />

                           </div>
                        </div>
                        <button type="submit" class="prebooking_sub">Prebooking Now</button>
                     </form>
                  )
                  }

               </Formik>
            </div>
         </section>
         <Footer />
      </>
   )
}

export default PrebookingTrips