import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { messageSend, messageThreadLoad } from '../services/message';
import AuthenticationContext from './../context/authentication';
import './MessageThreadDetailPage.scss';

const MessageThreadDetailPage = () => {
  const { id } = useParams();

  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    messageThreadLoad(id).then((data) => {
      setMessages(data.messages);
    });
  }, [id]);

  const handleMessageFormSubmission = (event) => {
    event.preventDefault();
    messageSend(id, { content }).then((data) => {
      setContent('');
      setMessages([...messages, data.message]);
    });
  };

  const { user } = useContext(AuthenticationContext);

  return (
    <div>
      <div className="message-list">
        {messages.map((message) => (
          <div
            className={
              message.sender === user._id ? 'message-sent' : 'message-received'
            }
          >
            <span>{message.content}</span>
            <br />
            <small>{new Date(message.createdAt).toGMTString()}</small>
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageFormSubmission}>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default MessageThreadDetailPage;
