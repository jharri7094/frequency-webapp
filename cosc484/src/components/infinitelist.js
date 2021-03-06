import React, { Component, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from './Post';

export default class InfiniteList extends Component {
  
  state = {
    items: Array.from({ length: 20 })
  };
  
  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };

  render() {
    return (
        <Fragment>
            <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMoreData}
                hasMore={false}
                loader={<h4>Loading...</h4>}
            >
                {this.state.items.map((item, index) => (
                  <Post key='index' imageUrl='https://www.incimages.com/uploaded_files/image/1920x1080/getty_626660256_2000108620009280158_388846.jpg' title='My Post' body='Etiam pellentesque sit amet eros non placerat. Sed at dictum justo, eu accumsan nisl. Pellentesque a nunc at lectus aliquet pharetra.' />
                ))}
            </InfiniteScroll>
        </Fragment>
    );
  }
}
