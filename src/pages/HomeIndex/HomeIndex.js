import React, { Component } from 'react'
import './HomeIndex.css'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
// import { Route } from 'react-router-dom'
// 引入组件
import XheaderBar from '../../components/Xhome/XheaderBar/XheaderBar'
import XswiperContainer from '../../components/Xhome/XswiperContainer/XswiperContainer'
import Xpblink from '../../components/Xhome/Xpblink/Xpblink'
import Xnav from '../../components/Xhome/Xnav/Xnav'
import Xrecommend from '../../components/Xhome/XlistSection/Xrecommend/Xrecommend'
import Xchildren from '../../components/Xhome/XlistSection/Xchildren/Xchildren'
import Xadult from '../../components/Xhome/XlistSection/Xadult/Xadult'
import Xparents from '../../components/Xhome/XlistSection/Xparents/Xparents'
import Xfamily from '../../components/Xhome/XlistSection/Xfamily/Xfamily'
import Xtravel from '../../components/Xhome/XlistSection/Xtravel/Xtravel'
import Xfooter from '../../components/Xfooter/Xfooter'
import XbackTop from '../../components/Xhome/XbackTop/XbackTop';
import Xpbft from '../../components/Xhome/Xpbft/Xpbft';
import Xhonor from '../../components/Xhome/Xhonor/Xhonor';
// import Xrecommend from '../../components/Xhome/XlistSection/Xrecommend/Xrecommend';
// import Xrecommend from '../../components/Xhome/XlistSection/Xrecommend/Xrecommend';

class HomeIndex extends Component {
  constructor (props) {
    super(props);
    console.log(this.props.location.pathname)
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <XheaderBar />
        <XswiperContainer />
        <Xpblink />
        <Xnav />
        {/* <Xrecommend /> */}
        <div className='section_item' id='article_0'>
         
          <Xrecommend />
          <Xchildren />
          <Xadult />
          <Xparents />
          <Xfamily />
          <Xtravel />
          <XbackTop />
          <Xpbft />
          <Xhonor />
        </div>
        <Xfooter />
      </div>
    )
  }
}

export default HomeIndex
