import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div className="home">
                <h1>Welcome</h1>

                <h3>About</h3>
                <p>
                    This is a simple example of a single page application for searching the{" "}
                    <a target="_blank" href="https://500px.com/">500px</a> image database.</p>
                <h3>Source</h3>
                <p>
                    The source code for this project can be found on github:{" "}
                    <a target="_blank" href="https://github.com/ondzilla/500px">https://github.com/ondzilla/500px</a>
                </p>
                <p>
                    It is built using <a target="_blank" href="https://facebook.github.io/react/">React</a> bootstrapped
                    using the <a target="_blank" href="https://github.com/facebookincubator/create-react-app">Create React App</a>.
                </p>
                <p>
                    The design is based on <a target="_blank" href="https://material.google.com/">Material
                    Design</a>{" "}
                    patterns using <a target="_blank" href="http://purecss.io/">Pure CSS</a>.
                </p>

                <h3>Potential Improvements</h3>
                <h4>Development</h4>
                <p>
                    The Create React App module currently has no support for CSS preprocessors which could be
                    used to
                    avoid declaring fonts and background colors in multiple places. This could be solved by
                    ejecting
                    from the Create React App module and configuring the build system from scratch.
                </p>
                <h4>Design</h4>
                <p>The results grid is currently lacking a lot in design.</p>
                <ul>
                    <li>
                        Clicking an image simply opens the larger
                        version of it in a new window (basically making this not be a single page application). This
                        could certainly be improved by opening it in some popup or perhaps expanding the tile to show
                        the larger version "inline".
                    </li>
                    <li>
                        The result tiles could also do with a bit of work in the Material Design department.
                    </li>
                </ul>
            </div>
        )
    }
}

export default Home;