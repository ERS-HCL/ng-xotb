import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

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
  public showVideoSection: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.xotbHelpTexts = [
      {
        title: "It's Robust",
        icon: 'robust',
        titleColor: 'pink',
        description:
          "XOTB's components are built on Anuglar platform. Each component is thoroughly tested reducing time required on quality assurance. They are robust yet flexible.",
      },
      {
        title: "It's Efficient!",
        icon: 'efficient',
        titleColor: 'orange',
        description:
          'XOTB has ready to use components for both designers and developers.Thereby, improving speed, efficiency and promoting common design language and collaboration.',
      },
      {
        title: "It's Accessible",
        icon: 'accessible',
        titleColor: 'blue',
        description:
          'XOTB is built on responsive design components providing seamless experience. All components are fully accessible and in compliance with WCG AA guidelines.',
      },
      {
        title: "It's Adaptive",
        icon: 'adaptive',
        titleColor: 'green',
        description:
          'XOTB is a design system customizer. It customizes the entire design system uniquely to adapt your brand colors, design, style and tone.',
      },
    ];

    this.xotbFeatures = [
      {
        title: 'UX Guidelines',
        image: '../../../assets/ux_guidelines.svg',
        content:
          'Reference our UX guidelines that stem from ongoing research and exploration to design cohesive experiences.',
      },
      {
        title: 'Design Libraries',
        image: '../../../assets/design_library.svg',
        content:
          'Utilise our ready-to-use Adobe XD components to kick-start your design process.',
      },
      {
        title: 'Angular Components',
        image: '../../../assets/component_library.svg',
        content:
          'Leverage our robust, responsive & most importantly customized Angular components that adhere to your branding.',
      },
      {
        title: 'Accessibility Compliant',
        image: '../../../assets/accessablity.svg',
        content:
          'Our components are fully accessible and comply the WCAG2.0 AA standards.',
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

  navigateToComponents() {
    this.router.navigateByUrl('/components');
  }

  showWatchVideoSection() {
    this.showVideoSection = true;
  }
}
