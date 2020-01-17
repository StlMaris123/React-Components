import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
              <CommentDetail author="stella" timeRecorded="Today at 2:00 P.M" details="I love you"/>
            </ApprovalCard>
            <ApprovalCard >
              <CommentDetail author="Maris"  timeRecorded="Yesterday at 5:00 A.M" details="I hate you"/>                
            </ApprovalCard>
            <ApprovalCard >
              <CommentDetail author="Njage" timeRecorded="Today  at 8:30 A.M" details="I miss you"/>            
            </ApprovalCard>
            
        </div>

    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);