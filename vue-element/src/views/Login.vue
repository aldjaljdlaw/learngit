<template>
  <div>
  <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="login-box">
    <h3 class="login-title">欢迎登录</h3>
    <el-form-item label="用户名" prop="name">
      <el-input v-model="form.name" type="text" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(form)">登录</el-button>
      <el-button>取消</el-button>
    </el-form-item>

  </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form: {
        name: '',
        password: '',
      },
      rules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //存取了状态
            sessionStorage.setItem('islogin','true');
            //存储用户属性对象
            this.$store.dispatch("asyncUpdateUser",{name:this.form.name});
            this.$router.push("/Main")
          } else {
            this.$message({
              message: '用户名或密码错误',
              type: 'warning'
            });
            return false;
          }
        });
      }
}}
</script>
//scoped 此样式只在当前组件生效
<style  scoped>
  .login-box{
    width: 350px;
    margin: 150px auto;
    border: #DCDFE6 solid 1px;
    padding: 20px;
    padding-right: 51px;
    padding-top: 45px;
    box-shadow: 0 0 30px #DCDFE6;
  }
  .login-title{
    text-align: center;
  }
</style>
