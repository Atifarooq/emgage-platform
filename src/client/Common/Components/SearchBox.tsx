import * as React from "react";
import { debounce } from "lodash";
import { Icon, TextField } from 'engage-ui';

interface SearchCriteriaProps {
    placeholder: string;
    onSearch: (criteria: string) => void;
}
interface SearchCriteriaState {
    criteria: string;
}

class SearchBox extends React.Component<SearchCriteriaProps, SearchCriteriaState> {

    constructor(props) {
        super(props);

        this.state = {
            criteria: ""
        };
    }

    raiseDoSearchWhenUserStoppedTyping = debounce(() => this.props.onSearch(this.state.criteria), 500);

    handleCriteriaChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ criteria: e.toString() }, () => {
            this.raiseDoSearchWhenUserStoppedTyping();
        });
    };

    render() {
        return (
            <TextField
                label={this.props.placeholder}
                suffix={<Icon source="search" componentColor="inkLighter" />}
                value={this.state.criteria}
                onChange={this.handleCriteriaChange}
            />
        );
    }
}

export default SearchBox;
