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
.icon{
}
/* CSS
.button-54 {
  font-family: "Open Sans", sans-serif;
  font-size: 13px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-54:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  .button-54 {
    padding: 0.25em 0.75em;
  }
} */
</style>