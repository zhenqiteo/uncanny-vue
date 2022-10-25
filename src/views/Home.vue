<template>
  <div class="home">
    <div class="header">
      <h2>UNCANNY</h2>
    </div>
    <footer id="site-footer">
      <div>
        <h4>Let's make impossible happen.</h4>
      </div>
      <ul class="footer-links">
        <li><a href="#">Legal</a></li>
        <li><a href="#">Privacy</a></li>
        <li><span>&copy; UNCANNY 2022</span></li>
      </ul>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import TextContainer from '@/components/TextContainer.vue'

export default {
  name: 'Home',
  components: {
    TextContainer
  }
}
</script>

<style scoped>
.home {
}

.header {
  display: flex;
  justify-content: center;
  height: 80vh;
  align-items: center;
  font-size: 10vw;
}

#site-footer {
  bottom: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

#site-footer li {
  display: inline-block;
  width: auto;
  padding: 10px;
}

.footer-links {
  list-style-type: none;
}


/*
.header {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-size: 10vw;
  border: 5px solid black;
}
*/

</style>