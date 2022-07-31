import React from 'react'

function Footer(props) {
    return (
        <div>
            <footer className="bg-dark text-center text-white">
                
                <section className="mt-5">
                    <div className="container text-center text-md-start pt-5">
                        <div className="row mt-3">
                            <div className="col-md-5 mx-auto mb-4">
                                <img src="/img/logo.jpg" alt="logo not available" className='wdth40per' />
                                <h6 className="text-uppercase fw-bold mb-4 mt-2">
                                    <i className="fas fa-gem me-3"></i>ein schöner platz
                                </h6>
                                <p>
                                    Herzlich Willkommen zu meiner webeite. Hier können Sie deutsch lernen und gleichzeitig spaß machen
                                </p>
                            </div>
                            <div className="col-md-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Angular</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">React</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Vue</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Laravel</a>
                                </p>
                            </div>
                            <div className="col-md-4 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" target="_blank" role="button"><i className="lni lni-facebook-filled"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/schwarzchauhan/" target="_blank" role="button"><i className="lni lni-twitter-original"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/blackychauhan/" role="button"><i className="lni lni-instagram-original"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="lni lni-whatsapp"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="lni lni-telegram-original"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="lni lni-github-original"></i></a>
                    </section>
                </div>

                <div className="text-center p-3">
                    © 2020 Copyright : <a className="text-white" href="https://github.com/schwarzchauhan">schwarzchauhan</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;