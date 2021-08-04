import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import 'cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css';
//import 'cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js';
import { memberdata } from '../memberlist';
import axios from 'axios';

/*var $  = require( 'jquery' );
var dt = require( 'datatables.net' )();
require( 'datatables.net-dt' );

$(document).ready(function() {
    $('#example').DataTable( {
        "dom": '<"top"i>rt<"bottom"flp><"clear">'
    } );
} );
*/
let requestURL = 'http://localhost:8888';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const memberdata = request.response;
}






class UserList extends Component {

    render() {
        
        return (
                <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title text-uppercase mb-0">Manage Users</h5>
                            </div>
                            <div class="table-responsive">
                                <table class="table no-wrap user-table mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="border-0 text-uppercase font-medium">User</th>
                                            <th scope="col" class="border-0 text-uppercase font-medium">Roles</th>
                                            <th scope="col" class="border-0 text-uppercase font-medium">Status</th>
                                            <th scope="col" class="border-0 text-uppercase font-medium">Date Created</th>
                                            <th scope="col" class="border-0 text-uppercase font-medium">Manage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="thumb">
                                            
                                                <img class="img-fluid float-left" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""></img>
                                                {memberdata.map(memberdata => (
                                                <h5 class="font-medium mb-0"><Link to={'/users/details'} class="user-link">{memberdata[1].firstName} {memberdata[1].lastName}</Link></h5>
                                                ))}
                                                {memberdata.map(memberdata => (
                                                    <span class="text-muted">{memberdata[1].emailAddress}</span>
                                                ))}
                                            </td>
                                            <td>
                                                {memberdata.map(memberdata => (
                                                    <h5>{memberdata[1].siteRole}</h5>
                                                ))}
                                            </td>
                                            <td>
                                            {memberdata.map(memberdata => (
                                                    <h5>{memberdata[1].statusId}</h5>
                                                ))}
                                                
                                            </td>
                                            <td>
                                            {memberdata.map(memberdata => (
                                                    <h5>{memberdata[1].createDate}</h5>
                                                ))}
                                                
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle"><i class="fa fa-key"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-edit"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-upload"></i> </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="thumb">
                                                <img class="img-fluid float-left" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""></img>
                                                {memberdata.map(memberdata => (
                                                <h5 class="font-medium mb-0"><Link to={'/users/details'} class="user-link">{memberdata[2].firstName} {memberdata[2].lastName}</Link></h5>
                                                ))}
                                                {memberdata.map(memberdata => (
                                                    <span class="text-muted">{memberdata[2].emailAddress}</span>
                                                ))}
                                            </td>
                                            <td>
                                                {memberdata.map(memberdata => (
                                                    <h5>{memberdata[2].siteRole}</h5>
                                                ))}
                                            </td>
                                            <td>
                                            {memberdata.map(memberdata => (
                                                    <h5>{memberdata[2].statusId}</h5>
                                                ))}
                                                
                                            </td>
                                            <td>
                                            {memberdata.map(memberdata => (
                                                    <h5>{memberdata[2].createDate}</h5>
                                                ))}
                                                
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle"><i class="fa fa-key"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-edit"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-upload"></i> </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="thumb">
                                                <img class="img-fluid float-left" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt=""></img>
                                                {memberdata.map(memberdata => (
                                                <h5 class="font-medium mb-0"><Link to={'/users/details'} class="user-link">{memberdata[3].firstName} {memberdata[3].lastName}</Link></h5>
                                                ))}
                                                {memberdata.map(memberdata => (
                                                    <span class="text-muted">{memberdata[3].emailAddress}</span>
                                                ))}
                                            </td>
                                            <td>
                                                {memberdata.map(memberdata => (
                                                    <h5>{memberdata[3].siteRole}</h5>
                                                ))}
                                            </td>
                                            <td>
                                            {memberdata.map(memberdata => (
                                                    <h5>{memberdata[3].statusId}</h5>
                                                ))}
                                                
                                            </td>
                                            <td>
                                            {memberdata.map(memberdata => (
                                                    <h5>{memberdata[3].createDate}</h5>
                                                ))}
                                                
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle"><i class="fa fa-key"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-edit"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-upload"></i> </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="thumb">
                                                <img class="img-fluid float-left" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""></img>
                                                {memberdata.map(memberdata => (
                                                <h5 class="font-medium mb-0"><Link to={'/users/details'} class="user-link">{memberdata[4].firstName} {memberdata[4].lastName}</Link></h5>
                                                ))}
                                                {memberdata.map(memberdata => (
                                                    <span class="text-muted">{memberdata[4].emailAddress}</span>
                                                ))}
                                            </td>
                                            <td>
                                                {memberdata.map(memberdata => (
                                                    <h5>{memberdata[4].siteRole}</h5>
                                                ))}
                                            </td>
                                            <td>
                                            {memberdata.map(memberdata => (
                                                    <h5>{memberdata[4].statusId}</h5>
                                                ))}
                                                
                                            </td>
                                            <td>
                                            {memberdata.map(memberdata => (
                                                    <h5>{memberdata[4].createDate}</h5>
                                                ))}
                                                
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle"><i class="fa fa-key"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-edit"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-upload"></i> </button>
                                            </td>
                                        </tr>
                                        <tr>
                                        <td class="thumb">
                                                <img class="img-fluid float-left" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""></img>
                                                {memberdata.map(memberdata => (
                                                <h5 class="font-medium mb-0"><Link to={'/users/details'} class="user-link">{memberdata[5].firstName} {memberdata[5].lastName}</Link></h5>
                                                ))}
                                                {memberdata.map(memberdata => (
                                                    <span class="text-muted">{memberdata[5].emailAddress}</span>
                                                ))}
                                            </td>
                                            <td>
                                                {memberdata.map(memberdata => (
                                                    <h5>{memberdata[5].siteRole}</h5>
                                                ))}
                                            </td>
                                            <td>
                                            {memberdata.map(memberdata => (
                                                    <h5>{memberdata[5].statusId}</h5>
                                                ))}
                                                
                                            </td>
                                            <td>
                                            {memberdata.map(memberdata => (
                                                    <h5>{memberdata[5].createDate}</h5>
                                                ))}
                                                
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle"><i class="fa fa-key"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-edit"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-upload"></i> </button>
                                            </td>
                                        </tr>
                                        <tr>
                                        <td class="thumb">
                                                <img class="img-fluid float-left" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""></img>
                                                {memberdata.map(memberdata => (
                                                <h5 class="font-medium mb-0"><Link to={'/users/details'} class="user-link">{memberdata[6].firstName} {memberdata[6].lastName}</Link></h5>
                                                ))}
                                                {memberdata.map(memberdata => (
                                                    <span class="text-muted">{memberdata[6].emailAddress}</span>
                                                ))}
                                            </td>
                                            <td>
                                                {memberdata.map(memberdata => (
                                                    <h5>{memberdata[6].siteRole}</h5>
                                                ))}
                                            </td>
                                            <td>
                                            {memberdata.map(memberdata => (
                                                    <h5>{memberdata[6].statusId}</h5>
                                                ))}
                                                
                                            </td>
                                            <td>
                                            {memberdata.map(memberdata => (
                                                    <h5>{memberdata[6].createDate}</h5>
                                                ))}
                                                
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle"><i class="fa fa-key"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-edit"></i> </button>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-upload"></i> </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-3 mt-sm-3">
                    <ul class="pagination justify-content-center mb-0"> 
                        <li class="page-item disabled"> <span class="page-link">Prev</span> </li>
                        <li class="page-item active" aria-current="page"><span class="page-link">1 </span> <span class="sr-only">(current)</span></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">...</a></li>
                        <li class="page-item"><a class="page-link" href="#">25</a></li>
                        <li class="page-item"> <a class="page-link" href="#">Next</a> </li>
                    </ul>
                </div>
                </div>
                );
                
        };
        
    }
export default UserList;
   

