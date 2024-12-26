import { register } from 'register-service-worker';
import { Notify } from 'quasar';

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready(/* registration */) {
    // console.log('Service worker is active.')
  },

  registered(/* registration */) {
    // console.log('Service worker has been registered.')
  },

  cached(/* registration */) {
    // console.log('Content has been cached for offline use.')
  },

  updatefound(/* registration */) {
    // console.log('New content is downloading.')
    // Notify.setDefaults({
    //   type: 'info',
    //   position: 'top',
    //   timeout: 15000,
    // });
  },

  updated(/* registration */) {
    Notify.setDefaults({
      message: 'Nouvelle version disponible. Veuillez rafraichir la page',
      position: 'top',
      color: 'primary',
      actions: [
        {
          label: 'Rafraichir',
          color: 'white',
          handler: () => {
            // @ts-ignore
            window.location.reload(true);
          },
        },
        {
          label: 'Annuler',
          color: 'white',
          handler: () => {
            /* ... */
          },
        },
      ],
    });
    Notify.create('Nouvelle version disponible. Veuillez rafraichir la page');
  },

  offline() {
    // console.log('No internet connection found. App is running in offline mode.')
  },

  error(/* err */) {
    // console.error('Error during service worker registration:', err)
  },
});
