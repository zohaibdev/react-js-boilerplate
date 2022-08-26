import { Component } from "react";
import ContentBlock from "../Components/ContentBlock/ContentBlock";
import DefaultTemplate from "../Components/Template/Default";

export default class NotFound extends Component {
    render() {
        const img_url = (img) => require('../assets/images/' + img)

        return (
            <DefaultTemplate isHeader={true} isFooter={true}>
                <ContentBlock
                    title="Oh No! Error 404"
                    subtitle="Page not Found"
                    img_url={img_url('404.jpg')}
                    img_position="left"
                    button_text="Back To Homepage"
                    button_link="/"
                    button_extra_classes="arrow-left"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla quis morbi a pharetra sit tristique maecenas venenatis sed. </p>
                </ContentBlock>
            </DefaultTemplate>
        )
    }
}