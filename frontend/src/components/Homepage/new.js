import axios from "axios";
import React, { useEffect, useState } from "react";
import Book from '../../assets/image/book.png';

function New(props) {
  return (
    <div className="card" style={{ marginRight: '5%', marginLeft: '5%', boxShadow: '2px 6px 8px 0 rgba(22, 22, 26, 0.18)' }}>
      <img className="product--image" src={Book} alt="img" />

      <div style={{ width: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: '#324552', fontSize: 14, fontFamily: 'Work Sans', fontWeight: '600', wordWrap: 'break-word' }}>{props.title}</div>

      <div style={{ width: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: '#7D92A1', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word' }}>{props.authorName}</div>

      <button className="btn btn-success" style={{ width: '100%', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', backgroundColor: '#31AAB7' }}>Mượn</button>
    </div>
  );
}

export default New;