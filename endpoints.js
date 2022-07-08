exports.me = function () {
    return `https://mixpanel.com/api/app/me`
}

exports.getAllDash = function (workSpaceId) {
    return `https://mixpanel.com/api/app/workspaces/${workSpaceId}/dashboards/`
}

exports.getSingleDash = function (workSpaceId, dashId) {
    return `https://mixpanel.com/api/app/workspaces/${workSpaceId}/dashboards/${dashId}`
}

exports.getSingleReport = function (workSpaceId, reportId) {
    return `https://mixpanel.com/api/app/workspaces/${workSpaceId}/bookmarks/${reportId}?v=2`
}

exports.getSchemas = function (projectId) {
    return `https://mixpanel.com/api/app/projects/${projectId}/schemas`
}

exports.postSchema = function(projectId) {
	return `https://mixpanel.com/api/app/projects/${projectId}/schemas`
}

exports.makeDash = function(workSpaceId) {
	return `https://mixpanel.com/api/app/workspaces/${workSpaceId}/dashboards/`
}

exports.shareDash = function(projectId, dashId) {
	return `https://mixpanel.com/api/app/projects/${projectId}/shared-entities/dashboards/${dashId}/upsert`
}

exports.pinDash = function(workSpaceId, dashId) {
	return `https://mixpanel.com/api/app/workspaces/${workSpaceId}/dashboards/${dashId}/pin/`
}

exports.makeReport =  function(workSpaceId) {
	return `https://mixpanel.com/api/app/workspaces/${workSpaceId}/bookmarks`;
}

exports.getCohorts = function(workSpaceId) {
	return `https://mixpanel.com/api/app/workspaces/${workSpaceId}/cohorts/`
}

exports.makeCohorts = function(workSpaceId) {
	return `https://mixpanel.com/api/app/workspaces/${workSpaceId}/cohorts/`
}

