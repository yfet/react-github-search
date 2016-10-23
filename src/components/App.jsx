import React, {Component} from 'react';
import jquery from 'jquery';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'yfet',
            userData: [],
            userRepos: [],
            perPage: 20
        }
    }

    //Get user data from Github
    getUserData() {
        jquery.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({userData: data});
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({username: null});
            }.bind(this)
        });
    }

    //Get user repos from Github
    getUserRepos() {
        jquery.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'/&client_secret='+this.props.clientSecret+'&sort=created',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({userRepos: data});
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({username: null});
            }.bind(this)
        });
    }

    handleFormSubmit(username) {
        this.setState({username: username}, function() {
            this.getUserData();
            this.getUserRepos();
        });
    }
    componentDidMount() {
        this.getUserData();
        this.getUserRepos();
    }
    render() {
        return(
            <div>
                <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
                <Profile {...this.state} />
            </div>
        )
    }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string,
};
App.defaultProps = {
    clientId: '67e454803d9181504e52',
    clientSecret: 'e25c29e4520a63a973dbddf06361051e62ffd016'
};

export default App