import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  bio = [
    'Namaste & Hello 🙏',
    'I\'m Kaushal Shah, a fellow New Jersey resident originally from India!',
    'I spearhead the Software Quality Assurance Automation & Strategies @ExecThread, an innovative startup from New York City.'
  ];

  sidehustle = [
    'I am a Tech-enthu, a writer, a poet who has a different perspective of looking at things around us. Alongside being an engineer, I run an interesting blog under the name ViewShare and with the help of this blog, I intend to share my passion with people near and far. I write about my work, the things I see and how I perceive them. Stop by and read at VIEWSHARE and I\'d love to hear back if there is any feedback!',
    'I write so that my words never fade away even if I do. I want my words to follow in the abyss of my existence and reveal the bits and pieces I have engraved within my soul and thoughts. These are not mere words but the chapters of my life I hold dear to myself.',
    'Our FEELINGS, EMOTIONS, and THOUGHTS work in unison although they do not all come from the same place...increased mind chatter is an alarm that something needs to be addressed within your being.'
  ]

  constructor() { }

  ngOnInit() {
  }

}
