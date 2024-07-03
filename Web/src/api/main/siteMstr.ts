import request from '/@/utils/request';
enum Api {
  AddSiteMstr = '/api/siteMstr/add',
  DeleteSiteMstr = '/api/siteMstr/delete',
  UpdateSiteMstr = '/api/siteMstr/update',
  PageSiteMstr = '/api/siteMstr/page',
  UploadLogo = '/api/siteMstr/UploadLogo',
}

// 增加SiteMstr
export const addSiteMstr = (params?: any) =>
	request({
		url: Api.AddSiteMstr,
		method: 'post',
		data: params,
	});

// 删除SiteMstr
export const deleteSiteMstr = (params?: any) => 
	request({
			url: Api.DeleteSiteMstr,
			method: 'post',
			data: params,
		});

// 编辑SiteMstr
export const updateSiteMstr = (params?: any) => 
	request({
			url: Api.UpdateSiteMstr,
			method: 'post',
			data: params,
		});

// 分页查询SiteMstr
export const pageSiteMstr = (params?: any) => 
	request({
			url: Api.PageSiteMstr,
			method: 'post',
			data: params,
		});

	/**
	* 上传图标 
	*/
export const uploadLogo = (params: any) =>
		uploadFileHandle(params, Api.UploadLogo)

	export const uploadFileHandle = (params: any, url: string) => { 
	const formData = new window.FormData();
	formData.append('file', params.file);
	//自定义参数
	if (params.data) {
		Object.keys(params.data).forEach((key) => {
			const value = params.data![key];
			if (Array.isArray(value)) {
				value.forEach((item) => {
					formData.append(`${key}[]`, item);
				});
				return;
			}
			formData.append(key, params.data![key]);
		});
	}
	return request({
		url: url,
		method: 'POST',
		data: formData,
		headers: {
			'Content-type': 'multipart/form-data;charset=UTF-8',
			// ts-ignore
			ignoreCancelToken: true,
		},
	});
};
