import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styled from "./style";

class NewsDetails extends Component {
    componentDidMount = () => {
        const { topStories: { data }, history } = this.props;
        
        // if the store is being cleared it will redirect to the home page
        !data && history.push('./')
    }

    render() {
        const { topStories: { data } } = this.props;
        let imgObj = data[0] && data[0].multimedia.find(media => media.subType === "superJumbo");
        return (
            <Styled.Container>
                <h2>{data[0] && data[0].abstract}</h2>
                <img src={imgObj ? `//www.nytimes.com/${imgObj.url}` : ''}></img>
                <p>{data[0] && data[0].lead_paragraph}</p>
            </Styled.Container>
        );
    }
}

const mapState = state => ({
    topStories: state.topStories,
})

export default connect(
    mapState,
)(NewsDetails)

