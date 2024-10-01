<template>
  <div>
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
    <!-- Contenu principal -->
    <div id="main" class="alt">
      <section id="one">
        <div class="inner">

            <h1>Générique</h1>
          <!-- <span class="image main"><img src="images/pic11.jpg" alt="" /></span> -->
          <p>
            Je m'appelle Sabjon Mali. Je suis passionné par le développement web,
            un domaine qui me fascine et que je découvre chaque jour davantage. Mon
            expérience en tant que vendeur m’a permis de développer des compétences
            en communication, ce qui est essentiel pour comprendre et répondre aux
            besoins des clients. Cela m’a également appris à travailler sous
            pression et à m’adapter rapidement à diverses situations. Je suis
            actuellement à la recherche d'opportunités pour mettre en pratique mes
            compétences en HTML, CSS et JavaScript. Mon objectif est de créer des
            sites web qui ne sont pas seulement fonctionnels, mais aussi esthétiquement
            plaisants. J'apprends de manière autonome et je consacre beaucoup de temps
            à travailler sur des projets personnels, ce qui me permet d'améliorer
            constamment mes compétences techniques et ma créativité.
          </p>
            <h1 class="major">Services proposés</h1>
          <!-- <span class="image main"><img src="images/pic11.jpg" alt="" /></span> -->
          <p>
            Nous offrons différents services de création de site web adaptés à vos besoins. Le Pack Starter, à partir de 500€, est parfait pour les petites entreprises ou les indépendants souhaitant une présence en ligne simple. Ce pack inclut la création d’un site vitrine de 3 à 5 pages (Accueil, À propos, Services, Contact), avec un design responsive, optimisé pour les appareils mobiles. Il comprend également l’intégration d’un formulaire de contact pour faciliter la communication avec vos clients. Nos solutions sont pensées pour être accessibles et efficaces, avec un design moderne et fonctionnel.
          </p>
          <h1>Processus de création</h1>
          <p>
            Le processus de création de votre site web commence par une analyse approfondie de vos besoins, où nous discutons de vos objectifs, de votre public cible et des fonctionnalités souhaitées. Ensuite, nous passons à la phase de conception, en vous proposant des maquettes visuelles pour valider l’apparence du site. Une fois approuvées, nous procédons au développement technique, où le site est codé en respectant les dernières normes web et optimisé pour une navigation fluide. Après cela, nous effectuons des tests rigoureux pour garantir que tout fonctionne parfaitement sur différents appareils. Enfin, nous lançons le site en ligne et vous offrons une formation pour que vous puissiez le gérer facilement, tout en assurant la maintenance et le support si nécessaire.
          </p>
        </div>
      </section>
    </div>

    <section id="contact">
      <h1>demande de devis </h1>
      <div class="inner">
        <section>
          <form @submit.prevent="handleSubmit" id="contactForm" method="post">
            <div class="fields">
              <div class="field half">
                <label for="name">Name</label>
                <input type="text" v-model="name" id="name" required />
              </div>
              <div class="field half">
                <label for="email">Email</label>
                <input type="email" v-model="email" id="email" required />
              </div>
              <div class="field">
                <label for="message">Message</label>
                <textarea v-model="message" id="message" rows="6" required @input="checkMessage"></textarea>
              </div>
            </div>
            <p id="messageInfo" :style="{ color: messageInfo.color }">{{ messageInfo.text }}</p>
            <ul class="actions">
              <li><input type="submit" value="Send Message" class="primary" :disabled="!isMessageValid" /></li>
              <li><input type="reset" value="Supprimer" /></li>
            </ul>
          </form>
        </section>
        <section class="split">
          <section>
            <div class="contact-method">
              <h3>Email</h3>
              <a href="mailto:information@untitled.tld">information@untitled.tld</a>
            </div>
          </section>
          <section>
            <div class="contact-method">
              <h3>Phone</h3>
              <a href="tel:+330673737454">0673737454</a>
            </div>
          </section>
          <section>
            <div class="contact-method">
                        <h3>Adresse</h3>
                        <address>123 rue bauver
                        Lyon, 69006<br />
                        </address>
            </div>
          </section>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Presentation',
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
      if (this.message.length < 5) {
        alert("Votre message est trop court. Il doit contenir au moins 5 caractères.");
      } else {
        alert("Message envoyé avec succès !");
        // Réinitialiser les champs après l'envoi
        this.name = '';
        this.email = '';
        this.message = '';
        this.checkMessage(); // Réinitialiser le messageInfo
      }
    },
  },
};
</script>

<style scoped>
  @import './style.css'; /* Importer le style.css */
</style>
