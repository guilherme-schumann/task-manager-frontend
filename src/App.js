const App = () => {
    const messages = ["Hello world", "Olá mundo", "Bom dia!"];
    return (
        <>
            {messages.map((message) => (
                <h1>{message}</h1>
            ))}
        </>
    );
};

export default App;
