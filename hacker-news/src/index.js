import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';



const HeadNavBar = () => {
    const headNavItems = ['news','threads','comments','show','ask','jobs','submit'];
    return (
        <div className="headNav">
        <span className="headTitle">Hacker news</span>
            {
                headNavItems.map(function(item, i) {
                    return (
                        <span className="headItem">
                            <a href='#'> {item} </a>
                            <span className="seperator"> | </span>
                        </span>
                    )
                })
            }
        </div>
    )
}

const UserName = () => {

}

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">
            {timeString}
        </span>
    )
}
 
ReactDOM.render(<HeadNavBar/>, document.getElementById('root'));
registerServiceWorker();
