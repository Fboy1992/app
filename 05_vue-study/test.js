(function(modules){
//匿名自调函数
	
	//缓存的模块
	var installedModules = {}

	function __webpack_require__(moduleId) {
		//检查模块是否在缓存中
		if (installedModules[moduleId]) {
			return installedModules[moduleId].exports
		}

		//创建新的模块
		var module = installedModules[moduleId] = {
			exports = {},
			id = moduleId,
			loaded = false
		}

		//执行模块函数
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)

		module.loaded = true
		return module.exports
	}

	__webpack_require__.m = modules
	__webpack_require__.p = ""
	__webpack_require__.c = installedModules

	return __webpack_require__(0)
})([
	function(module, exports) {
		document.write('it works')
	}
])