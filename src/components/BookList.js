import React, { Component } from 'react'

class BookList extends Component {
    
    render() { 
        return (
          <div className="booklist">
            <ul>
              <li>the way of kings</li>
              <li>the final empire</li>
              <li>the name of the wind</li>
            </ul>
          </div>
        );
    }
}
 
export default BookList;