import{
    DownloadContainer,
    EffectPhrase,
    DownloadContent,
    ContactUsContainer,
    ButtonDownload,
    FormContainer,
    FormTitle,
    Forms,
    NameLabelContainer,
    EmailLabelContainer,
    MessageLabelContainer,
    NameLabel,
    EmailLabel,
    MessageLabel,
    NameInput,
    EmailInput,
    MessageInput,
    FormButtonContainer,
    FormButton,
 } from "./styles";

export const ContactUs: React.ElementType = () => {
    return(
        <ContactUsContainer>
            <DownloadContainer>
                <DownloadContent>
                    <EffectPhrase>Recordar é amar</EffectPhrase>
                    <ButtonDownload>baixe agora</ButtonDownload>
                </DownloadContent>
            </DownloadContainer>


            <FormContainer>
                <FormTitle>Entre em contato conosco</FormTitle>
                <Forms>
                    <NameLabelContainer>
                        <NameLabel htmlFor="username">Nome</NameLabel>
                        <NameInput 
                        type="text"
                        id="username"
                        name="username" 
                        />
                    </NameLabelContainer>
                    <EmailLabelContainer>
                        <EmailLabel htmlFor="email">E-mail</EmailLabel>
                        <EmailInput 
                        type="text"
                        id="email"
                        name="email" 
                        />
                    </EmailLabelContainer>
                    <MessageLabelContainer>
                        <MessageLabel htmlFor="message">Escreva sua mensagem</MessageLabel>
                        <MessageInput
                        id="message"
                        name="message"
                        />
                    </MessageLabelContainer>
                    <FormButtonContainer>
                        <FormButton type="submit">Enviar</FormButton>
                    </FormButtonContainer>
                </Forms>
            </FormContainer>
        </ContactUsContainer>
    );
}