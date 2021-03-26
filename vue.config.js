const themeColor = '#FF6A00'

module.exports = {
	productionSourceMap: false,
	// publicPath: '/',
	css: {
		loaderOptions: {
			less: {
				modifyVars: {
					'primary-color': '#20BF8E'
				},
				javascriptEnabled: true,
				globalVars: {
					themeColor: themeColor
				}
			}
		}
	}
}
