<template>
  <a :href="href" class="btn btn-white"><slot></slot></a>
</template>

<script>
export default {
  props: {
    href: String,
  },
};
</script>

<style scoped>
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: transform 0.1s, box-shadow 0.1s;
}

.btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px #00000033;
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px #00000033;
}

.btn-white {
  color: #777;
  background-color: #fff;
}
</style>
