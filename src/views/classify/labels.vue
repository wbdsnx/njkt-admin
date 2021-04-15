<template>
	<div class="classify-labels">
		<page-header :go-back="false" />
		<div class="content-box">
			<a-tree :default-expanded-keys="[expandedKey]" @select="onSelected" :treeData="treeData"
				:selected-keys="[selectedKey]">
				<a-icon slot="switcherIcon" type="down" />
				<template slot="customBreed" slot-scope="item">
					<span class="left">{{item.title}}</span>
					<span class="right" v-if="selectedKey == item.key">
						<a @click="showModal('添加品种',item.key,'add')">添加品种</a>
					</span>
				</template>
				<template slot="customTreeBreed" slot-scope="item">
					<span class="left">{{item.title}}</span>
					<span class="right" v-if="selectedKey == item.key">
						<a @click="showModal('编辑品种',item.key,'edit', item.title)">编辑</a>
						<a-divider type="vertical" />
						<a v-if="!item.dataRef.first" @click="up(item.key)">上移</a>
						<a-divider v-if="!item.dataRef.first" type="vertical" />
						<a v-if="!item.dataRef.last" @click="down(item.key)">下移</a>
						<a-divider v-if="!item.dataRef.last" type="vertical" />
						<a class="danger" @click="remove(item.key)">删除</a>
					</span>
				</template>
				<template slot="customPhen" slot-scope="item">
					<span class="left">{{item.title}}</span>
					<span class="right" v-if="selectedKey == item.key">
						<a @click="showModal('添加物候期',item.key,'add')">添加物候期</a>
					</span>
				</template>
				<template slot="customTech" slot-scope="item">
					<span class="left">{{item.title}}</span>
					<span class="right" v-if="selectedKey == item.key">
						<a @click="showModal('添加技术',item.key,'add')">添加技术</a>
					</span>
				</template>
				<template slot="customPhenChild" slot-scope="item">
					<span class="left">{{item.title}}</span>
					<span class="right" v-if="selectedKey == item.key">
						<a @click="showModal('编辑物候期',item.key,'edit', item.title)">编辑</a>
						<a-divider type="vertical" />
						<a v-if="!item.dataRef.first" @click="up(item.key)">上移</a>
						<a-divider v-if="!item.dataRef.first" type="vertical" />
						<a v-if="!item.dataRef.last" @click="down(item.key)">下移</a>
						<a-divider v-if="!item.dataRef.last" type="vertical" />
						<a class="danger" @click="remove(item.key)">删除</a>
					</span>
				</template>
				<template slot="customTechChild" slot-scope="item">
					<span class="left">{{item.title}}</span>
					<span class="right" v-if="selectedKey == item.key">
						<a @click="showModal('编辑技术',item.key,'edit', item.title)">编辑</a>
						<a-divider type="vertical" />
						<a v-if="!item.dataRef.first" @click="up(item.key)">上移</a>
						<a-divider v-if="!item.dataRef.first" type="vertical" />
						<a v-if="!item.dataRef.last" @click="down(item.key)">下移</a>
						<a-divider v-if="!item.dataRef.last" type="vertical" />
						<a class="danger" @click="remove(item.key)">删除</a>
					</span>
				</template>
			</a-tree>
		</div>
		<a-modal :title="title" centered :visible="addVisible" @ok="add" @cancel="addVisible = false">
			<a-input v-model="value" placeholder="请输入" />
		</a-modal>
		<a-modal :title="title" centered :visible="editVisible" @ok="edit" @cancel="editVisible = false">
			<a-input v-model="value" placeholder="请输入" />
		</a-modal>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				selectedKey: undefined,
				pos: undefined, //位置
				title: '',
				expandedKey: '0',
				expandedKeys: [],
				addVisible: false,
				editVisible: false,
				value: '',
				classifications: [{
						breed: "土豆",
						phenophase: ["休眠期", "发芽期", "幼苗期", "发棵期", "结薯期"],
						technology: ["选种", "切块催芽", "查苗补苗", "除草", "杀虫", "防病", "施肥"],
					},
					{
						breed: "湖羊",
						phenophase: ["羔羊期", "成熟期", "发情期", "配种期", "繁殖期", "出栏期"],
						technology: ["饲料加工", "日粮", "营养", "防病", "种畜繁育", "免疫"],
					},
					{
						breed: "白绒山羊",
						phenophase: ["羔羊期", "成熟期", "发情期", "配种期", "繁殖期", "出栏期"],
						technology: ["饲料加工", "日粮", "营养", "防病", "种畜繁育", "免疫"],
					},
				],
			}
		},
		computed: {
			treeData: function() {
				let tree = [{
					title: '品种',
					key: '0',
					scopedSlots: {
						title: 'customBreed'
					},
					children: []
				}];

				//遍历品种
				for (let i = 0; i < this.classifications.length; i++) {
					let clas = this.classifications[i]
					let treeNode = {
						title: clas.breed,
						key: `0-${i}`,
						first: i == 0,
						last: i == this.classifications.length - 1,
						scopedSlots: {
							title: 'customTreeBreed'
						},
						children: []
					}
					let phenTreeNode = {
						title: '物候期',
						key: `0-${i}-0`,
						scopedSlots: {
							title: 'customPhen'
						},
						children: []
					}
					let phenChildrenTreedNode = []
					let techChildrenTreeNode = []
					//遍历物候期
					for (let j = 0; j < clas.phenophase.length; j++) {
						phenChildrenTreedNode.push({
							title: clas.phenophase[j],
							first: j == 0,
							last: j == clas.phenophase.length - 1,
							index: j,
							key: `0-${i}-0-${j}`,
							scopedSlots: {
								title: 'customPhenChild'
							},
						})
					}
					//添加物候期到你节点中
					phenTreeNode.children = phenChildrenTreedNode
					let techTreeNode = {
						title: '技术',
						key: `0-${i}-1`,
						scopedSlots: {
							title: 'customTech'
						},
						children: []
					}
					//遍历技术
					for (let j = 0; j < clas.technology.length; j++) {
						techChildrenTreeNode.push({
							title: clas.technology[j],
							key: `0-${i}-1-${j}`,
							first: j == 0,
							last: j == clas.technology.length - 1,
							scopedSlots: {
								title: 'customTechChild'
							},
						})
					}
					//添加技术到节点中
					techTreeNode.children = techChildrenTreeNode
					treeNode.children.push(phenTreeNode)
					treeNode.children.push(techTreeNode)
					console.log(phenTreeNode)
					tree[0].children.push(treeNode)
				}
				return tree
			}
		},


		methods: {
			newSelectedKey(pos, bool) {
				const index = pos.lastIndexOf('-')
				let num = Number(pos.substr(index + 1))
				if (bool) {
					//上移		
					return pos.substr(0, index + 1) + (num - 1)
				} else {
					//下移动
					console.log(pos.substr(0, index + 1) + (num - 1))
					return pos.substr(0, index + 1) + (num + 1)
				}
			},

			showModal(title, pos, type, val) {
				this.title = title
				this.pos = pos
				this.value = val
				if (type == 'add') {
					this.addVisible = true
				} else {
					this.editVisible = true
				}
			},
			add() {
				if (this.value && this.value.trim().length > 0) {
					console.log(this.pos)
					const position = this.pos.split('-')
					if (position.length == 1) {
						this.classifications.push({
							breed: this.value,
							phenophase: [],
							technology: [],
						})
					} else if (position.length == 3) {
						let index = Number(position[1])
						console.log(index)
						if (position[2] == '0') {
							//添加物候期
							this.classifications[index].phenophase.push(this.value)
						} else {
							//添加技术
							this.classifications[index].technology.push(this.value)
						}
					}
				}
				this.addVisible = false
				let that = this
				setTimeout(function() {
					that.expandedKey = that.pos
					console.log(that.expandedKey)
					that.pos = undefined
					that.value = ''
					that.title = ''
				}, 100)
			},
			//删除
			remove(pos) {
				let that = this
				this.$confirm({
					destroyOnClose: true,
					title: "确认删除？",
					centered: true,
					okText: '确认',
					okType: 'danger',
					cancelText: '取消',
					onOk() {
						const position = pos.split('-')
						if (position.length == 2) {
							//删除品种
							const index = Number(position[1])
							that.classifications.splice(index, 1)
						} else if (position.length == 4) {
							const breedIndex = Number(position[1])
							const index = Number(position[3])
							if (position[2] == '0') {
								//删除物候期
								that.classifications[breedIndex].phenophase.splice(index, 1)
							} else {
								//删除技术
								that.classifications[breedIndex].technology.splice(index, 1)
							}
						}
					},
					onCancel() {},
				})
			},
			//上移
			up(pos) {
				const position = pos.split('-')
				if (position.length == 2) {
					//品种上移
					const index = Number(position[1])
					this.classifications[index] = this.classifications.splice(index - 1, 1, this.classifications[index])[0]
				} else if (position.length == 4) {
					const breedIndex = Number(position[1])
					const index = Number(position[3])
					if (position[2] == '0') {
						//物候期上移
						this.classifications[breedIndex].phenophase[index] = this.classifications[breedIndex].phenophase
							.splice(index - 1, 1, this.classifications[breedIndex].phenophase[index])[0]
					} else {
						//技术上移
						this.classifications[breedIndex].technology[index] = this.classifications[breedIndex].technology
							.splice(index - 1, 1, this.classifications[breedIndex].technology[index])[0]
					}
				}
				let that = this
				setTimeout(function() {
					that.selectedKey = that.newSelectedKey(pos, true)
					console.log(that.selectedKey)
				}, 10)
			},
			//下移
			down(pos) {
				const position = pos.split('-')
				if (position.length == 2) {
					//品种下移
					const index = Number(position[1])
					this.classifications[index + 1] = this.classifications.splice(index, 1, this.classifications[index +
						1])[0]
				} else if (position.length == 4) {
					const breedIndex = Number(position[1])
					const index = Number(position[3])
					if (position[2] == '0') {
						//物候期下移
						this.classifications[breedIndex].phenophase[index + 1] = this.classifications[breedIndex]
							.phenophase
							.splice(index, 1, this.classifications[breedIndex].phenophase[index + 1])[0]
					} else {
						//技术下移
						this.classifications[breedIndex].technology[index + 1] = this.classifications[breedIndex]
							.technology
							.splice(index, 1, this.classifications[breedIndex].technology[index + 1])[0]
					}
				}
				let that = this
				setTimeout(function() {
					that.selectedKey = that.newSelectedKey(pos, false)
					console.log(that.selectedKey)
				}, 10)
			},
			edit() {
				if (this.value && this.value.trim().length > 0) {
					const position = this.pos.split('-')
					if (position.length == 2) {
						const index = Number(position[1])
						this.classifications[index].breed = this.value
					} else if (position.length == 4) {
						const breedIndex = Number(position[1])
						const index = Number(position[3])
						if (position[2] == '0') {
							//编辑物候期
							this.classifications[breedIndex].phenophase.splice(index,1,this.value)
						} else {
							//编辑技术
							this.classifications[breedIndex].technology.splice(index,1,this.value)
						}
					}
				}
				this.editVisible = false
				this.pos = undefined
				this.value = ''
				this.title = ''
			},
			onSelected(val) {
				if (val.length > 0) {
					this.selectedKey = val[0]
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.content-box {
		height: 904px;
		overflow: scroll;

		/deep/.ant-tree-node-content-wrapper,
		.ant-tree-node-selected {
			padding-right: 8px;
			width: calc(100% - 16px) !important;
		}

		/deep/.ant-tree-title {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			.danger {
				color: red;
			}
		}
	}
</style>
