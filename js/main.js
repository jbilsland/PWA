window.onload = () => { //on page load look for service worker associated with the page
    'use strict';

    if('serviceWorker' in navigator) { //if find sw then register it
        navigator.serviceWorker.register('./sw.js');
    }
}