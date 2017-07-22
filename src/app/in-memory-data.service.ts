import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const phones = [
      // Added Image and Descrption to the array
      { id: 1, image: './images/samsung-galaxy-s7-edge-.jpg', name: 'Samsung Galaxy S7 edge', desc: 'Pushed way out of its comfort zone and into a high-stakes flagship redesign last season, Samsung\'s back to what it does best -- making itself comfortable at the top of the line...'},
      { id: 2, image: './images/oneplus-3-.jpg', name: 'OnePlus 3', desc: 'A great act is tough to follow and sometimes delivering two great devices in a row requires that you take a completely different approach with the successor. Now on its third "flagship killer"...' },
      { id: 3, image: './images/htc-10-r.jpg', name: 'HTC 10', desc: 'The HTC 10 is everything an HTC fan has been longing for. A full smartphone package experience without compromise. The problem with this idea is that it doesn\'t exist, there will always be some...' },
      { id: 4, image: './images/samsung-galaxy-s8-.jpg', name: 'Samsung Galaxy S8', desc: 'When 5 inches is the de-facto standard for a compact Android handset, yet you want to prove that more is always better, what do you do? Well, it depends on the definition of more...' },
      { id: 5, image: './images/oneplus-3t-.jpg', name: 'OnePlus 3T', desc: 'OnePlus has always been one of those companies on the mobile scene, you just can\'t help but root for. At least to some degree, that is. A small company with big dreams, throwing around lofty titles, like "the flagship killer"...' },
      { id: 6, image: './images/sony-xperia-xz-premium-2017.jpg', name: 'Sony Xperia XZ Premium', desc: 'The Sony Xperia XZ Premium has a gorgeous 4K display. Better yet, a 4K HDR display! The latest Snapdragon 835 chipset is pulling the strings and delivering lightning-fast LTE... ' },
      { id: 7, image: './images/xiaomi-mix-.jpg', name: 'Xiaomi Mi Mix', desc: 'Xiaomi Mi Mix is one of those rare jewels on the market that needs no introductions. An all-ceramic smartphone with an edge-to-edge screen is a device that draws all the attention. It\'s a high-tech dream come...' },
      { id: 8, image: './images/apple-iphone-7-plus-r2.jpg', name: 'Apple iPhone 7 Plus', desc: 'The iPhone 7 Plus hardly needs an introduction. Apple\'s latest always get the attention no matter how much or how little the company has changed. An aura of controversy has always been part of...' },
      { id: 9, image: './images/lg-v20-ofic1.jpg', name: 'LG V20', desc: 'If the LG V20 was a superhero - and we\'re not convinced that it\'s not - its superpower would be to have two of everything (or more!). Two screens, two cameras, four DACs, two apps on the screen, the list goes on and on...' },
      { id: 10, image: './images/samsung-galaxy-s8-plus-.jpg', name: 'Samsung Galaxy S8+', desc: 'What was once an impossible fantasy - a sketch in someone\'s book, a render of an ambitious concept - is now a reality. These are just some thoughts that come to mind holding the Galaxy S8+, the big...' }
    ];
    return {phones};
  }
}
