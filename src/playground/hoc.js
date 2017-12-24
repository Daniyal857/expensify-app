// Higher Order Component (HOC) - A component (HOC) that renders another compoent
// REuse code
// Render hijacking
// Prop manupulation
// Abstract state



const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

// requireAuthentication

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please Login to view the info.</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo  = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('root'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('root'));
registerServiceWorker();
