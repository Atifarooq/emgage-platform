import * as React from 'react';
import { Icon, TextField } from 'engage-ui';
import { ThemedComponentClass } from '@friendsofreactjs/react-css-themr';
import { classNames } from '@shopify/react-utilities/styles';

export interface IProps {
    componentClass?: string;
    componentStyle?: any;
    searchKey?: string;
}

class SearchBox extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }
    

    render() {
        return (
            <div>
                <TextField
                    label="Find a Role..."
                    suffix={<Icon source="search" componentColor="inkLighter" />}
                    value={this.props.searchKey}
                />
            </div >
        )
    }
}

export default (SearchBox) as ThemedComponentClass<IProps, {}>;
