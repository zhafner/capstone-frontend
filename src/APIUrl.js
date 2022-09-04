let APIUrl = "http://localhost:3001";

if (window.location.href.includes("streamline.zhafner.com") || window.location.href.includes("herokuapp.com")){
    APIUrl = "https://zhafner-capstone-backend.herokuapp.com";
}

export default APIUrl;