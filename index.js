const Notification = (props) => {
  //  Write your code here.
  const { name, url, className } = props;

  return (
    <div className={`notification ${className}`}>
      <img className="icon" src={url} />
      <p className="para">{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-list">
      <Notification
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        name="Information Message"
        className="information"
      />
      <Notification
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        name="Success Message"
        className="success"
      />
      <Notification
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        name="Warning Message"
        className="warning"
      />
      <Notification
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        name="Error Message"
        className="error"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
