<template>
  <div>
    <button class="button" role="button"><Icons class="icon" :name="title"/> </button>
  </div>
</template>

<script>
  import Icons from "./Template/Icons.vue"
export default {
  components:{
    Icons
  },
  name: "Button89",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

.button{
  background-color:transparent;
  /* border: 1px solid red; */
  border: none;
  width: 40px;
  height: 40px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 50%; */
  transform: scale(1);
  color: red;
}
.button:hover{
  transform: scale(1.1);
}
</style>