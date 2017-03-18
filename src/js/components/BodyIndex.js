/**
 * Created by xiaoxiao on 2017/3/17.
 */
/**
 * Created by xiaoxiao on 2017/3/17.
 */
/**
 * Created by xiaoxiao on 2017/3/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';


export default class BodyIndex extends React.Component{
        componentWillMount() {//页面将要加载时的函数
            console.log("BodyIndex-componentWillMount");
        }
        componentDidMount(){//页面已经加载完了
            console.log("BodyIndex-componentDidMount");
        }


    render(){
        var userName='xiaoxiao';
        var boolInput=false;

        var html="one\u0020two";

        return(
            <div>
               <h2>这里是主体</h2>
               <p>{userName==''?'You are not signed.':'name:'+userName}</p>
               <p><input type='button' value='This is a button' disabled={boolInput}></input></p>
               {/*JSX的注释*/}

               <p>{html}</p>{/*需要进行Unicode的转码,这个例子是个空格*/}
            </div>

    );
    }
}