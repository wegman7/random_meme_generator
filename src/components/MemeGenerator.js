import React from 'react';
import axios from 'axios';

import Header from './Header';

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            top_text: '',
            bottom_text: '',
            meme_url: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        let rand = Math.random();
        axios.get('https://api.imgflip.com/get_memes')
            .then(response => {
                let index = Math.floor(rand * response.data.data.memes.length)
                this.setState(prevState => {
                    return {
                        meme_url: response.data.data.memes[index].url
                    }
                })
            })
    }

    handleClick() {
        let rand = Math.random();
        axios.get('https://api.imgflip.com/get_memes')
            .then(response => {
                let index = Math.floor(rand * response.data.data.memes.length)
                this.setState(prevState => {
                    return {
                        meme_url: response.data.data.memes[index].url
                    }
                })
            })
        axios.get('https://corporatebs-generator.sameerkumar.website/')
        // axios.get('https://icanhazdadjoke.com/j/')
            // .then(response => {
            //     console.log(response);
            // })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return(
            <div>
                <Header meme_url={this.state.meme_url} top_text={this.state.top_text} bottom_text={this.state.bottom_text} handleChange={this.handleChange} handleClick={this.handleClick}/>
            </div>
        )
    }
}

export default MemeGenerator;