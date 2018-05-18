import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";
//import { TransitionGroup, CSSTransition } from "react-transition-group";
import LoginForm from "./LoginForm";

const FormPageStyle = styled.div`
  width: 300px;
  height: 460px;
  overflow: hidden;
  margin: auto;
  margin-top: calc(50vh - 240px);
  box-sizing: border-box;
  @media (max-width: 700px) {
    margin-top: 20px;
  }
`;
const HeaderStyle = styled.div`
  font-size: 72px;
  color: #ccc;
  letter-spacing: 8px;
  font-family: "Arvo";
  height: 190px;
  width: 300px;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 60px;
  }
`;
const SubHeaderStyle = styled.div`
  font-size: 21px;
  color: #555;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const PosRelStyle = styled.div`
  position: relative;
  margin: 20px 10px;
`;

class LoginFormPage extends Component {
  handleLoginBtnClick = () => {};
  render() {
    const {
      //handleCreateUser,
      handleLogin,
      loginFormState,
      errorText,
      handleResetMessage,
      updateInputValue,
      inputVal
    } = this.props;

    // const CreateUserForm = (
    //   <CSSTransition
    //     key="loginform_1"
    //     timeout={300}
    //     classNames="slideInFromLeft"
    //   >
    //     <LoginForm
    //       placeholder="Create username..."
    //       btnText="Create Account"
    //       switchText="Login"
    //       handleFormSubmit={handleCreateUser}
    //       loginFormState={loginFormState}
    //       setFormState={this.props.setFormState}
    //       errorText={errorText}
    //       handleResetMessage={handleResetMessage}
    //       updateInputValue={updateInputValue}
    //       inputVal={inputVal}
    //     />
    //   </CSSTransition>
    // );
    const LoginUserForm = (
      // <CSSTransition
      //   key="loginform_2"
      //   timeout={300}
      //   classNames="slideInFromRight"
      // >
      <LoginForm
        placeholder="Enter username..."
        btnText="Log In"
        switchText="Create account"
        handleFormSubmit={handleLogin}
        loginFormState={loginFormState}
        setFormState={this.props.setFormState}
        errorText={errorText}
        handleResetMessage={handleResetMessage}
        updateInputValue={updateInputValue}
        inputVal={inputVal}
      />
      //</CSSTransition>
    );
    //const userForm = loginFormState ? LoginUserForm : CreateUserForm;
    return (
      <FormPageStyle>
        <HeaderStyle>
          <img
            src={"splash_logo_main.svg"}
            alt="Splash"
            style={{ width: "100%" }}
          />
        </HeaderStyle>
        <SubHeaderStyle>Creative Writing Helper</SubHeaderStyle>
        <PosRelStyle>
          {/* <TransitionGroup>{LoginUserForm}</TransitionGroup> */}
          {LoginUserForm}
        </PosRelStyle>
      </FormPageStyle>
    );
  }
}

export default LoginFormPage;
