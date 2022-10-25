<template>
  <div class="about">
    <section class="headline">
      <TextContainer><h3>Unexpected. Unusual. Unconventional.</h3></TextContainer>
      <TextContainer>
      <p> We are inherently curious about all things impossible.
          And endlessly fascinated by the myriad possibilities for said impossibilities.
          We are an asymmetrical marriage between creativity and production.
      </p>
      <p> We are Uncanny. </p>
      </TextContainer>
    </section>
    <hr>
    <section class="clients about-section">
      <div class="section-title">
        <h4>Selected clients</h4>
      </div>
      <div class="section-body">
        <ul>
          <li>AGI, ZURICH</li>
          <li>AIRCORD, TOKYO</li>
          <li>AIR STUDIOS, LONDON</li>
          <li>ANYONE, STOCKHOLM</li>
          <li>APPLE, CUPERTINO</li>
          <li>BBC, LONDON</li>
          <li>BIBER ARCHITECTS, NEW YORK</li>
          <li>BRITISH COUNCIL, LONDON</li>
          <li>CENTRAL SAINT MARTINS UAL, LONDON</li>
          <li>CHANNEL 4, LONDON</li>
          <li>CHRISTIE'S, LONDON, NEW YORK, BEIJING</li>
          <li>D&amp;AD, LONDON</li>
          <li>DAN PEARSON STUDIO, LONDON</li>
        </ul>
        </div>
    </section>
    <hr>
    <section class="jobs about-section">
      <div class="section-title">
        <h4>Jobs</h4>
      </div>
      <div class="section-body">
      <p> 
        We are always looking for outstanding creative individuals to join the UNCANNY team. If you are interested
        in an internship or in working with us then please send an email to join@thisisuncanny.com with your CV and a portfolio PDF or URL.
      </p>
      <p>
        We are an equal opportunities employer and encourage applications from candidates that are under-represented in the creative industries. Please note that we may not be able to reply to every candidate owing to the number of applications we receive.
      </p>
      </div>
    </section>
    
  </div>
</template>

<script>
import TextContainer from '@/components/TextContainer.vue'

export default {
  name: 'About',
  components: {
    TextContainer
  }
}
</script>

<style lang="scss" scoped>
hr {
  margin-top: 50px;
  margin-bottom: 50px;
}
.about {
  margin: auto;
  max-width: 60vw;
  text-align: left;
}
.headline {
  font-size: 1.5em;
  h3 {
    padding-top: 50px;
    padding-bottom: 30px;
    text-align: center;
  }
}

.section-title {
  width: 25%;
}

.section-body {
  width: 75%;
}

.clients {
  display: flex;
  .section-body ul {
    list-style-type: none;
  }
}

.jobs {
  display: flex;
}


</style>
