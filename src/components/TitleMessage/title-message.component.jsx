import React from 'react';
import styled from "styled-components";
import Typewriter from 'typewriter-effect';

const MyTtitleMessage = styled.h1`
position: absolute;
width: 100%;
top: 22rem;
z-index: 1;
margin-top:-125px;
text-align: center;
strong {
    font-size: 1.24em;
}
div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 4px rgbs(0,0,0,0.4);
    letter-spacing: 7px;
    .main{
        font-size:50px;
    }
    .sub{
        font-size: 27px;
        letter-spacing: 2px;
    }
}
`;


const TitleMessage = () => {
    return (
        <MyTtitleMessage>
            <div className="titleMessage">
                <div className="heading">
                    <div className="main text-center mb-3">
                        Hi, I am
                        <br />
                        <span>
                            <strong>Ernesto Pelaez</strong>
                        </span>
                    </div>
                    <div className="sub">
                        <Typewriter
                        options={{
                            strings: ['Web Developer', 'Learner'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </div>
                </div>
            </div>
        </MyTtitleMessage>
    )
}

export default TitleMessage;
