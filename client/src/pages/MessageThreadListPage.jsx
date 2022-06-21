import { useEffect, useState } from 'react';
import { messageThreadList } from '../services/message';
import { Link } from 'react-router-dom';

const MessageThreadListPage = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    messageThreadList().then((data) => {
      setThreads(data.threads);
    });
  }, []);

  return (
    <div>
      {threads.map((thread) => (
        <li>
          <Link to={`/message/${thread._id}`}>
            <img src={thread.picture} alt={thread.name} />
            {thread.name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default MessageThreadListPage;
