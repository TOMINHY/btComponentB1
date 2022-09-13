import React, { Component } from 'react'

export default class CardComponent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <div className="card" >
                        <div className="card-body text-center">
                            <div className='font-icon'>
                                <i class="fa-solid fa-ethernet"></i>
                            </div>
                            <h2 className="card-title">Fresh new layout</h2>
                            <p className="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" >
                        <div className="card-body text-center">
                            <div className='font-icon'>
                            <i class="fa-solid fa-cloud-arrow-down"></i>
                            </div>
                            <h2 className="card-title">Free to download</h2>
                            <p className="mb-0">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card" >
                        <div className="card-body text-center">
                            <div className='font-icon'>
                            <i class="fa-solid fa-credit-card"></i>
                            </div>
                            <h2 className="card-title">Jumbotron hero header</h2>
                            <p className="mb-0">The heroic part of this template is the jumbotron hero header!</p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card" >
                        <div className="card-body text-center">
                            <div className='font-icon'>
                                <i class="fa-brands fa-bootstrap"></i>
                            </div>
                            <h2 className="card-title">Feature boxes</h2>
                            <p className="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card" >
                        <div className="card-body text-center">
                            <div className='font-icon'>
                            <i class="fa-solid fa-code"></i>
                            </div>
                            <h2 className="card-title">Simple clean code</h2>
                            <p className="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card" >
                        <div className="card-body text-center">
                            <div className='font-icon'>
                            <i class="fa-solid fa-circle-check"></i>
                            </div>
                            <h2 className="card-title">A name you trust</h2>
                            <p className="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
