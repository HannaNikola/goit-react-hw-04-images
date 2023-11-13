import {  useState } from "react";
import { SearchbarStyle, Input, ButtonLabel, Button, Form } from "./Searchbar.styled";
import { AiOutlineSearch } from "react-icons/ai";

export const Searchbar = ({ onSubmit }) => {
    
    const [query, setQuery] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(query);
    };


    const handleChange = (event) => {
        setQuery(event.target.value);
        
};
    
   


   
        return (
            <SearchbarStyle className="searchbar">
                <Form className="form" onSubmit={handleSubmit}>
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
                        value={query}
                        onChange={handleChange}
                        
                    />
                </Form>
            </SearchbarStyle>
        );
    
}



