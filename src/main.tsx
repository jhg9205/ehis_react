import Main from './pages'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

// import './index.css'
import rootReducer from '@modules/reducer'

const store = createStore(rootReducer)

// ReactDOM.createRoot(document.getElementById('root')!).render(
// 	<React.StrictMode>
// 		<App2 />
// 	</React.StrictMode>
ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<Main />
	</Provider>
)
