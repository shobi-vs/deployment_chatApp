import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


const App = () => {
      if (!localStorage.getItem('username'))
         return <LoginForm />

    return (
      <ChatEngine
          height='100vh'
          projectID='e938fcb2-20b1-4cf5-a1f1-8b916b677630'
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/> }
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
  );
}

export default App;
