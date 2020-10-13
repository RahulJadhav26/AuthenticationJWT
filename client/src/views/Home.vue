<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-4">Authentication with JWT</h1>
      <p class="lead">This is a simple authenticatiom application,Developed using Nodejs and MongoDB as it's backend and Vuejs for FrontEnd Framework.</p>
      <hr class="my-4">
      <p>It uses JWT,an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object</p>
      <a class="btn btn-primary btn-lg" href="https://jwt.io/" role="button">Learn more</a>
    </div>
    <div class="card m-5 p-4 shadow rounded-lg" id="MongoDB">
      <h3>MongoDB</h3>
      <div class="card-body">
        MongoDB is a document database, which means it stores data in JSON-like documents. We believe this is the most natural way to think about data, and is much more expressive and powerful than the traditional row/column model.
      </div>
      <a  class="card-link" href='https://www.mongodb.com/'>Learn More</a>
    </div>
    <div class="card m-5 p-4 shadow rounded-lg" id="Express">
      <h3>Express</h3>
      <div class="card-body">
        Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications
      </div>
      <a  class="card-link" href='https://expressjs.com' value="Learn More">Learn More</a>
    </div>
    <div class="card m-5 p-4 shadow rounded-lg" id="Vuejs">
      <h3>Vuejs</h3>
      <div class="card-body">
        Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries
      </div>
      <a class="card-link" href='https://vuejs.org/' value="Learn More">Learn More</a>
    </div>
    <div class="card m-5 p-4 shadow rounded-lg" id="Nodejs">
      <h3>Nodejs</h3>
      <div class="card-body">
        Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine
      </div>
      <a class="card-link" href='https://nodejs.org/en/' value="Learn More">Learn More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>
