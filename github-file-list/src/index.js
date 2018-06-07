import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

  const testFiles = [
        {
            id: 1,
            name: 'src',
            type: 'folder',
            updated_at: "2016-07-11 21:24:00",
            latestCommit: {
                message: 'Initial commit'
            }
        },
        {
            id: 2,
            name: 'tests',
            type: 'folder',
            updated_at: "2016-07-11 21:24:00",
            latestCommit: {
                message: 'Initial commit'
            }
        },
        {
            id: 3,
            name: 'README.txt',
            type: 'file',
            updated_at: "2016-07-18 21:24:00",
            latestCommit: {
                message: 'Added a readme'
            }
        },
        {
            id: 4,
            name: 'src',
            type: 'folder',
            updated_at: "2016-07-11 21:24:00",
            latestCommit: {
                message: 'Initial commit'
            }
        },
        {
            id: 5,
            name: 'tests',
            type: 'folder',
            updated_at: "2016-07-11 21:24:00",
            latestCommit: {
                message: 'Initial commit'
            }
        },
        {
            id: 6,
            name: 'README.txt',
            type: 'file',
            updated_at: "2016-07-18 21:24:00",
            latestCommit: {
                message: 'Added a readme'
            }
        },
        {
            id: 7,
            name: 'src',
            type: 'folder',
            updated_at: "2016-07-11 21:24:00",
            latestCommit: {
                message: 'Initial commit'
            }
        },
        {
            id: 8,
            name: 'tests',
            type: 'folder',
            updated_at: "2016-07-11 21:24:00",
            latestCommit: {
                message: 'Initial commit'
            }
        },
        {
            id: 9,
            name: 'README.txt',
            type: 'file',
            updated_at: "2016-07-18 21:24:00",
            latestCommit: {
                message: 'Added a readme'
            }
        },
  ];

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">
            {timeString}
        </span>
    )
}

const CommitMessage = ({ commitMsg }) => {
    return (
        <span className="commit-message">{commitMsg}</span>
    )
}

const FileIcon = ({ icon }) => {
    const FolderFile = icon === 'folder' ? 'folder' : 'file';
    console.log(FolderFile)
    return (
        <span className={`file-icon ${FolderFile}`}><i className={`fas fa-${FolderFile}`}></i></span>
    )
}

const FileName = ({ name }) => {
    return (
        <span className="file-name">{name}</span>
    )
}


const FileListItem = ({file}) => {
    return (
        <div className="file-item-row" key={file.id}>
            <FileIcon icon={file.type}/>
            <FileName name={file.name}/>
            <CommitMessage commitMsg={file.latestCommit.message}/>
            <Time time={file.updated_at}/>
        </div>
    )
}

const FileList = ({ files }) => {
    return (
            <div className="file-list">
                    {
                        files.map(file => {
                            return (
                                <FileListItem key={file.id} file={file}/>
                            )
                        })
                    }
            </div>
        )
}

ReactDOM.render(<FileList files={testFiles}/>, document.getElementById('root'));
registerServiceWorker();
