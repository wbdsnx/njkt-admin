<template>
  <a-tree-select
    v-model="value"
    style="width: 256px"
    :dropdown-style="{ maxHeight: '200px', overflow: 'auto' }"
    placeholder="请选择分类"
    allow-clear
    tree-default-expand-all
  >
    <a-tree-select-node key="0-1" value="parent 1" title="parent 1">
      <a-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">
        <a-tree-select-node key="random" :selectable="false" value="leaf1" title="my leaf" />
        <a-tree-select-node key="random1" value="leaf2" title="your leaf" />
      </a-tree-select-node>
      <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">
        <a-tree-select-node key="random3" value="sss">
          <b slot="title" style="color: #08c">sss</b>
        </a-tree-select-node>
      </a-tree-select-node>
    </a-tree-select-node>
  </a-tree-select>
</template>

<script>
export default {
  data() {
    return {
      treeExpandedKeys: [],
      value: undefined,
    };
  },
};
</script>

<style lang="less">
</style>
