const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)

function welcomeMessagesTitle() {
    <>
        <p>Welcome Messages</p>
    </>
}

function welcomeMessagesList() {
    <>
        <ul>
            <li>Welcome Tom from Singapore</li>
            <li>Welcome Jerry from Malaysia</li>
            <li>Welcome Sarah from Indonesia</li>
        </ul> 
    </>
}

function welcomeSection() {
    <>
        <p>Welcome Messages</p>
            <ul>
                <li>Welcome Tom from Singapore</li>
                <li>Welcome Jerry from Malaysia</li>
                <li>Welcome Sarah from Indonesia</li>
            </ul> 
    </>
}

function App(){
        return<>
        <welcomeMessagesTitle />
        <welcomeMessagesList />
}