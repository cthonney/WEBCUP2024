import { Controller } from "@hotwired/stimulus";

export default class ParticlesController extends Controller {
  connect() {



    // Variante 2: Accès à la fonction load
    tsParticles.load(this.element, {
      fpsLimit: 60,
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        // ... d'autres options de configuration
      }
    });
  }
}
