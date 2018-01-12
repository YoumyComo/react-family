import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL} from 'actions/userInfo';

//初始化
const initState = {
	isLoading: false,
	userInfo: {},
	errorMsg: ''
}
export default function reducer (state = initState, action) {
	switch (action.type) {
		case GET_USER_INFO_REQUEST:
			return {
				// ...state 保证其他state更新;是和别人的Object.assign()起同一个作用
				...state,
				isLoading: true,
				userInfo: {},
				errorMsg: ''
				
			};
		// case GET_USER_INFO_SUCCESS:
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		userInfo: action.userInfo,
		// 		errorMsg: ''
		// 	};
	/*修改GET_USER_INFO_SUCCESS */
	//action.userInfo修改成了action.result.data。
		//中间件，请求成功，会给action增加一个result字段来存储响应结果
		case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userInfo: action.result.data,
                errorMsg: ''
            };

		case GET_USER_INFO_FAIL:
			return {
				...state,
				isLoading: false,
				userInfo: {},
				errorMsg: '请求错误'
			}
		default:
			return state;
	}
}