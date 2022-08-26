import { Component } from "react";
import AccountComponent from "../Components/Account/Account";
import DefaultTemplate from "../Components/Template/Default";

export default class Account extends Component {
    render() {
        return (
            <DefaultTemplate isHeader={true} isFooter={true}>
                <AccountComponent
                    title={(this.props.component === "signup") ? 'Sign Up' : "Sign In"}
                    content={(this.props.component === "signup")
                        ? 'Welcome! Please enter your details for signup.'
                        : "Welcome! Please enter your details for signin."}
                    img_url="signup.jpg"
                    component={this.props.component}
                />
            </DefaultTemplate>
        )
    }
}