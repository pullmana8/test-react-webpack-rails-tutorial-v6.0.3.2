import ReactOnRails from 'react-on-rails';
import 'bootstrap-loader';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';

import App from '../bundles/comments/startup/App';
import NavigationBarApp from '../bundles/comments/startup/NavigationBarApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  App,
  HelloWorld,
  NavigationBarApp
});
