
import { APICONSTANTS } from "../constants/authConstants";
import authInterceptor from "../interceptor/authinterceptor";
import commonInterceptor from "../interceptor/commonInterceptor";
import { handleApiError } from "./utils";

export const addPrebookingTrip = async (formData) => {
  try {
    const res = await authInterceptor.post(APICONSTANTS.AddPrebookingTrip, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const GetTouristAreas = async () => {
  try {
    const res = await commonInterceptor.get(APICONSTANTS.getTouristAreas);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}
export const GetAllAdvertisments = async () => {
  try {
    const res = await commonInterceptor.get(APICONSTANTS.getAllAdvertisments);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}
export const ContactUs = async (data) => {
  try {
    const res = await authInterceptor.post(APICONSTANTS.contactUs, data);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}
export const AboutApplication = async () => {
  try {
    const res = await commonInterceptor.get(APICONSTANTS.aboutApplication);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}
export const GetTermAndConditions = async () => {
  try {
    const res = await commonInterceptor.get(APICONSTANTS.getTermAndConditions);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}

export const getRatingsByUserId = async (formData) => {
  try {
    const res = await authInterceptor.get(APICONSTANTS.getRatesByUserId(formData));
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}

export const DriverCommentRate = async (data) => {
  try {
    const res = await authInterceptor.post(APICONSTANTS.DriverComment(data));
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}


export const GetTransactions = async (page = 1) => {
  try {
    const res = await authInterceptor.get(APICONSTANTS.getAllTransactions(page));
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}
export const AddWithdrawalRequest = async (data) => {
  try {
    const res = await authInterceptor.post(APICONSTANTS.addWithdrawalRequest(data));
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}
export const AddTransaction = async (data) => {
  try {
    const res = await authInterceptor.get(APICONSTANTS.addTransaction(data));
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}
export const GetBanks = async () => {
  try {
    const res = await authInterceptor.get(APICONSTANTS.getBanks);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}