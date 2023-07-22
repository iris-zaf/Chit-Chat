import axios from "axios";

const PostRegistData = async (data) => {
  try {
    await axios.post("http://localhost:3001/register", data);
    alert("Registered  Successfully");
    return true;
  } catch (error) {
    alert("Unable to Register...");
    console.log(error);
    return false;
  }
};

export default PostRegistData;
