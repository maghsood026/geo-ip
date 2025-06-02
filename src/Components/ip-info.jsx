import React from "react";
import './style.css'
import { Audio } from 'react-loader-spinner'
import getInfo from "../Services/getinfo";
import ClientInfo from "./clientInfo";
export default class IpInof extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: null,
            isLoading: true
        }
    }
   
    componentDidMount() {
        getInfo().then (data => {
            this.setState({
                info: data, 
                isLoading: false
            })
        })
    }
    render(){
        return(
            <>
            {this.state.isLoading ? <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass/> :  <ClientInfo  data={this.state.info} />
            }
    </>
        )
    }
}