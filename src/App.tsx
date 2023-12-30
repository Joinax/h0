import React from 'react';

import './App.css';
import {Card} from "./components/Card.styled";
import {Text} from "./components/Text.styled";
import {StyleBtn} from "./components/Button.styled";
import {Title} from "./components/Title.styled";
import {BodyCard} from "./components/BodyCard.styled";
import {Box} from "./components/Box.styled";

function App() {
    return (
        <div className="App">
            <Card>
                <img src='foto.svg'/>
                <BodyCard>
                    <Title>Headline</Title>
                    <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                    <Box>
                        <StyleBtn btnType={"primary"}>See more</StyleBtn>
                        <StyleBtn btnType={"outlined"}>Save</StyleBtn>
                    </Box>
                </BodyCard>
            </Card>
        </div>
    );
}

export default App;
