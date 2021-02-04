import React, {Component} from 'react';
import Player from 'react-video-js-player';

class VideoPlayer extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.src !== prevProps.src && this.props.poster !== prevProps.poster ) {
      this.setState({
        video: {
          src: this.props.src,
          poster: this.props.poster
        }
      });
    }
  }

  render() {
      return (
          <div>
              {
                this?.state?.video?.src ?
                  <Player
                      controls={true}
                      src={this?.state?.video?.src}
                      poster={this?.state?.video?.poster}
                      width="720"
                      height="420"
                  /> : ''
              }
          </div>
      );
  }
}
export default VideoPlayer;
