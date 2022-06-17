import React from 'react'

function Footer(props) {
    return (
        <div>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="lni lni-facebook-filled"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="lni lni-twitter-original"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="lni lni-instagram-original"></i></a>
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