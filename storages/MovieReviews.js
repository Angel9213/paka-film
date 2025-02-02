import AsyncStorage from "@react-native-async-storage/async-storage";
import { deepEqual } from "../utils/common";

// My Review
export const storeMyReview = async (review) => {
  try {
    const existingReviews = await getMyReviews();
    const updatedReviews = [...existingReviews, review];
    await storeMyReviews(updatedReviews);
  } catch (e) {
    console.error("Error storing my review:", e);
  }
};

const storeMyReviews = async (reviews) => {
  try {
    const jsonReviews = JSON.stringify(reviews);
    await AsyncStorage.setItem("myReviews", jsonReviews);
  } catch (e) {
    console.error("Error storing my reviews:", e);
  }
};

export const getMyReviews = async () => {
  try {
    const jsonReviews = await AsyncStorage.getItem("myReviews");
    if (jsonReviews !== null) {
      const reviews = JSON.parse(jsonReviews);
      return reviews;
    }
    return [];
  } catch (e) {
    console.error("Error retrieving my reviews:", e);
    return [];
  }
};

export const removeMyReview = async (review) => {
  try {
    const existingReviews = await getMyReviews();
    const updatedReviews = existingReviews.filter(
      (existingReview) => !deepEqual(existingReview, review)
    );
    await storeMyReviews(updatedReviews);
  } catch (e) {
    console.error("Error removing my review:", e);
  }
};

// Public Review
export const storePublicReviews = async (reviews) => {
  try {
    const jsonReviews = JSON.stringify(reviews);
    await AsyncStorage.setItem("publicReviews", jsonReviews);
  } catch (e) {
    console.error("Error storing public reviews:", e);
  }
};

export const getPublicReviews = async () => {
  try {
    const jsonReviews = await AsyncStorage.getItem("publicReviews");
    if (jsonReviews !== null) {
      const reviews = JSON.parse(jsonReviews);
      return reviews;
    }
    return [];
  } catch (e) {
    console.error("Error retrieving public reviews:", e);
    return [];
  }
};

//Movies
export const storeMovies = async (movies) => {
  try {
    const jsonMovies = JSON.stringify(movies);
    await AsyncStorage.setItem("Movies", jsonMovies);
  } catch (e) {
    console.error("Error storing public movies:", e);
  }
};

export const getMovies = async () => {
  try {
    const jsonMovies = await AsyncStorage.getItem("Movies");
    if (jsonMovies !== null) {
      const movies = JSON.parse(jsonMovies);
      return movies;
    }
    return [];
  } catch (e) {
    console.error("Error retrieving public movies:", e);
    return [];
  }
};
