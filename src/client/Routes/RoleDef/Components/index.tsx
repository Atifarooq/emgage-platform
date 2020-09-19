import * as React from 'react';
import { connect } from 'react-redux';
import { ThemeContext } from '../../../Context';
import { QueryTypeEnum, QueryKeyEnum } from 'Types/Domain';
import { RoleDefState, RoleDefDispatch } from '../Models';
import { fetchRoles, RoleList, LoadingRole, RoleDefProp, RoleDefaultPayload } from "../Package";
import RoleListComponent from './RoleList';

/**
 * Root component which calls the list component to show the existing role list
 * Then list component calls different other components like create, members, etc
 * @extends React.Component
 */
class RoleDefComponent extends React.Component<RoleDefProp, RoleDefState> {

  constructor(props: RoleDefProp) {
    super(props);
  }

  componentDidMount() {

    this.setState({
      payload: {
        from: 1,
        size: 20,
        filter: [{
          type: QueryTypeEnum.filter,
          key: QueryKeyEnum.term,
          modelfield: 'entityState.itemID',
          value: '5'
        }],
        query: []
      }
    }, () => {
      this.props.loadData(this.state.payload);
    });
  }

  fetchRoles = (query: any) => {
    if (query) {
      this.setState({
        payload: {
          ...this.state.payload, query: [{
            type: QueryTypeEnum.query,
            key: QueryKeyEnum.multi_match,
            modelfield: 'fields',
            value: ['name', 'description'],
            options: { 'query': query, 'type': 'phrase_prefix' }
          }]
        }
      }, () => {
        this.props.loadData(this.state.payload);
      });
    }
    else this.setState({
      payload: { ...this.state.payload, query: [] }
    }, () => {
      this.props.loadData(this.state.payload);
    });
  }

  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {
            theme => (
              <RoleListComponent
                theme={theme}
                roleDefs={this.props.roles}
                loadingState={this.props.loadingState}
                onFilter={this.fetchRoles}
              />
            )
          }
        </ThemeContext.Consumer>
      </div>
    );
  }
}

const mapStateToProps = ({ rolesReducer }: any): RoleDefState => {
  return {
    roles: RoleList(rolesReducer),
    loadingState: LoadingRole(rolesReducer),
    payload: RoleDefaultPayload()
  };
};

const mapDispatchToProps = (dispatch: any): RoleDefDispatch => {
  return {
    loadData: payload => dispatch(fetchRoles(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleDefComponent);
