import { Contact, ContactContent, Image, Img,
Form, InputField, Input, Label, TextArea } from "./styled";
import resume from "../../assets/resume.gif";

export default function contact() {
    return(
        <Contact id="contact">
            <header className="heading">
                <h2>Contact <span>me</span></h2>
            </header>
            <ContactContent>
                <Image>
                    <Img src={resume} alt="Resume image"/>
                </Image>
                <Form action="#">
                    <InputField>
                        <Input type="text" required/>
                        <Label>Name</Label>
                    </InputField>
                    <InputField>
                        <Input type="email" required/>
                        <Label>Email</Label>
                    </InputField>
                    <InputField>
                        <Input type="tel" required/>
                        <Label>Phone</Label>
                    </InputField>
                    <InputField>
                        <Input type="text" required/>
                        <Label>Subject</Label>
                    </InputField>
                    <InputField className="text-area">
                        <TextArea cols={30} rows={10} required></TextArea>
                        <Label>Message</Label>
                    </InputField>
                    <button type="submit" className="button">Send message</button>
                </Form>
            </ContactContent>
        </Contact>
    )
}