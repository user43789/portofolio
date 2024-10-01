<template>
  <!-- Section principale -->
  <div class="imggeheader">
      <a href="/">
        <img src="./Bleu.png" alt="Logo de l'artiste" class="photoheader" />
      </a>
      <nav>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/presentation">Présentation</router-link></li>
          <li><router-link to="/cv">CV</router-link></li>
        </ul>
      </nav>
    </div>
  <div id="main">
    <!-- Première section -->
    <section id="one" class="tiles">
      <article>
        <span class="image">
          <img src="/src/components/images/pic01.jpg" alt="CV" />
        </span>
        <header class="major">
          <RouterLink to="/CV"><h3><a href="elements.html" class="link">CV</a></h3></RouterLink>
          <p>Télécharger</p>
        </header>
      </article>
      <article>
        <span class="image">
          <img src="/src/components/images/pic02.jpg" alt="Compétences" />
        </span>
        <header class="major">
          <RouterLink to="/CV"><h3><a href="elements.html" class="link">Compétences</a></h3></RouterLink>
          <p>HTML, CSS, JavaScript, Vue.js, etc...</p>
        </header>
      </article>
      <article>
        <span class="image">
          <img src="/src/components/images/pic03.jpg" alt="Formation" />
        </span>
        <header class="major">
          <RouterLink to="/CV"><h3><a href="landing.html" class="link">Formation</a></h3></RouterLink>
          <p>Bienvenue sur mon blog ! Ici, je partage mes réflexions sur le développement web...</p>
        </header>
      </article>
      <article>
        <span class="image">
          <img src="/src/components/images/pic04.jpg" alt="Services" />
        </span>
        <header class="major">
          <RouterLink to="/Presentation"><h3><a href="landing.html" class="link">Services proposés</a></h3></RouterLink>
          <p>Je propose une gamme de services pour répondre à vos besoins en développement web.</p>
        </header>
      </article>
      <article>
        <span class="image">
          <img src="/src/components/images/pic05.jpg" alt="Contact rapide" />
        </span>
        <header class="major">
          <h3><a href="elements.html" class="link">Contact rapide</a></h3>
          <p>Envoyez-moi un email</p>
        </header>
      </article>
      <article>
        <span class="image">
          <img src="/src/components/images/pic06.jpg" alt="Centres d'intérêt" />
        </span>
        <header class="major">
          <h3><a href="landing.html" class="link">Centres d'intérêt</a></h3>
          <p>Pour découvrir mes passions en dehors du développement web, cliquez ici.</p>
        </header>
      </article>
    </section>

    <!-- Deuxième section -->
    <section id="two">
      <div class="inner">
        <header class="major">
          <h2>Présentation de Sabjon</h2>
        </header>
        <p>Bonjour ! Je m'appelle Sabjon. Passionné d'informatique depuis toujours, j'ai acquis des compétences en HTML, CSS, JavaScript et Vue.js. Actuellement, je travaille sur une page en Vue.js où je partage mes idées de business. J'aime explorer de nouvelles technologies et je suis toujours en quête de projets intéressants à réaliser. N'hésitez pas à me contacter si vous souhaitez échanger ou collaborer !</p>
        <ul class="actions">
          <li><a href="landing.html" class="button next">Démarrer</a></li>
        </ul>
      </div>
    </section>
  </div>

  <!-- Section contact -->
  <section id="contact">
    <div class="inner">
      <section>
        <form id="contactForm" method="post" action="#" @submit.prevent="handleSubmit">
          <div class="fields">
            <div class="field half">
              <label for="name">Nom</label>
              <input type="text" v-model="name" id="name" required />
            </div>
            <div class="field half">
              <label for="email">Email</label>
              <input type="email" v-model="email" id="email" required />
            </div>
            <div class="field">
              <label for="message">Message</label>
              <textarea 
                v-model="message" 
                id="message" 
                rows="6" 
                @input="checkMessage" 
                required>
              </textarea>
            </div>
          </div>
          <p :style="{ color: messageInfo.color }">{{ messageInfo.text }}</p> <!-- Affichage dynamique du message d'information -->
          <ul class="actions">
            <li><input type="submit" value="Envoyer le message" class="primary" /></li>
            <li><input type="reset" value="Effacer" /></li>
          </ul>
        </form>
      </section>
      <section class="split">
        <section>
          <div class="contact-method">
            <span></span>
            <h3>INFO</h3>
            <p><strong>Prenom: </strong>Sabjon</p>
            <p><strong>Nom: </strong>mali</p>
          </div>
        </section>
        <section>
          <div class="contact-method">
            <h3>Téléphone</h3>
            <span>(000) 000-0000 x12387</span>
          </div>
        </section>
        <section>
          <div class="contact-method">
            <h3>Adresse</h3>
            <span>123 rue bauver<br />Lyon, 69006<br /></span>
          </div>
        </section>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Accueil', // Modifié pour correspondre au nom du composant
  data() {
    return {
      name: '',
      email: '',
      message: '',
      messageInfo: { text: '', color: 'red' },
      isMessageValid: false,
    };
  },
  methods: {
    checkMessage() {
      if (this.message.length < 5) {
        this.messageInfo.text = 'Le message doit contenir au moins 5 caractères.';
        this.messageInfo.color = 'red';
        this.isMessageValid = false;
      } else {
        this.messageInfo.text = 'Votre message est valide.';
        this.messageInfo.color = 'green';
        this.isMessageValid = true;
      }
    },
    handleSubmit() {
      this.checkMessage(); // Vérifier la validité du message avant de soumettre
      if (!this.isMessageValid) {
        alert("Votre message est trop court. Il doit contenir au moins 5 caractères.");
      } else {
        alert("Message envoyé avec succès !");
        // Réinitialiser les champs après l'envoi
        this.name = '';
        this.email = '';
        this.message = '';
        this.messageInfo.text = ''; // Réinitialiser le messageInfo
        this.messageInfo.color = 'red'; // Réinitialiser la couleur
      }
    },
  },
};
</script>

<style>
@import './style.css'; /* Importer le style.css */
</style>
