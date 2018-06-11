import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const expPost = [
    {
        id: 1,
        points: 230,
        comments: 19,
        title: 'This is why i am not suing the great government of america',
        username: 'iLoveToLearn',
        source: 'source.link',
        updated_at: "2016-012-11 21:24:00"
    },
    {
        id: 2,
        points: 82,
        comments: 4,
        title: `Boy, 24 loses life earning on crypto`,
        username: 'elijah',
        source: 'source.link',
        updated_at: "2017-03-30 21:24:00"
    },
    {
        id: 3,
        points: 20,
        comments: 6,
        title: 'Boy slipped on a slipping slide and hit a rock',
        username: 'babyman',
        source: 'source.link',
        updated_at: "2017-07-11 21:24:00"
    },
    {
        id: 4,
        points: 11,
        comments: 2,
        title: 'What the hell is happening?',
        username: 'dices',
        source: 'source.link',
        updated_at: "2018-02-11 21:24:00"
    },
    {
        id: 5,
        points: 593,
        comments: 80,
        title: 'Poverty line increased 22% in the past 5 years',
        username: 'humaneBoy',
        source: 'source.link',
        updated_at: "2018-01-19 21:24:00"
    },
    {
        id: 6,
        points: 180,
        comments: 11,
        title: 'Man creates cure for cancer',
        username: 'omar',
        source: 'source.link',
        updated_at: "2018-01-01 21:24:00"
    },
    {
        id: 7,
        points: 67,
        comments: 0,
        title: 'Man was found confused in meeting',
        username: 'ItsTheCurve',
        source: 'source.link',
        updated_at: "2016-07-11 21:24:00"
    },
    {
        id: 8,
        points: 812,
        comments: 112,
        title: 'List of my top played spotify songs',
        username: 'ohWoah',
        source: 'source.link',
        updated_at: "2018-05-11 21:24:00"
    },
    {
        id: 9,
        points: 230,
        comments: 19,
        title: 'This is why i am not suing the great government of america',
        username: 'iLoveToLearn',
        source: 'source.link',
        updated_at: "2016-012-11 21:24:00"
    },
    {
        id: 10,
        points: 82,
        comments: 4,
        title: `Boy, 24 loses life earning on crypto`,
        username: 'elijah',
        source: 'source.link',
        updated_at: "2017-03-30 21:24:00"
    },
    {
        id: 11,
        points: 20,
        comments: 6,
        title: 'Boy slipped on a slipping slide and hit a rock',
        username: 'babyman',
        source: 'source.link',
        updated_at: "2017-07-11 21:24:00"
    },
    {
        id: 12,
        points: 11,
        comments: 2,
        title: 'What the hell is happening?',
        username: 'dices',
        source: 'source.link',
        updated_at: "2018-02-11 21:24:00"
    },
    {
        id: 13,
        points: 593,
        comments: 80,
        title: 'Poverty line increased 22% in the past 5 years',
        username: 'humaneBoy',
        source: 'source.link',
        updated_at: "2018-01-19 21:24:00"
    },
    {
        id: 14,
        points: 180,
        comments: 11,
        title: 'Man creates cure for cancer',
        username: 'omar',
        source: 'source.link',
        updated_at: "2018-01-01 21:24:00"
    },
    {
        id: 15,
        points: 67,
        comments: 0,
        title: 'Man was found confused in meeting',
        username: 'ItsTheCurve',
        source: 'source.link',
        updated_at: "2016-07-11 21:24:00"
    },
    {
        id: 16,
        points: 812,
        comments: 112,
        title: 'List of my top played spotify songs',
        username: 'ohWoah',
        source: 'source.link',
        updated_at: "2018-05-11 21:24:00"
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
        <span className="user">{`${username} `}</span>
    )
}
const ArticleTitle = ({title}) => {
    return (
        <span className="title">{title}</span>

    )
}
const ArticlePoints = ({points}) => {
   return (
       <span className="points">{`${points} points by `}</span>
    )
}
const ArticleSource = ({source}) => {
    return (
        <span className="source"><a href="#">{`(${source})`}</a></span>
    )
}
const Comments = ({comments}) => {
    return (
        <span className="comments">{`| ${comments} comments`}</span>
    )
}
const ArrowsContainer = () => {
    return (
        <div className="arrowsContainer">
            <div className="arrows">
                <span className="upvote">&#9652;</span>
                <span className="downvote">&#9652;</span>
            </div>
        </div>
    )
}
const Article = ({posts}) => {
    return (
        posts.map(function(item, i) {
            return (
                <div className="article">
                        <div className="postHead">
                            <span className="listNumber">{`${posts[i].id}.`}</span>
                            <ArrowsContainer/>
                            <ArticleTitle title={posts[i].title}/>
                            <ArticleSource source={posts[i].source}/>
                        </div>
                        <div className="postNavBar">
                            <ArticlePoints points={posts[i].points}/>
                            <UserName username={posts[i].username}/>
                            <Time time={posts[i].updated_at}/>
                            <span className="flag"> | <a href="#">Flag</a> | <a href="#">Hide</a></span>
                            <Comments comments={posts[i].comments}/>
                            <span className="save"> | <a href="#">Report</a> | <a href="#">Save</a></span>
                        </div>
                </div>
            )
        })
    )
}
const Time = ({time}) => {
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
                <HeadNavBar/>
                <Article posts={expPost}/>
            </div>
        )
    }
}
ReactDOM.render(<HackerNews/>, document.getElementById('root'));
registerServiceWorker();
