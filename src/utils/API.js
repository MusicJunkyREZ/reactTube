import axios from "axios";
const apiKey = "AIzaSyCknGUPkQnteOZqURslh3DIc90JCRdzKlc"

// figure out the params from: https://developers.google.com/youtube/v3/docs/search/list
// return keyword allows us to reuse this instead of just with one call
export default {
    searchYoutTube: function(term) {
        return axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: "snippet",
                q: term,
                type: "video",
                maxResults: 8, //# of results on side
                key: apiKey
            }
        })
    }
}