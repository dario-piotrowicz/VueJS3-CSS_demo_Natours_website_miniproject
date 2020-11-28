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
  position: relative;
}

.btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px #00000033;
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px #00000033;
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: transform 0.4s, opacity 0.4s;
}

.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.7);
  opacity: 0;
}

.btn-white {
  color: #777;
  background-color: #fff;
}

.btn-white::after {
  background-color: #fff;
}
</style>
