import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';

import getRouter from 'router/router';
import store from './redux/store';

/*初始化*/
// 如果没该步骤，页面会出现空白
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
    module.hot.accept('./router/router.js', () => {
    	const getRouter = require('./router/router.js').default;
    	renderWithHotReload(getRouter());
    });
}
// Provider 组件是让所有组件可以访问到store，不需要手动传和手动监听
function renderWithHotReload(RootElement) {
	ReactDom.render(
		<AppContainer>
			<Provider store={store}>
		   		{RootElement}
			</Provider>
		</AppContainer>,
		document.getElementById('app')
	)
}
