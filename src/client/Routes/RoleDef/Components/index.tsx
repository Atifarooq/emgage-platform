import * as React from 'react';
import { connect } from 'react-redux';
import { ThemeContext } from '../../../Context';
import { QueryTypeEnum, QueryKeyEnum } from 'Types/Domain';
import { RoleDefState, RoleDefDispatch } from '../Models';
import { fetchRoles, filterChanged, RoleList, LoadingRole, RoleDefProp, RoleListPayload } from "../Package";
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
    this.getRoles();
  }

  componentDidUpdate(prevProps) {
    if (this.props.payload !== prevProps.payload) {
      this.props.loadData(this.props.payload);
    }
  }

  filterRoles = (query: any) => {
    if (query)
      this.props.filterChanged({
        ...this.props.payload, query: [{
          type: QueryTypeEnum.query,
          key: QueryKeyEnum.multi_match,
          modelfield: 'fields',
          value: ['name', 'description'],
          options: { 'query': query, 'type': 'phrase_prefix' }
        }]
      });
    else
      this.props.filterChanged({
        ...this.props.payload, query: []
      });
  }

  getRoles = (deleted: boolean = false) => {
    if (deleted)
      this.props.filterChanged({
        ...this.props.payload, filter: [{
          type: QueryTypeEnum.filter,
          key: QueryKeyEnum.terms,
          modelfield: 'entityState.itemID',
          value: ['7', '5']
        }]
      });
    else
      this.props.filterChanged({
        ...this.props.payload, filter: [{
          type: QueryTypeEnum.filter,
          key: QueryKeyEnum.term,
          modelfield: 'entityState.itemID',
          value: '5'
        }]
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
                onFilter={this.filterRoles}
                onShowDeleted={this.getRoles}
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
    payload: RoleListPayload(rolesReducer)
  };
};

const mapDispatchToProps = (dispatch: any): RoleDefDispatch => {
  return {
    loadData: payload => dispatch(fetchRoles(payload)),
    filterChanged: payload => dispatch(filterChanged(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleDefComponent);
