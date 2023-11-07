import { useEffect } from "react";
import { About, InfoContainer, InfoContent, InfoBox, Paragraph,
SkillsContainer, SkillsContent, SkillsBox, Progress, H4, Bars,
CounterContainer, CounterBox, Icon, H5, Text } from "./styled";
import { FaCalendar } from "react-icons/fa";

export default function about() {
    useEffect(() => {
        $(document).ready(function() {
            $(".counter").each(function() {
                $(this).prop("Counter", 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3500,
                    easing: "swing",
                    step: function(now) {
                        $(this).text(Math.ceil(now) + "+")
                    }
                });
            });
        });
    }, []);

    return(
        <About id="about">
            <header className="heading">
                <h2>About <span>me</span></h2>
            </header>
            <InfoContainer>
                <h3 className="title">Personal info</h3>
                <InfoContent>
                    <InfoBox>
                        <Paragraph>
                            <span>Full name: </span>
                            Ammara Sohail
                        </Paragraph>
                        <Paragraph>
                            <span>Age: </span>
                            23 years
                        </Paragraph>
                        <Paragraph>
                            <span>Email: </span>
                            ammara@gmail.com
                        </Paragraph>
                        <Paragraph>
                            <span>Phone: </span>
                            +123-456-7410
                        </Paragraph>
                    </InfoBox>
                    <InfoBox>
                        <Paragraph>
                            <span>Experience: </span>
                            5 years
                        </Paragraph>
                        <Paragraph>
                            <span>Address: </span>
                            karachi, pakistan
                        </Paragraph>
                        <Paragraph>
                            <span>Language: </span>
                            Urdu, english
                        </Paragraph>
                        <Paragraph>
                            <span>Freelance: </span>
                            Available
                        </Paragraph>
                    </InfoBox>
                </InfoContent>
            </InfoContainer>
            <SkillsContainer>
                <h3 className="title">My skills</h3>
                <SkillsContent>
                    <SkillsBox>
                        <Progress className="progress1">
                            <H4>HTML5 <span>95%</span></H4>
                            <Bars><span></span></Bars>
                        </Progress>
                        <Progress className="progress2">
                            <H4>CSS3 <span>90%</span></H4>
                            <Bars><span></span></Bars>
                        </Progress>
                        <Progress className="progress3">
                            <H4>JavaScript <span>80%</span></H4>
                            <Bars><span></span></Bars>
                        </Progress>
                        <Progress className="progress4">
                            <H4>Figma <span>75%</span></H4>
                            <Bars><span></span></Bars>
                        </Progress>
                    </SkillsBox>
                    <SkillsBox>
                        <Progress className="progress5">
                            <H4>PHP <span>85%</span></H4>
                            <Bars><span></span></Bars>
                        </Progress>
                        <Progress className="progress6">
                            <H4>My SQL <span>80%</span></H4>
                            <Bars><span></span></Bars>
                        </Progress>
                        <Progress className="progress7">
                            <H4>Node.js <span>70%</span></H4>
                            <Bars><span></span></Bars>
                        </Progress>
                        <Progress className="progress8">
                            <H4>Java <span>65%</span></H4>
                            <Bars><span></span></Bars>
                        </Progress>
                    </SkillsBox>
                </SkillsContent>
            </SkillsContainer>
            <CounterContainer>
                <CounterBox>
                    <Icon>
                        <FaCalendar/>
                    </Icon>
                    <H5 className="counter">6</H5>
                    <Text>Years of experience</Text>
                </CounterBox>
                <CounterBox>
                    <Icon>
                        <FaCalendar/>
                    </Icon>
                    <H5 className="counter">200</H5>
                    <Text>Completed projects</Text>
                </CounterBox>
                <CounterBox>
                    <Icon>
                        <FaCalendar/>
                    </Icon>
                    <H5 className="counter">260</H5>
                    <Text>Happy clients</Text>
                </CounterBox>
                <CounterBox>
                    <Icon>
                        <FaCalendar/>
                    </Icon>
                    <H5 className="counter">59</H5>
                    <Text>Awards won</Text>
                </CounterBox>
            </CounterContainer>
        </About>
    )
}