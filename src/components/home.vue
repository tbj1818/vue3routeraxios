<template>
  <div class="hello">
    <h1 @click="modal1 = true">你好啊</h1>
    <Modal v-model="modal1" title="Common Modal dialog box title" @on-ok="ok" @on-cancel="cancel">
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
   
    <Dropdown>
      <a href="javascript:void(0)">
        下拉菜单
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem>冰糖葫芦</DropdownItem>
        <DropdownItem divided>北京烤鸭</DropdownItem>
      </DropdownMenu>
    </Dropdown>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {
        theme1: 'light',
        modal1: false
      }
    },
    methods: {
      ok() {
        this.$Message.info('Clicked ok');
      },
      cancel() {
        this.$Message.info('Clicked cancel');
      }
    },
    mounted() {
      var that=this;
       this.$http({
                    method: "post",
                    url: "http://192.168.192.121:10080/appLogin/bandingInviteCode",
                    data: {
                        token: 'dfhsdjkhfhoio23213231',
                        goodsId:'34324324',
                        platform: 'H5'
                    },
                    emulateJSON: true
                }).then(function (data) {
                    that.dialogshow2=false;
                    that.$toast.text(data.data.message);
                    window.history.go(-1);
                    // window.location.reload();
                }, function (error) {
                    that.$toast.text('接口出错');
                })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>