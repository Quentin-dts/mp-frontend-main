import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';




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
                                    <th scope="col" class="border-0 text-uppercase font-medium">Manage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="thumb">
                                        <img class="img-fluid float-left" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""></img>
                                        <h5 class="font-medium mb-0">Wayne Meadows</h5>
                                        <span class="text-muted">wayne@diamondts.com</span>
                                    </td>
                                    <td>
                                        <select class="form-control category-select" id="exampleFormControlSelect1">
                                        <option>Owner</option>
                                        <option>Admin</option>
                                        <option>Member</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control category-select" id="exampleFormControlSelect1">
                                        <option>Has site access</option>
                                        <option>Account disabled</option>
                                        </select>
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
                                        <h5 class="font-medium mb-0">Mason Meadows</h5>
                                        <span class="text-muted">mason@diamondts.com</span>
                                    </td>
                                    <td>
                                        <select class="form-control category-select" id="exampleFormControlSelect1">
                                        <option>Owner</option>
                                        <option>Admin</option>
                                        <option>Member</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control category-select" id="exampleFormControlSelect1">
                                        <option>Has site access</option>
                                        <option>Account disabled</option>
                                        </select>
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
                                        <h5 class="font-medium mb-0">Quentin Thomas</h5>
                                        <span class="text-muted">quentin@diamondts.com</span>
                                    </td>
                                    <td>
                                        <select class="form-control category-select" id="exampleFormControlSelect1">
                                        <option>Owner</option>
                                        <option>Admin</option>
                                        <option>Member</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control category-select" id="exampleFormControlSelect1">
                                        <option>Has site access</option>
                                        <option>Account disabled</option>
                                        </select>
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
                                        <h5 class="font-medium mb-0">Isabella Williams</h5>
                                        <span class="text-muted">Isabella@website.com</span>
                                    </td>
                                    <td>
                                        <select class="form-control category-select" id="exampleFormControlSelect1">
                                        <option>Owner</option>
                                        <option>Admin</option>
                                        <option>Member</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control category-select" id="exampleFormControlSelect1">
                                        <option>Has site access</option>
                                        <option>Account disabled</option>
                                        </select>
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
                                        <h5 class="font-medium mb-0">Sophia Jones</h5>
                                        <span class="text-muted">Sophia@website.com</span>
                                    </td>
                                    <td>
                                        <select class="form-control category-select" id="exampleFormControlSelect1">
                                        <option>Owner</option>
                                        <option>Admin</option>
                                        <option>Member</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control category-select" id="exampleFormControlSelect1">
                                        <option>Has site access</option>
                                        <option>Account disabled</option>
                                        </select>
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
                                        <h5 class="font-medium mb-0">Charlotte Brown</h5>
                                        <span class="text-muted">Charlotte@website.com</span>
                                    </td>
                                    <td>
                                        <select class="form-control category-select" id="exampleFormControlSelect1">
                                        <option>Owner</option>
                                        <option>Admin</option>
                                        <option>Member</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control category-select" id="exampleFormControlSelect1">
                                        <option>Has site access</option>
                                        <option>Account disabled</option>
                                        </select>
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
    }
}
export default UserList;
   

