import { Component } from "react";
import { SearchbarStyle, Input, ButtonLabel, Button, Form } from "./Searchbar.styled";
import { AiOutlineSearch } from "react-icons/ai";

export class Searchbar extends Component {
    state = {
    query: '',

    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.query)
        this.props.onSubmit(this.state.query);
        
    }
    handleChange = (event) => {
        this.setState({ query: event.target.value });
        
};
    
   


    render() {
        return (
            <SearchbarStyle className="searchbar">
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Button type="submit" className="button">
                        <AiOutlineSearch />
                        <ButtonLabel className="button-label">Search</ButtonLabel>
                    </Button>

                    <Input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.query}
                        onChange={this.handleChange}
                        
                    />
                </Form>
            </SearchbarStyle>
        );
    }
}



