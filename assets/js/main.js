import { googleAnalyticsId } from '@params'; // eslint-disable-line import/no-unresolved
import './modules/tpl-dialog';
import './modules/tpl-home';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
  console.log('Google Analytics ID', googleAnalyticsId);
});
