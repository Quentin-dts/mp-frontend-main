import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { memberdata } from '../memberlist';


class UserDetails extends Component {
    render() {
        return (
            <div class="user-details">
            <div class="container">
            <div class="row">
                <div class="col">
                {memberdata.map(memberdata => (
                    <h3>{memberdata[1].firstName} {memberdata[1].lastName} details</h3>
                ))}
                </div>
                <div class="row">
                    <div class="col">
                    <ul class="list-group">
                    <li class="list-group-item-borderless align-items-center">
                        <h3>Access</h3><span class="badge badge-pill badge-secondary">SITE ADMIN</span>
                    </li>
                    <li>
                        <div class="form-check form-switch">
                        <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                        <label class="form-check-label" for="customSwitch1"
                        >Has access on site</label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check form-switch">
                        <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                        <label class="form-check-label" for="customSwitch1"
                        >Create a new Member</label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check form-switch">
                        <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                        <label class="form-check-label" for="customSwitch1"
                        >Invite a Member</label>
                        </div>
                    </li>
                    <li>
                        <h3>Roles</h3>
                    </li>
                    <li class="list-group-item align-itmes-center">
                        Site Administrator<br/>
                        Can administer your site, determine user access, and update billing details.
                    </li>
                    <li>
                        <h3>Departments</h3>
                        <Link to={'/users/details/departments'}><button type="button" class="btn btn-outline-primary">+</button></Link>
                    </li>
                    
                    <li>Store Manager</li>
                    <li>Cook</li>
                    <li>Wait Staff</li>
                    </ul>
                    </div>
                    <div class="col">
                    <h3>Account</h3>
                    <div class="card">
                        <div class="card-body">
                        
                        </div>
                        <div class="table-responsive">
                        <table class="table no-wrap user-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col" class="border-0 text-uppercase font-medium">User</th>
                                    <img class="img-fluid float-left" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""></img>
                            {memberdata.map(memberdata => (
                            <h5 class="font-medium mb-0"><Link to={'/users/details'} class="user-link">{memberdata[1].firstName} {memberdata[1].lastName}</Link></h5>
                            ))}
                            {memberdata.map(memberdata => (
                                <span class="text-muted">{memberdata[1].emailAddress}</span>
                            ))}
                                    
                                </tr>
                            </thead>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                    
                
            </div>
            </div>
            </div>

        );
    }
}

export default UserDetails;