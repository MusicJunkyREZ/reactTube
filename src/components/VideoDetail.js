import React from "react";

// pulling props.selectedVideo off into the const name "selectedVideo" and put into curlies
const VideoDetail = ({ selectedVideo }) => {
    // this has to be here otherwise an error will occur because selected video will not exist immediately
    // it is asyncronous so you will run an error since the default is null
    if (!selectedVideo) return <h2>Loading spinner goes here</h2>

    const videoId = selectedVideo.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`
    
    return (
        <section>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title={selectedVideo.snippet.title} src={videoUrl} allowFullScreen></iframe>
            </div>
            <h2>{selectedVideo.snippet.title}</h2>
            <p>{selectedVideo.snippet.description}</p>
        </section>
    )
}

export default VideoDetail;