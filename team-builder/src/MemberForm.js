import React, { useState } from "react";
//creating component to handle member inputs
const MemberForm = props => {

    const [member, setMember] = useState({
      name: "",
      email: "",
      role: ""
    });

    const handleChanges = event => {

      setMember({...member, [event.target.name]: event.target.value})
    };



      const submitMember = event => {
        event.preventDefualt();
        props.addNewMember(member);
        setMember({
          name: "",
          email: "",
          role: ""
        });
      };
      return(
          <form onSubmit={submitMember}>
            <label htmlFor="name"> Name </label>
            <input
               type="text"
               placeholder="Name"
               id="name"
               name="name"
               value={member.name}
               onChange={handleChanges}
             />
             <label htmlFor="email"> Name </label>
             <input
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                value={member.email}
                onChange={handleChanges}
              />
              <label htmlFor = "role"> Name </label>
              <input
                 type="text"
                 placeholder= "Role"
                 id="role"
                 name="role"
                 value={member.role}
                 onChange={handleChanges}
               />
               <button type="submit">Add Member</button>
            </form>



      );
    };

    export default MemberForm;
