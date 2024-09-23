import { setIsLoading } from "../slices/commonSlice";
import * as TripApi from "../services/tripService"
import { toast } from "react-toastify";

export const addNewTripAction=(formData,navigate)=>async(dispatch)=>{
    try{
        dispatch(setIsLoading(true))
       const response= await TripApi.addPrebookingTrip(formData)
       const {data,error}= response
         console.log({data})
       if (error) {
         
         toast.error(response?.error)
         dispatch(setIsLoading(false))
       } else {
         toast.success(data?.metas?.message)
         dispatch(setIsLoading(false))
        //  navigate(ROUTESCONSTANTS.VERIFICATION,{state:formData});
       }
    }
    catch(error){
 
    }
   };

export const getMyRates=(formData)=>async(dispatch)=>{
    try{
        dispatch(setIsLoading(true))
       const response= await TripApi.getRatingsByUserId(formData)
       const {data,error}= response
         console.log({data})
       if (error) {
         
         toast.error(response?.error)
         dispatch(setIsLoading(false))
       } else {
         toast.success(data?.metas?.message)
         dispatch(setIsLoading(false))
        //  navigate(ROUTESCONSTANTS.VERIFICATION,{state:formData});
       }
    }
    catch(error){
 
    }
}

// actions/tripAction.js

export const submitRating = (data) => async (dispatch) => {
  try {
    const response = await TripApi.DriverCommentRate(data); // Send the review to the API
    const { data, error } = response;

    if (error) {
      toast.error('Error submitting rating');
    } else {
      dispatch({
        type: 'ADD_REVIEW_SUCCESS',
        payload: data.review, // Add the new review to the store
      });
      toast.success('Review submitted successfully');
    }
  } catch (error) {
    toast.error('Failed to submit review');
  }
};



// DriverCommentRate