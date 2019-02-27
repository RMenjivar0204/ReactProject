import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Menu from './Menu';


class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>

                <Menu />
                    {this.props.children}

                <Footer />

            </div>
        );
    }
}


BaseLayout.propTypes = {
    
};

export default BaseLayout
