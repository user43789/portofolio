// MonPlugin.js
const MonPlugin = {
    install(app, options) {
      // Ajoutez une méthode globale
      app.config.globalProperties.$maMethode = () => {
        console.log('Méthode du plugin appelée !');
      };
  
      // Vous pouvez également ajouter d'autres fonctionnalités ici
      app.config.globalProperties.$message = options?.message || 'Bonjour depuis le plugin!';
    }
  };
  
  export default MonPlugin;
  