import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `
  <div class="container">
  <h1 class="title">Thank you!</h1>
  <p class="content">
      your order is on the way!
  </p>
  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptatum, libero ut, atque earum nesciunt, ratione doloribus molestias deleniti aliquam minus sed explicabo rem odio alias ex ipsam! Esse, obcaecati?</span>
</div>`,
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent {
}
