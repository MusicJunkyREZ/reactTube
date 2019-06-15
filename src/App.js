import React, {Component} from 'react';
import _ from "lodash";
import { Container, Row, Col} from "reactstrap";
import API from "./utils/API";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import {VideoList, VideoListItem} from "./components/VideoList";


class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount(){
    this.searchYouTube("using react.js")
  }

  searchYouTube = term => {
    API.searchYoutTube(term)
      // captures return value from call above
      .then(res => this.setState({videos: res.data.items, selectedVideo: res.data.items[0]}))
      .catch(err => console.log(err))
  }

  onVideoSelect = (selectedVideo) => {
    this.setState({selectedVideo: selectedVideo}); //you can also just do this.setState({selectedVideo})
  }

  throttledSearch = _.debounce(this.searchYouTube, 800)

  render(){
    return (
      <Container>
        <Row>
          <Col>
            <h1>YouTube React Search</h1>
            <SearchBar  searchYouTube={this.throttledSearch}/>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <VideoDetail selectedVideo={this.state.selectedVideo}/>
          </Col>
          <Col md="4">
            <VideoList>
              {/* mapping a new array of the videos for the video list and assigning
              a unique id to each so react will know which is which, grabbing that id
              from the id that youtube already gives it */}
              {this.state.videos.map(video => (
                <VideoListItem 
                  video={video} 
                  key={video.id.videoId} 
                  selectedVideo={this.state.selectedVideo}  
                  onVideoSelect={this.onVideoSelect}
                />
              ))}
            </VideoList>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default App;
