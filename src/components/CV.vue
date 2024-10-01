<template>
  <div class="imggeheader">
      <a href="/">
        <img src="./Bleu.png" alt="Logo de l'artiste" class="photoheader" />
      </a>
      <nav>
        <ul>
          <li><RouterLink to="/NotFound">Accueil</RouterLink></li>
          <li><router-link to="/presentation">Présentation</router-link></li>
          <li><RouterLink to="/NotFound">Accueil</RouterLink></li>
        </ul>
      </nav>
      
    </div>
  <div id="wrapper">
    <!-- Principal -->
    <div id="main" class="alt">
      <!-- premier -->
      <div class="inner">
        <header class="major">
          <h1>Curriculum Vitae</h1>
        </header>
        <!-- Contenu -->
        <h2 id="content">Profil</h2>
        <p>
          Passionné par l'informatique et le développement web, je possède des compétences solides en HTML, CSS, JavaScript et Vue.js. Avec une approche axée sur l'utilisateur, je m'efforce de créer des expériences web interactives et intuitives. Mon parcours m'a permis d'acquérir une bonne maîtrise des technologies front-end, et je suis constamment à la recherche de nouvelles opportunités pour améliorer mes compétences et contribuer à des projets innovants. En tant que développeur, je valorise le travail d'équipe et la collaboration pour atteindre des objectifs communs.
        </p>
        <div class="row">
          <blockquote style="font-style: italic; font-size: 18px; line-height: 1.6; border-left: 6px solid #2ecc71; padding-left: 20px; color: #ffffff;">
            "La véritable mesure de la créativité ne réside pas dans la complexité des idées, mais dans la capacité à transformer une idée simple en quelque chose de grand. C'est dans cette simplicité que réside la beauté de la création. Quand on parvient à éliminer le superflu et à se concentrer sur l'essence, on touche à quelque chose de plus profond, quelque chose d'intemporel. Que ce soit dans la technologie, l'art ou la vie, les solutions les plus élégantes sont souvent celles qui semblent les plus évidentes une fois découvertes."
            <br /><span style="font-size: 14px; color: #777;">- Sajon Mali</span>
          </blockquote>

          <div>
            <h3>Formation</h3>
            <p>
              J'ai terminé ma formation générale au Collège Vendôme de 2019 à 2022. Par la suite, j'ai obtenu un CAP Équipier Polyvalent du Commerce au Lycée Jacques Brel, formation que j'ai suivie de 2022 à 2024. Actuellement, je suis en cours de formation au CEF pour devenir développeur web, un parcours qui devrait durer trois ans. Je me forme activement en HTML, CSS et JavaScript et les bases de Vue.js.
            </p>
          </div>
          <div class="col-4 col-12-medium">
            <h3>Expériences Professionnelles</h3>
            <p>
              Concernant mes expériences professionnelles, j'ai effectué un stage en entreprise d'une semaine en juin 2021, où j'ai découvert le monde du travail et l'organisation d'une entreprise. Ensuite, j'ai réalisé un autre stage de trois semaines en juillet 2022, où j'ai appris les bases du travail en équipe et de la gestion. En 2024, j'ai encore une autre expérience professionnelle d'un mois, durant laquelle j'ai approfondi mes connaissances en développement web.
            </p>
          </div>
          <div class="col-4 col-12-medium">
            <h3>Compétences</h3>
            <p>
              En termes de compétences, je possède de bonnes connaissances en HTML, CSS et JavaScript, ce qui me permet de créer des sites web. Mon expérience en vente m’a aussi appris à mieux comprendre les besoins des clients. J'ai la capacité d'apprendre rapidement de nouvelles technologies et je suis créatif et attentif aux détails. J'ai déjà géré plusieurs projets personnels en développement web.
            </p>
          </div>
          <div class="col-4 col-12-medium">
            <h3>Centres d’Intérêt</h3>
            <p>
              En ce qui concerne mes centres d'intérêt, je suis passionné par plusieurs activités qui enrichissent ma vie. Le football est l'un de mes sports préférés ; j'apprécie non seulement de jouer, mais aussi de suivre les compétitions et d'analyser les stratégies des équipes. Le vélo, quant à lui, me permet de rester actif et de découvrir de nouveaux endroits tout en profitant de la nature. Je pratique également la natation, qui est pour moi un excellent moyen de me détendre et de garder la forme.
            </p>
          </div>
          
          <button @click="downloadCV">Télécharger CV &nbsp;&nbsp;</button>
        </div>

        <hr class="major" />
        <section id="contact"></section>
        <div class="inner">
          <section>
            <form id="contactForm" @submit.prevent="handleSubmit">
              <div class="fields">
                <div class="field half">
                  <label for="name">Nom</label>
                  <input type="text" v-model="name" required />
                </div>
                <div class="field half">
                  <label for="email">Email</label>
                  <input type="email" v-model="email" required />
                </div>
                <div class="field">
                  <label for="message">Message</label>
                  <textarea v-model="message" @input="checkMessage" rows="4" required></textarea>
                  <p :style="{ color: messageInfo.color }">{{ messageInfo.text }}</p>
                </div>
              </div>
              <ul class="actions">
                <li><button type="submit">Envoyer</button></li>
              </ul>
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cvImage from '@/components/pdf/CV.pdf'; // Assurez-vous que le chemin est correct

export default {
  name: 'CV',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      messageInfo: { text: '', color: 'red' },
      isMessageValid: false,
      cvImage, // Ajoute le fichier PDF à la propriété data
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
    downloadCV() {
      const link = document.createElement('a');
      link.href = this.cvImage; // Lien vers le fichier PDF
      link.download = 'mon-cv.pdf'; // Nom du fichier à télécharger
      link.click(); // Simule un clic pour télécharger
    },
  },
};
</script>

<style scoped>
@import './style.css'; /* Importer le style.css */
</style>
