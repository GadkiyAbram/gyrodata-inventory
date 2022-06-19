import React, {Component} from 'react';
import PaginationView from './PaginationView';

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

export default Pagination;