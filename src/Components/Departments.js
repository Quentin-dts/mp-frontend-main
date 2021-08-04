import React, { Component } from 'react';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.css';

class Departments extends Component {
    render() {
        return (
            <div class="department-list">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h3>Departments</h3>
                        <p>Manage product access and roles in bulk by adding users to departments that have the required permissions.</p>
                    </div>
                    <div class="col">
                    <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header text-center">
                            <h4 class="modal-title w-100 font-weight-bold">Create Department</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body mx-3">
                            <div class="md-form mb-5">
                            <i class="fas fa-user prefix grey-text"></i>
                            <input type="text" id="form34" class="form-control validate"/>
                            <label data-error="wrong" data-success="right" for="form34">Department name</label>
                            </div>

                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button class="btn btn-unique">Create <i class="fas fa-paper-plane-o ml-1"></i></button>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="text-center">
                    <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalContactForm">Create Department</a>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">

                    </div>
                </div>
            </div>

            
            </div>
        );
    }
}

export default Departments;
