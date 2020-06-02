import React from "react";
import getparams from "../../assets/utils/getparams";
class VideoPage extends React.Component {
    componentDidMount(){
        let types = getparams(this.props.location.search).search.types
    }
    render(){
        return(
            <div>视频</div>
        )
    }
}

export default VideoPage;