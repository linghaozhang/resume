import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Resume from './Resume/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Resume />, document.getElementById('root'));
registerServiceWorker();
