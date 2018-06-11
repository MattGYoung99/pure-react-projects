import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const expPost = [
    {
        id: 1,
        points: 230,
        comments: 4,
        title: 'This is why i am not suing the great government of america',
        username: 'iLoveToLearn',
        source: 'linkhere.ok',
        updated_at: "2016-07-11 21:24:00"
    }
]
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

const UserName = ({username}) => {
    return (
        <span className="user">{username}</span>
    )
}


const ArticleTitle = ({title}) => {
    return (
        <span className="title">{title}</span>

    )
}

const ArticlePoints = ({points}) => {
   return (
       <span className="points">{points}</span>
    )
}

const ArticleSource = ({source}) => {
    return (
        <span className="source">{source}</span>
    )
}
const Article = ({props}) => {
    return (
        <div className="article">
                <div className="postHead">
                    <span className="listNumber">{props[0].id}</span>
                    <ArticleTitle title={props[0].title}/>
                    <ArticleSource source={props[0].source}/>
                </div>
                <div className="postNavBar">
                    <ArticlePoints points={props[0].points}/>
                    <p>by</p>
                    <UserName username={props[0].username}/>
                    <Time time={props[0].updated_at}/>
                    <p className="flag"><a href="#">| Flag | Hide</a></p>

                </div>
        </div>
    )
}
const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
        return (
            <span className="time">
                {timeString}
            </span>
        )
}

class HackerNews extends React.Component {
    render () {
        return (
            <div>
                <HeadNavBar/>,
                <Article props={expPost}/>
            </div>
        )
    }
}
ReactDOM.render(<HackerNews/>, document.getElementById('root'));
registerServiceWorker();
