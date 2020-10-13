import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews, updateData, saveNewsOnSelection } from '../../redux/actionCreators/newsUpdates';
import Loader from '../../component/Loader'
import Header from '../../component/Header'
import Styled from "./style";
import NewsCategory from '../../component/NewsCategory';
import { catagoryList } from './dataModal';
import SearchNews from '../../component/SearchNews';

class Home extends Component {
  constructor(props) {
    super(props);

    // initial states
    this.state = {
      unformattedResponse: ''
    }
  }
  componentDidMount = () => {
    this.props.fetchNews()
      .then(resp => {
        if (resp) {
          this.setState({
            unformattedResponse: resp
          })
        }
      })
  }

  otherNews = (data) => {
    const nonFeaturedNews = data && data.filter(item => item.section_name !== 'U.S.');
    return (
      <Styled.SubContentWrapper>
        <ul className="listStyle">
          {nonFeaturedNews && nonFeaturedNews.map(item => {
            return (
              <li key={item._id} onClick={() => this.handleOnclickNews(item._id)}>
                <h4>{item.abstract}</h4>
                <p>{item.lead_paragraph}</p>
              </li>
            )
          })}
        </ul>
      </Styled.SubContentWrapper>
    )
  }

  // will redirect to detail page
  handleOnclickNews = (id) => {
    const { history, saveNewsOnSelection, topStories: { data } } = this.props;
    const fileterBasedOnSelection = data && data.filter(item => item._id === id);
    saveNewsOnSelection(fileterBasedOnSelection);
    history.push('./detail')
  }

  featuredNews = (data) => {
    const feauredNews = data && data.filter(item => item.section_name === 'U.S.');
    return (
      <Styled.SubContentWrapper>
        <ul className="featuredListStyle listStyle">
          {feauredNews && feauredNews.map(item => {
            let imgObj = item.multimedia.find(media => media.subType === "superJumbo");
            return (
              <li key={item._id} onClick={() => this.handleOnclickNews(item._id)}>
                <img src={imgObj ? `//www.nytimes.com/${imgObj.url}` : ''}></img>
                <div className="imageWrapper">
                  <h4>{item.abstract}</h4>
                  <p>{item.lead_paragraph}</p>
                  <span>Source: {item.source}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </Styled.SubContentWrapper>
    )
  }

  // search feature based on inputted data
  handleChange = (event) => {
    const {unformattedResponse} = this.state;
    if (!event.target.value) {
      this.props.updateData(unformattedResponse)
      return
    }
    const searchResult = this.props.topStories.data.filter(unformattedResponse => unformattedResponse.lead_paragraph.includes(event.target.value))
    this.props.updateData(searchResult)
  }

  // news filtering as per their section name
  fileterNews = (event) => {
    const { target: { innerText } } = event;
    const { unformattedResponse } = this.state;
    const filteredData = unformattedResponse.filter(item => item.section_name.toUpperCase() === innerText)
    this.props.updateData(innerText === 'ALL NEWS' ? unformattedResponse : filteredData)
  }

  render() {
    const { apiStatus: { isProcessing }, topStories: { data } } = this.props;
    return (
      <Styled.Container>
        <Loader isLoading={isProcessing} />
        <Header
          headingText="Daily News"
          subHeading="The latest news updates"
        />
        <SearchNews
          handleChange={this.handleChange}
          labelText="Search here"
        />

        {/* catagoryList array from datamodal file */}
        <NewsCategory
          categoryList={catagoryList}
          fileterNews={this.fileterNews}
        />

        {/* news related to U.S as featured news */}
        {this.featuredNews(data)}
        {this.otherNews(data)}
        {!data.length && <p className="noContentStyle">Sorry, No content available</p>}
      </Styled.Container>
    );
  }
}

const mapState = state => ({
  topStories: state.topStories,
  apiStatus: state.apiStatus
})

const mapDispatch = dispatch => {
  return {
    fetchNews: () => dispatch(fetchNews()),
    updateData: (data) => dispatch(updateData(data)),
    saveNewsOnSelection: (data) => dispatch(saveNewsOnSelection(data))
  }
}

export default connect(
  mapState,
  mapDispatch
)(Home)

