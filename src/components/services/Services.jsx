import { Services, ServicesContent, Box, H3, Paragraph} from "./styled";

export default function services() {
    return(
        <Services id="services">
            <header className="heading">
                <h2>Our <span>services</span></h2>
            </header>
            <ServicesContent>
                <Box>
                    <H3>Web development</H3>
                    <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis earum voluptatum ut voluptas!</Paragraph>
                    <a href="#" className="button">Read more</a>
                </Box>
                <Box>
                    <H3>Web development</H3>
                    <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis earum voluptatum ut voluptas!</Paragraph>
                    <a href="#" className="button">Read more</a>
                </Box>
                <Box>
                    <H3>Web development</H3>
                    <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis earum voluptatum ut voluptas!</Paragraph>
                    <a href="#" className="button">Read more</a>
                </Box>
                <Box>
                    <H3>Web development</H3>
                    <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis earum voluptatum ut voluptas!</Paragraph>
                    <a href="#" className="button">Read more</a>
                </Box>
                <Box>
                    <H3>Web development</H3>
                    <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis earum voluptatum ut voluptas!</Paragraph>
                    <a href="#" className="button">Read more</a>
                </Box>
                <Box>
                    <H3>Web development</H3>
                    <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis earum voluptatum ut voluptas!</Paragraph>
                    <a href="#" className="button">Read more</a>
                </Box>
            </ServicesContent>
        </Services>
    )
}