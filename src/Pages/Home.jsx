import { Component, React } from "react";
import Hero from '../Components/Hero/Hero';
import ContentBlock from "../Components/ContentBlock/ContentBlock";
import DefaultTemplate from "../Components/Template/Default";


export default class Home extends Component {

    render() {
        const img_url = (img) => require('../assets/images/' + img)

        return (
            <DefaultTemplate isHeader={true} isFooter={true}>
                <Hero
                    title="Personal <span>Cloud Computer</span> That You Can Own Completely"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut velit proin nullam mattis eget porttitor in. Lacus arcu ut amet vulputate netus. Nulla iaculis sit non consectetur sem eros leo."
                    button_text="Get Started"
                    button_link="/signup"
                />
                <ContentBlock
                    title="Lorem ipsum dolor sit"
                    subtitle="About"
                    img_url={img_url("about.jpg")}
                    img_position="right"
                    button_text="Get Started"
                    button_link="/signup"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At id eu ultricies mattis non. Sed in lacus, et volutpat malesuada ultrices facilisis malesuada eu. Volutpat massa commodo, viverra eget tortor iaculis. Aliquam, ornare elementum massa sit facilisis vestibulum sollicitudin cursus semper. Eget sed est est gravida sed eget id id. Amet, volutpat eu sed scelerisque non nec odio.</p>
                    <p>Phasellus enim facilisi ultrices ipsum sed vitae. Dui sit et nisl, turpis leo at sem cursus id. Hac convallis morbi suscipit lacinia in praesent viverra sit eleifend. Dui vitae amet dui, id diam, cras tempor etiam posuere. Ut sed donec sed vel justo. Dictum sagittis urna, senectus tincidunt lorem non augue porta placerat. Sed sed. </p>
                </ContentBlock>
            </DefaultTemplate>
        )
    }
}