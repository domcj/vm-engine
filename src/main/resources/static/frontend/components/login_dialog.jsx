import React from 'react';  //引入react组件
import {Link} from 'react-router-dom';
import "../scss/login_dialog.scss";
/*登录框*/
var LoginDialog = React.createClass({
    getInitialState: function () {
        return {
            dialogClassName: ""
        };
    },
    componentDidMount: function () {
        window.addEventListener('resize', this.onWindowResize)

        //adjust ui
        this.adjustUI();

    },
    componentWillUnmount: function () {
        window.removeEventListener('resize', this.onWindowResize)
    },
    onWindowResize: function () {
        this.adjustUI();
    },
    adjustUI: function () {
        {
            /*调整样式*/
        }
        this.dialogToMiddle();

    },
    dialogToMiddle: function () {
        //垂直居中
        var dialog = $(this.refs.dialog);
        var content = $(this.refs.content);
        var dialog_h = dialog.height();
        var content_h = content.height();
        var top = (content_h - dialog_h) / 2;
        dialog.css("margin-top", top + "px");
    },
    showLoginDialog: function () {
        //show it
        this.fadeIn();

        //adjust ui
        this.adjustUI();
    },
    closeLoginDialog: function () {
        //hide it
        this.fadeOut();
    },
    fadeIn: function () {

        var state = this.state;
        $(this.refs.content).fadeIn();
        state.dialogClassName = "block animated bounceIn";
        this.setState(state);

        // c(this.state);

    },
    fadeOut: function () {
        var state = this.state;
        state.dialogClassName = "animated bounceOut";
        $(this.refs.content).fadeOut();
        this.setState(state);
    },
    render: function () {
        return <div id="login_dialog_content" ref="content">
            <div id="dialog" className={this.state.dialogClassName} ref="dialog">
                <div id="head" className="clearfix">
                    <div id="title_div">登录</div>
                    <div id="close_div">
                        <a href="javascript:void(0);" onClick={this.closeLoginDialog}>X</a>
                    </div>
                </div>
                <div id="body">
                    <div id="login_form">
                        <div id="username_div">
                            <input id="username_input" type="text" placeholder="username"/>
                        </div>
                        <div id="password_div">
                            <input id="password_input" type="password" placeholder="password"/>
                        </div>
                        <div id="login_btn_div">
                            <input id="login_btn_input" type="button" value="登录"/>
                        </div>

                    </div>
                </div>

            </div>
        </div>;
    }
});
export default LoginDialog;