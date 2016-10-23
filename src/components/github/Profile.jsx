import React, {Component} from 'react';
import RepoList from './RepoList.jsx';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            {this.props.userData.name}
                        </h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={this.props.userData.avatar_url} alt="avatar" className="thumbnail" style={{maxWidth: "100%"}}/>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-12">
                                        <span className="label label-primary">
                                            {this.props.userData.public_repos} repos
                                        </span>
                                        <span className="label label-success">
                                            {this.props.userData.public_gists} gists
                                        </span>
                                        <span className="label label-info">
                                            {this.props.userData.followers} followers
                                        </span>
                                        <span className="label label-danger">
                                            {this.props.userData.following} followings
                                        </span>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <strong>Username: </strong> {this.props.userData.login}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Location: </strong> {this.props.userData.location}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Email address: </strong> {this.props.userData.email}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <br/>
                                <a target="_blank" href={this.props.userData.html_url} className="btn btn-primary btn-block">Profile</a>
                            </div>
                        </div>

                    </div>
                    <hr/>
                    <h3>User Repositories</h3>
                    <RepoList userRepos={this.props.userRepos} />
                </div>
            </div>
        )
    }
}

export default Profile