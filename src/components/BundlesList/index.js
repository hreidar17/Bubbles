import React from 'react';
import Bundles from '../Bundles';
import { getAllBundles } from '../../services/BubbleService'

class BundleList extends React.Component {
    componentDidMount() {
        getAllBundles().then(data => this.setState({bundlesList: data}));
    }

    constructor(props) {
        super(props);
        this.state = {
            bundlesList: []
        };
    }

    render() {
        return (
            <div>
              <div>
                <br />
                    <h2>Bundle products</h2>
                <br />
                <Bundles list={ this.state.bundlesList } />
              </div>
            </div>
        )
    }
};

export default BundleList;
