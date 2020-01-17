import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail'


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="stella" timeRecorded="Today at 2:00 P.M" details="I love you"/>
            <CommentDetail author="Maris"  timeRecorded="Yesterday at 5:00 A.M" details="I hate you"/>
            <CommentDetail author="Njage" timeRecorded="Today  at 8:30 A.M" details="I miss you"/>
            
        </div>

    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);