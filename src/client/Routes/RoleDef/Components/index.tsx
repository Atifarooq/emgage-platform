import * as React from 'react';
import { connect } from 'react-redux';
import { ThemeContext } from '../../../Context';
import { RoleDefState, RoleDefDispatch } from '../Models';
import { fetchRoles, RoleList, LoadingRole, RoleDefProp } from "../Package";
import RoleListComponent from './RoleList';

/**
 * Root component which calls the list component to show the existing role list
 * Then list component calls different other components like create, members, etc
 * @extends React.Component
 */
class RoleDefComponent extends React.Component<RoleDefProp> {

  constructor(props: RoleDefProp) {
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

const mapStateToProps = ({ rolesReducer }: any): RoleDefState => {
  return {
    roles: RoleList(rolesReducer),
    loadingState: LoadingRole(rolesReducer),
  };
};

const mapDispatchToProps = (dispatch: any): RoleDefDispatch => {
  return {
    loadData: () => dispatch(fetchRoles())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleDefComponent);
