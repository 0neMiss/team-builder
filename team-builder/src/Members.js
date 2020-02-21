import React from "react";

const Members = props => {
return (
  <div className = "member_list">
      {props.members.map(member => {
        <div className = "member" key = {member.id}>
           <h3>{member.name}</h3>
           <p>{member.email}</p>
           <p>{member.role}</p>
        </div>
      })}

    </div>
  );

};
export default Members;
