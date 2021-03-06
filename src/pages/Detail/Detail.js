import React, { Component } from 'react'
import './Detail.scss'
import XheaderBar from '../../components/Xhome/XheaderBar/XheaderBar';
import Xfixeddwrap from '../../components/Xdetail/Xfixedwrap/Xfixedwrap';
import Xresponsibility from '../../components/Xdetail/Xresponsibility/Xresponsibility';
import Xintroduce from '../../components/Xdetail/Xintroduce/Xintroduce';
import Xcomment from '../../components/Xdetail/Xcomment/Xcomment';
import Xsettlement from '../../components/Xdetail/Xsettlement/Xsettlement';
import Xdetailfooter from '../../components/Xdetail/Xdetailfooter/Xdetailfooter';
import Xbackhome from '../../components/Xdetail/Xbackhome/Xbackhome';
// 引入组件


// import { Route } from 'react-router-dom'
class Detail extends Component {
  constructor (props) {
    super(props)
    this.props = props;
    console.log(props.location.pathname.slice(8))
    this.state = {
        sendArr:""
    }
  }
  getDetail(){
    var self = this;
    React.axios.post('http://localhost:3001/users/detail', {
        params: {
          id: this.props.location.pathname.slice(8)
        }
      }).then((response) => {
        console.log(response.data[0])
        self.setState({
            sendArr:response.data[0]
        })
       console.log(this.state.sendArr)
      }).catch(function (error) {
        console.log(error)
      })
    }
    componentDidMount(){
        this.getDetail()
    }
  render () {
    return (
        <div id="app" className="detail"  style={{height:"100px"}}>
            <div className="container">
                <div className="iphonex_padding">
                    <div className="detail-box">
                        <XheaderBar status="detail"/>
                        <Xfixeddwrap />
                        <Xresponsibility arr={this.state.sendArr}/>
                        <Xintroduce />
                        <Xcomment />
                        <Xsettlement />
                        <Xdetailfooter arr={this.state.sendArr}/>
                    </div>
                </div>
                <Xbackhome />
            <a href="javascript:;" data-track="detail_follow" className="concern">关注小雨伞保险，获取更多保险特卖资讯 &gt;&gt;</a>

            </div>
            
        </div>
    )
  }
}

export default Detail
