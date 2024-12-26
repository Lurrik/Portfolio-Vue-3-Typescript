import { boot } from 'quasar/wrappers';
import { MotionPlugin } from '@vueuse/motion';

export default boot(({ app }) => {
  // Set motion plugin
  app.use(MotionPlugin);
});
