import axios from "axios";
import uuid from "react-uuid";
const API_BASE_URL = "http://localhost:5000/api"; // Replace with your actual backend API base URL

// Save new expense to the server
export const saveUser = async (user) => {
  try {
    user.id = uuid();
    user.type = "appusers";
    console.log(user);
    await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    console.log("user saved");
  } catch (err) {
    console.log("Error saving expense: ", err);
    throw err;
  } finally {
    return 200;
  }
};

export const onAddFriendService = async (user) => {
  try {
    user.id = uuid();
    user.type = "usersfriend";
    console.log(user);
    await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    console.log("user and balance saved");
  } catch (err) {
    console.log("Error saving expense: ", err);
    throw err;
  } finally {
    return 200;
  }
};

export const onUpdateFriendService = async (user) => {
  try {
    user.type = "usersfriend";
    console.log("onUpdateFriendService", user);
    await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    console.log("user and balance updated");
  } catch (err) {
    console.log("Error saving expense: ", err);
    throw err;
  } finally {
    return 200;
  }
};

export const getDataFromServer_old = async (email) => {
  try {
    console.log(email);
    const response = await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "items/email/" + email);
    ///items/{column}/{value}
    const data = await response.json();
    const filteredData = data.filter((item) => item.type === "usersfriend");
    // Filter the user by email
    // Return the matched user or null if not found
    return filteredData;
  } catch (err) {
    console.log("Error getting users: ", err);
    return []; // Re-throw the error to handle it outside
  }
};
export const getDataFromServer = async (email) => {
  try {
    console.log("Fetching data for email:", email);

    // Prepare the request body
    const requestBody = {
      column1: "email",
      value1: email,
      column2: "type",
      value2: "usersfriend",
    };

    // Make a POST request to the Lambda endpoint
    const response = await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "items/filter2column", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    // Parse and return the filtered data
    const data = await response.json();
    return data || []; // Return items or an empty array if no items found
  } catch (err) {
    console.log("Error getting users:", err);
    return []; // Return an empty array on error
  }
};
export const fetchUsers_old = async (email) => {
  try {
    console.log(email);
    const response = await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "itemsbytype/appusers");
    ///items/{column}/{value}
    const data = await response.json();
    // Filter the user by email
    const user = data.find((user) => user.email === email);
    // Return the matched user or null if not found
    return user || null;
  } catch (err) {
    console.log("Error getting users: ", err);
    throw err; // Re-throw the error to handle it outside
  }
};

export const fetchUsers = async (email) => {
  try {
    console.log("Fetching user for email:", email);
    // Prepare the request body with filtering conditions
    const requestBody = {
      column1: "email",
      value1: email,
      column2: "type",
      value2: "appusers",
    };

    // Make a POST request to the Lambda endpoint
    const response = await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "items/filter2column", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    // Parse the JSON response
    const data = await response.json();
    return data[0];
  } catch (err) {
    console.log("Error getting users:", err);
    throw err; // Re-throw the error for handling outside
  }
};
