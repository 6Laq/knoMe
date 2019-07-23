import React from 'react'

const DUMMY_LIST = [
  {
    contact: 'Josuke',
    online: true
  },
  {
    contact: 'DraeMun',
    online: false
  }
]

class ContactList extends React.Component {
  render(){
    return(
      <div className="contact-list">
        {DUMMY_LIST.map((contacts, index) => {
          return (
            <div key={index} className="contacts">
              <div>{contacts.contact}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ContactList;