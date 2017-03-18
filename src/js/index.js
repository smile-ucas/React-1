/**
 * Created by xiaoxiao on 2017/3/17.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/BodyIndex';
class Index extends React.Component {
    componentWillMount() {//页面将要加载时的函数
        console.log("Index-componentWillMount");
    }
    componentDidMount(){//页面已经加载完了
        console.log("Index-componentDidMount");
    }

    render() {
        var head= < ComponentHeader / >;
        return (
            < div >
               {head}
               < BodyIndex / >
               < ComponentFooter / >
            < / div >
        );
    }
}

ReactDOM.render( < Index / >, document.getElementById('example'));