import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
import * as React from "react";
import ReactDOM from 'react-dom';


const path = "hits";
class MutationExample extends React.Component {
  state = {
    pushedKey: ""
  };
  render() {
    const { state } = this;
    return (
      <React.Fragment>
        <FirebaseDatabaseMutation type="push" path={path}>
          {({ runMutation }) => {
            return (
              <div>
                <button
                  data-testid="test-push"
                  onClick={async () => {
                    const { key } = await runMutation({ TEST: "hitPont" });
                    this.setState({ pushedKey: key });
                  }}
                >
                  Push
                </button>
              </div>
            );
          }}
        </FirebaseDatabaseMutation>
        {state.pushedKey !== "" && (
          <div>
            <div data-testid="test-push-result">{state.pushedKey}</div>
            <div>
              <FirebaseDatabaseNode path={`${path}/${state.pushedKey}`}>
                {({ value }) => <pre>{s(value)}</pre>}
              </FirebaseDatabaseNode>
              <FirebaseDatabaseMutation
                type="set"
                path={`${path}/${state.pushedKey}`}
              >
                {({ runMutation }) => (
                  <button
                    onClick={async () => {
                      runMutation(null);
                      this.setState({ pushedKey: "" });
                    }}
                  >
                    Delete
                  </button>
                )}
              </FirebaseDatabaseMutation>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const App = () => (
  <div style={styles}>
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <div>
        Data in <pre>user_bookmarks</pre>
      </div>
      <MutationExample />
    </FirebaseDatabaseProvider>
  </div>
);


export type AppState = {
    limit: number;
  };