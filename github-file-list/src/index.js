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
            name: 'README',
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
        <p>{commitMsg}</p>
    )
}

const FileIcon = ({ icon }) => {
    return (
        <p>{icon}</p>
    )
}

const FileName = ({ name }) => {
    return (
        <p>{name}</p>
    )
}


const FileListItem = ({file}) => {
    return (
        <div>
            <FileIcon icon={file.type}/>
            <FileName name={file.name}/>
            <CommitMessage commitMsg={file.latestCommit.message}/>
            <Time time={file.updated_at}/>
        </div>
    )
}


const FileList = ({ files }) => {
    return (
            <table>
                <tbody>
                    {
                        files.map(file => {
                            return (
                                <tr key={file.id}>
                                    <td>{file.type}</td>
                                    <td>{file.name}</td>
                                    <td>{file.latestCommit.message}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
}

ReactDOM.render(<FileList files={testFiles}/>, document.getElementById('root'));
registerServiceWorker();
