function Footer() {
    return (
        <div>
            <footer className="bg-dark text-white">
                <div className="container p-4">
                    <div className="row my-4">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <div
                                className="rounded-circle bg-dark shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                                style={{width: 150, height: 150}}
                            >
                                <img
                                    src="/images/titanfall-logo-white.png"
                                    alt=""
                                    loading="lazy"
                                    height={70}
                                />
                            </div>
                            <button
                                className="btn btn-primary"
                                id="videoBtn"
                                onClick={() => {
                                    let video = document.getElementById("backgroundVideo");
                                    let btn = document.getElementById("videoBtn");
                                    // Pause and play the video, and change the button text
                                    if (video.paused) {
                                        video.play();
                                        btn.innerHTML = "Pause";
                                    } else {
                                        video.pause();
                                        btn.innerHTML = "Play";
                                    }
                                }}
                                style={{marginBottom: 10}}
                            >
                                Pause Background Video
                            </button>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Links</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a
                                        target="_blank"
                                        href="https://www.ea.com/games/titanfall/titanfall-2"
                                        rel="noreferrer"
                                    >
                                        Titanfall 2
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://northstar.tf/" rel="noreferrer">
                                        Northstar
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">update</h5>
                            <p style={{marginRight: 20}}>
                                The Titanfall 2 servers usually do not work. Because of this, I
                                highly recommend you use the Northstar mod. If you scroll down on
                                the Northstar page, the VTOL option is available which I highly
                                recommend.
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Quote of the Day</h5>
                            <p>
                                <i>"I detect sarcasm"</i>
                            </p>
                            <p>BT-7274</p>
                        </div>
                    </div>
                </div>
                <div
                    className="text-center p-3"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
                >
                    Titanfall and all its characters are owned by Respawn Entertainment and
                    Electronic Arts
                </div>
            </footer>
        </div>

    );
}

export default Footer;