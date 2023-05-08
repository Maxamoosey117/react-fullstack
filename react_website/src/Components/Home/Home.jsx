import TimedSlideCarousel from "../TimedSlideCarousel";
import {Row} from "react-bootstrap";
import Events from "./Events";

function Home() {
    return (
        <div id="home">
            <div
                className="container section rounded"
                style={{backgroundColor: "rgb(0, 0, 0, .9)"}}
            >
                <h1 style={{textAlign: "center"}}>Welcome to the Titanfall Games!</h1>
            </div>
            <div className="container section rounded">
                <Row>
                    <div className="col-md-4">
                        <h3>Calling all Pilots!</h3>
                        <p>
                            While EA has made it clear that they have abandoned the Titanfall
                            series as well as the servers, Northstar has provided an opportunity
                            to play Titanfall again! By setting up a private server, we are able
                            to offer tournaments and competitive level play without watching the
                            server crash every minute.
                        </p>
                    </div>
                    <div id={"carousel"} className={"col-md-8"}>
                        <TimedSlideCarousel/>
                    </div>

                </Row>
            </div>
            {Events()}
            <div className="container section rounded">
                <div className="row">
                    <div className="col-xl-4">
                        <h3>What is Titanfall 2?</h3>
                        <p>
                            Titanfall 2 is a first-person shooter video game developed by Respawn
                            Entertainment and published by Electronic Arts. It is the sequel to
                            Titanfall and was released for Microsoft Windows, PlayStation 4, and
                            Xbox One on October 28, 2016. The game is set in the Frontier, a
                            system on the frontier of the Milky Way galaxy, where two interstellar
                            corporations are locked in a war for control of the Frontier's
                            resources. The game features multiplayer modes, including a
                            single-player campaign, and a multiplayer mode that allows players to
                            pilot giant mecha-like exoskeletons called Titans.
                        </p>
                        <p/>
                    </div>
                    <div className="col-xl-4">
                        <h3>What is Northstar?</h3>
                        <p>
                            Northstar is mod that provides private servers for us to play
                            Titanfall without the fear of the servers crashing. It is a free mod
                            created by
                            <a href="https://github.com/BobTheBob9" target="_blank" rel="noreferrer">
                                BobTheBob
                            </a>
                            with servers hosted by the community. The server is hosted by a group
                            of volunteers who are dedicated to keeping the server up and running.
                            The server is hosted in the United States, so there is a chance that
                            you may experience some lag depending on your location. The server is
                            also not affiliated with Respawn Entertainment or Electronic Arts.
                        </p>
                    </div>
                    <div className="col-xl-4">
                        <h3>How do I join?</h3>
                        <p>
                            Make sure to have the Northstar client from the link below, and get in
                            contact with DiamondTitan on the EA app or maxamoosey#9746 on Discord.
                            You will need to be added to the server before you can get started.
                        </p>
                        <div
                            className="button-and-text northstar-link-button"
                            style={{marginLeft: 15}}
                        >
                            <p>
                                When downloading Northstar, I highly recommend you scroll down and
                                use the 'VTOL' installation.
                            </p>
                            <a
                                href="https://northstar.tf/"
                                target="_blank"
                                className="btn btn-dark border link-button"
                                rel="noreferrer"
                            >
                                Northstar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section container rounded">
                <h2>The Funny</h2>
                <p>Made by me</p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <iframe
                        src="https://www.youtube.com/embed/w_-Avwb2wzU"
                        title="The Resurrection of Titanfall: Mastiff Man"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen=""
                        width={677}
                        height={381}
                        frameBorder={0}
                    />
                </div>
            </div>
        </div>
    )
        ;
}

export default Home;