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
                      className="player"
                      controls={true}
                      src={this?.state?.video?.src}
                      poster={this?.state?.video?.poster}
                  /> : ''
              }
          </div>
      );
  }
}
export default VideoPlayer;
