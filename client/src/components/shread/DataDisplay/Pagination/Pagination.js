import React, {Component} from 'react';
import PaginationView from './PaginationView';
import PropTypes from 'prop-types';

class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      limit,
      total,
      handleChange
    } = this.props;

    return (
      <div>
        <PaginationView
          limit={limit}
          total={total}
          handleChange={handleChange}
        />
      </div>
    );
  }
}

Pagination.propTypes = {
  limit: PropTypes.number,
  total: PropTypes.number,
  handleChange: PropTypes.func
}

export default Pagination;