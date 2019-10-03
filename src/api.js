import React from 'react';
import Axios from 'axios';

import Title from './components/title';

class Episodes extends React.Component {
  // constructor(props) {
  //   super(props);
  state = {
    episodes: [],
    // isLoaded: false
  }
  // }

  componentDidMount() {
    Axios.get('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes')
      .then(res => {
        const episodes = res.data._embedded.episodes;
        // console.log(episodesSummary);
        // this.state.episodes.push(episodes);
        this.setState({ episodes })
        // isLoaded: true

        // this.setState({
        //   episodes: episodesName
        // });
      })
  }
  render() {
    return (
      <div className="list">
        {this.state.episodes.map(episodios => <img src={episodios.image.medium} className="img"/>)}
        {this.state.episodes.map(episodios => <h2 className="names">{episodios.name}</h2>)}
        {this.state.episodes.map(episodios => <p className="text">{episodios.summary}</p>)}
      </div>
    )

  }

  // const episodios = this.state.episodes.map((episodes) => {
  //   return episodes;
  // console.log(episodes)
  // <h2 style= "ahahah"> {episodes.name} </h2>
  // <Title title= {episodes} />


  // return(
  //   <div>
  //     {this.state.isLoaded ? <Title title= {episodios}/> : "Data is not loaded, yet."}

  //   </div>
  // )

}

export default Episodes;