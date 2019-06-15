import React, {Component} from "react";
import styled from "styled-components";
import {Form, FormGroup, Label, Input} from "reactstrap";

const FormWrapper = styled(FormGroup)`
    position: relative;
    span {
        color: red;
        font-size: 24px;
        font-weight: 700;
        position: absolute;
        right: 10px;
        top: 0px;
        &:hover {
            color: darkred;
            cursor: pointer;
        }
    }
`

class SearchBar extends Component {
    state = {
        term: ""
    }

    handleInputChange = (event) => {
    
        // update state of term
        // console.log(event.target.value)
        // this.setState({term: event.target.value}, function(){
        //     // run a youtube search based on this term
        //     // put into this anon function because it is asyncronous
        //     // so it only changes once event.target.value completely changes
        //     this.props.searchYouTube(event.target.value);
        // })

        // this is a way to do it without a cb, preferable
        this.setState({term: event.target.value})
        this.props.searchYouTube(event.target.value)
        
    }

    render(){
        return(
            <Form onSubmit={event => event.preventDefault()}>  
                <FormWrapper>
                    {/* can take away "hidden" to display that */}
                    <Label for="youtubeSearch" hidden>YouTube Search</Label> 
                    <Input 
                        type="text" 
                        name="youtubeSearch" 
                        id="youtubeSearch" 
                        placeholder="Search for a video here!" 
                        value={this.state.term}
                        onChange={this.handleInputChange}
                    />
                    <span onClick={() => this.setState({term: ""})}>X</span>
                </FormWrapper>
            </Form>
        )
    }

}

export default SearchBar;