import React, { useState } from 'react';
import './PostRequest.css';

const PostRequest = () => {
  const [request, setRequest] = useState({ type: '', quantity: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to post a new request
    console.log('Request posted:', request);
  };

  return (
    <div className="post-request">
      <h2>Post a Donation Request</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type of donation needed"
          value={request.type}
          onChange={(e) => setRequest({ ...request, type: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={request.quantity}
          onChange={(e) => setRequest({ ...request, quantity: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={request.description}
          onChange={(e) => setRequest({ ...request, description: e.target.value })}
          required
        />
        <button type="submit">Post Request</button>
      </form>
    </div>
  );
};

export default PostRequest;