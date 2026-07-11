import React from 'react'

function Hero() {
    return (
        <section className="bg-light py-5">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h1 className="fw-bold">Support Portal</h1>

                    <button className="btn btn-primary px-4">
                        My Tickets
                    </button>

                </div>

                <div className="input-group">

                    <span className="input-group-text bg-white border-end-0">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </span>

                    <input
                        type="text"
                        className="form-control border-start-0 py-3"
                        placeholder="Eg: How do I open my account..."
                    />

                </div>

            </div>
        </section>
    );
}

export default Hero;