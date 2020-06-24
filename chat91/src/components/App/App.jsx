import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
//	Link,
} from 'react-router-dom';
import {
	Main,
	Login,
	Register,
} from 'routes';
import {useResolution} from 'components/Hooks';
import isLogin from 'utils/isLogin.js';

export const ResolutionContext = React.createContext();
const App = () => {
	const resolution = useResolution();

	return <React.Fragment>
	<ResolutionContext.Provider value = {resolution}>
		<BrowserRouter>
			<Switch>
				<Route 
					exact 
					path="/"
					render={() => isLogin()
						? <Main />
						: <Redirect to="login" />}>
				</Route>
				<Route exact path="/login">
					<Login/>
				</Route>
				<Route exact path="/register">
					<Register/>
				</Route>
			</Switch>
		</BrowserRouter>
		</ResolutionContext.Provider>
	</React.Fragment>;

};

export default React.memo(App);
