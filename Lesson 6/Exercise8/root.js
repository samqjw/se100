// root.js

const users = [
    { name: 'Tom', country: 'Singapore' },
    { name: 'Jerry', country: 'Malaysia' },
    { name: 'Sarah', country: 'Indonesia' }
];

function WelcomeMessagesTitle() {
    return <p>Welcome Messages</p>
}

function WelcomeMessage(props) {
    return <li>Welcome {props.name} from {props.country}</li>
}

function WelcomeMessagesList() {
    return <ul>
    {
        users.map(user => (
        users.country === "Singapore" ? <li>"Majulah Singapura"<li/> : <welcomeMessagesList />))
    }
    </ul>
}

function WelcomeMessagesSection() {
    return <div>
    <WelcomeMessagesTitle />
    <WelcomeMessagesList />
    </div>
}

function App() {
    return <div>
    <WelcomeMessagesSection />
    </div>
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)