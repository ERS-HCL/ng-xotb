import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardPageComponent implements OnInit {
  public xotbHelpTexts: any;
  public xotbFeatures: any;
  public userReviews: any;
  constructor() {}

  ngOnInit(): void {
    this.xotbHelpTexts = [
      {
        title: "It's Robust",
        titleColor: 'pink',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea',
      },
      {
        title: "It's Efficient!",
        titleColor: 'orange',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea',
      },
      {
        title: "It's Accessible",
        titleColor: 'blue',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea',
      },
      {
        title: "It's Adaptive",
        titleColor: 'green',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea',
      },
    ];

    this.xotbFeatures = [
      {
        title: 'Design Libraries',
        image: '../../../assets/design_library.png',
        content:
          'Utilise our ready-to-use Adobe XD components to kick-start your designs process.',
      },
      {
        title: 'Angular Components',
        image: '../../../assets/component_library.png',
        content:
          'Leverage our robust, responsive & most importantly customized Angular components that adhere to your branding.',
      },
      {
        title: 'Accessibility Compliant',
        image: '../../../assets/accessablity.png',
        content:
          'Our components are fully accessible and comply the WCAG2.0 AA standards.',
      },
      {
        title: 'UX Guidlines',
        image: '../../../assets/ux_guidelines.png',
        content:
          'Reference our UX guidelines that stem from ongoing research and exploration to design cohesive experiences.',
      },
    ];

    this.userReviews = [
      {
        name: 'Emily Peterson',
        designation: 'CEO',
        review:
          'With xOTB extensive UI libraries (Adobe XD, Figma or Sketch) I can now quickly convert my sketches to detailed wireframes in no time allowing providing more time to solve issues over designing interfaces',
      },
      {
        name: 'Adrian Jacobs',
        designation: 'Head od Sales',
        review:
          'Angular JS components are very robust and well tested. They even coply to WCG AA accessability requirement. This is so cool just like playing lego blocks with components',
      },
      {
        name: 'Julian Hey',
        designation: 'developer',
        review:
          'xOTB helped us launch our web app quickly as out time to market was very critical. It helped us provide great user experiance even with a small design and development teams in a record time',
      },
    ];
  }
}
