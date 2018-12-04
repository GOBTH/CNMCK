import React from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';
import Gallery from 'react-grid-gallery';
import InfiniteScroll from 'react-infinite-scroller';

class Pictures extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      library: [],
      page: 1,
      totalPage: 0,
      more: true
    };
  }

  async getAPI(page) {
    var apiKey = '6915dc2d102829596d4583c87a31c6c4';
    var mount = 20;
    var apiData = await axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+ apiKey +'&tags=' + this.props.match.params.id + '&extras=url_m%2C+url_s&per_page='+mount+'&page=' + page + '&format=json&nojsoncallback=1');
    this.setState({totalPage : apiData.data.photos.pages});
    var pictures = apiData.data.photos.photo;
    let nextData = [];
    for(var i in pictures){
      var iD = pictures[i].id;
      var srcPath = 'https://farm'+pictures[i].farm+'.staticflickr.com/'+pictures[i].server+'/'+pictures[i].id+'_'+pictures[i].secret+'.jpg';
      var thumbnailPath = 'https://farm'+pictures[i].farm+'.staticflickr.com/'+pictures[i].server+'/'+pictures[i].id+'_'+pictures[i].secret+'.jpg';
      var width =parseInt(pictures[i].width_m, 10);
      var height = parseInt(pictures[i].height_m, 10);
      var view = pictures[i].views;
      var owner = pictures[i].ownername;
      var tiTle = pictures[i].title;
      const picture = {
        id: iD,
        src: srcPath,
        thumbnail: thumbnailPath,
        thumbnailWidth: width,
        thumbnailHeight: height,
        views: 'View: ' + view ,
        ownername: 'Ownername: '+owner,
        title: tiTle
      }
      nextData.push(picture);
    };
    this.setState({ library: this.state.library.concat(nextData) }); 
    return await apiData.data;
  }

  componentDidMount() {
    (async () => {
        await this.getAPI(this.state.page);
    })();
  }

  loadFunction = () => {
    (async () => {
        await this.getAPI(this.state.page + 1);
        this.setState({
          page: this.state.page + 1,
          more: this.state.page >= this.state.totalPage - 1 ? false : true
        });
    })();
  }

  setCustomTags(i) {
    return (
      <div key={i.id} style={customTagStyle}>
        <p>{i.views}</p>
        <p>{i.ownername}</p>             
      </div>
    );
  }
  
  render() {
    let images = this.state.library.map((i) => {
      i.customOverlay = (
        <div style={captionStyle}>
          <div>
            {i.title}
          </div>
          {this.setCustomTags(i)}
        </div>);
      return i;
    });
    const loader = "loading ..."
    return (
      <div >
        <h2>Tag: {this.props.match.params.id}</h2>
        <InfiniteScroll
          loadMore={() => { this.loadFunction() }}
          loader={loader}
          hasMore={this.state.more}>
          <Gallery images={images}  rowHeight={330}  enableImageSelection={false} onClickThumbnail={(photo) => {
                var id = images[photo].id;
                this.props.history.push('/photo/' + id);
          }} />
        </InfiniteScroll>
      </div>
    );
  }
}

const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  maxHeight: "240px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  color: "white",
  padding: "2px",
  fontSize: "90%"
};

const customTagStyle = {
  wordWrap: "break-word",
  display: "inline-block",
  backgroundColor: "white",
  height: "auto",
  fontSize: "75%",
  fontWeight: "600",
  lineHeight: "1",
  padding: ".2em .6em .3em",
  borderRadius: ".25em",
  color: "black",
  verticalAlign: "baseline",
  margin: "2px"
};

export default Pictures;