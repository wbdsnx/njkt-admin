<template>
	<div>
		<a-tree-select style="width: 256px" :value="selectedValue" multiple
			:dropdown-style="{ maxHeight: '200px', overflow: 'auto' }" placeholder="请选择分类" :max-tag-count="5"
			:tree-expanded-keys="expanded" @change="onChange" @treeExpand="onTreeExpand">
			<a-tree-select-node v-for="(clas,index) in classifications" :key="`${index}`" :value="`${index}`"
				:title="clas.breed" :selectable="false">
				<a-tree-select-node title="物候期" :key="`${index}-0`" :value="`${index}-0`" :selectable="false">
					<a-tree-select-node v-for="(phen,ind) in clas.phenophase" :key="`${index}-0-${ind}`"
						:value="`${index}-0-${ind}`" :title="phen"></a-tree-select-node>
				</a-tree-select-node>
				<a-tree-select-node title="技术" :key="`${index}-1`" :value="`${index}-1`" :selectable="false">
					<a-tree-select-node v-for="(tech,ind) in clas.technology" :key="`${index}-1-${ind}`"
						:value="`${index}-1-${ind}`" :title="tech"></a-tree-select-node>
				</a-tree-select-node>
			</a-tree-select-node>
		</a-tree-select>
	</div>
</template>
<script>
	export default {
		name: 'classify-select',
		data() {
			return {
				expanded: [],
				classifications: [{
						breed: "土豆",
						phenophase: ["休眠期", "发芽期", "幼苗期", "发棵期", "结薯期"],
						phenophaseSelected: [],
						technology: ["选种", "切块催芽", "查苗补苗", "除草", "杀虫", "防病", "施肥"],
						technologySelected: [],
					},
					{
						breed: "湖羊",
						phenophase: ["羔羊期", "成熟期", "发情期", "配种期", "繁殖期", "出栏期"],
						phenophaseSelected: [],
						technology: ["饲料加工", "日粮", "营养", "防病", "种畜繁育", "免疫"],
						technologySelected: [],
					},
					{
						breed: "白绒山羊",
						phenophase: ["羔羊期", "成熟期", "发情期", "配种期", "繁殖期", "出栏期"],
						phenophaseSelected: [],
						technology: ["饲料加工", "日粮", "营养", "防病", "种畜繁育", "免疫"],
						technologySelected: [],
					},
				],
				selectedValue: [],
			};
		},
		methods: {
			onChange(value) {
				console.log(value)
				//判断this.selectedValue 之前是否包含 first
				if(this.selectedValue[0] && !this.selectedValue[0].includes('-')){
					//判断value 是否包含 first
					if(value[0] && value[0].includes('-')){
						//不包含 代表删除
						this.selectedValue = []
						return 
					}
				}
				this.selectedValue = value;
				if (this.selectedValue.length == 1) {
					if(this.selectedValue[0].includes('-')){
						//获取第 this.selectedValue 的 第一级key
						//添加品种
						const first = this.selectedValue[0].split('-')[0]
						this.selectedValue.splice(0, 0, `${first}`)
					}else{
						this.selectedValue = []
					}
				}
					
			},
			onTreeExpand(expandedKeys) {
				//获取第一级展开的项
				let first = this.expanded[0]
				const length = expandedKeys.length
				if (expandedKeys[length - 1]) {
					const keyArray = expandedKeys[length - 1].split('-')
					if (first !== keyArray[0]) {
						//品种切换
						if(this.selectedValue[0] && this.selectedValue[0] != keyArray[0]){
							this.selectedValue = []
						}
						this.expanded = [keyArray[0]]
						return
					}
				}
				this.expanded = expandedKeys
				console.log(expandedKeys)
			}
		},
	};
</script>

<style lang="less">
</style>
