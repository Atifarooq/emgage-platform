import * as React from 'react';
import { connect } from 'react-redux';
import { ThemeContext } from '../../../Context';
import { rolesActions } from "../Package";
import { RoleDefProp } from '../Models/RoleDefProp';
import RoleListComponent from './RoleList';
import { rolesSelectors } from "../Package";

/**
 * Root component which calls the list component to show the existing role list
 * Then list component calls different other components like create, members, etc
 * @extends React.Component
 */
class RoleDefComponent extends React.Component<RoleDefProp, any> {
  
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.loadData();
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
              />
            )
          }
        </ThemeContext.Consumer>
      </div>
    );
  }
}

const mapStateToProps = (state: any): RoleDefProp => {
  return { roles: rolesSelectors.RoleList(state.rolesReducer) };
};

const mapDispatchToProps = (dispatch: any): RoleDefProp => {
  return {
    loadData: () => dispatch(rolesActions.fetchRoles())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleDefComponent);
