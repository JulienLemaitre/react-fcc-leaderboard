import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/lib/Table';
import SortableTh from '../components/sortable_th';
import LeadersList from '../components/leaders_list';

class MembersList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      orderBy: 'month'
    };

    this.sortByMonth = this.sortByMonth.bind(this);
    this.sortByAllTime = this.sortByAllTime.bind(this);
  }

  sortByMonth() {
    if (this.state.orderBy !== 'month') {
      this.setState({ orderBy: 'month'});
    }
  }

  sortByAllTime() {
    if (this.state.orderBy !== 'allTime') {
      this.setState({ orderBy: 'allTime'});
    }
  }

  render() {

    return (
      <div className="members-list">
        <Table striped bordered condensed hover>
          <thead>
            <th>#</th>
            <th>Camper name</th>
            <SortableTh label="Points in the last 30 days" sortAction={this.sortByMonth} />
            <SortableTh label="All time points" sortAction={this.sortByAllTime} />
          </thead>
          <LeadersList
            listAllTime={this.props.listAllTime}
            orderBy={this.state.orderBy}
          />
        </Table>
      </div>
    );
  }
}

MembersList.propTypes = {
  listAllTime: PropTypes.bool
};

export default MembersList;