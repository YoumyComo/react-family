export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

// 创建请求中，请求成功，请求失败 三个action创建函数
// function getUserInfoRequest() {
// 	return {
// 		type: GET_USER_INFO_REQUEST
// 	}
// }
// function getUserInfoSuccess(userInfo) {
// 	return {
// 		type: GET_USER_INFO_SUCCESS,
// 		userInfo: userInfo
// 		// userInfo: userInfo???有什么作用呢？
// 	}
// }
// function getUserInfoFail() {
// 	return {
// 		type: GET_USER_INFO_FAIL
// 	}
// }
// 将三个action与网络请求联系到一起
// 为什么要将网络请求放到action，而不是reducer???
// export function getUserInfo() {
// 	return function (dispatch) {
// 			dispatch(getUserInfoRequest());

// 			return fetch('http://localhost:8080/api/user.json')
// 				.then((response => {
// 					console.log("RESPONSE阶段");
// 					return response.json();
// 				}))
// 				.then((json) => {
// 					console.log("输出json"+json.name);
// 					dispatch(getUserInfoSuccess(json));
// 				}).catch(() => {
// 					console.log("FAIL阶段");
// 					dispatch(getUserInfoFail());
// 					}
// 				)
// 	}
     
// }

/* 使用 axios 优化 getUserInfo() */

export function getUserInfo() {
    return {
        types: [GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL],
        promise: client => client.get('api/user')
    }
}


