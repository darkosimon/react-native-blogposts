import axios from "axios";

export default axios.create({
  baseURL: "https://ce6e-77-28-4-6.ngrok-free.app",
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
});
