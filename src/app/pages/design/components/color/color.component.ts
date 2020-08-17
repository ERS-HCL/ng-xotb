import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { COLOR_SYSTEM_LIST } from '../../constants/COLOR_SYSTEM_LIST';
import { COLOR_PHILOSOPHY_LIST } from '../../constants/COLOR_PHILOSOPHY_LIST';
import { DOMAIN_LIST } from '../../constants/DOMAIN_LIST';
import { COLOR_RATIO_CONFIG } from '../../constants/COLOR_RATIO_CONFIG';
import getContrastDetails from 'src/app/helpers/getContrastDetails';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ColorComponent implements OnInit {
  public colorSystemList: any = COLOR_SYSTEM_LIST['system_colors'];
  public colorPhilosophyList: any = COLOR_PHILOSOPHY_LIST;
  public domainList: any = DOMAIN_LIST;
  public fontColor: any = COLOR_RATIO_CONFIG.COLOR_CODE.BLACK
  public backgroundColor: any = COLOR_RATIO_CONFIG.COLOR_CODE.WHITE;
  public contrastValue: number = 0;
  public smallTextContrastDetails: any = {};
  public largeTextContrastDetails: any = {};
  constructor() {}

  calculateContrastValue() {
    this.smallTextContrastDetails = getContrastDetails(
      this.fontColor,
      this.backgroundColor,
      COLOR_RATIO_CONFIG.SIZE.SMALL
    );
    this.largeTextContrastDetails = getContrastDetails(
      this.fontColor,
      this.backgroundColor,
      COLOR_RATIO_CONFIG.SIZE.LARGE
    );

    console.log(
      'test: ',
      this.smallTextContrastDetails,
      'fff : ',
      this.largeTextContrastDetails
    );
  }

  largeTextContrastColor() {
    return this.largeTextContrastDetails.wcagResults.WCAG_AA
      ? COLOR_RATIO_CONFIG.COLOR_CODE.GREEN
      : COLOR_RATIO_CONFIG.COLOR_CODE.RED;
  }

  smallTextContrastColor() {
    return this.smallTextContrastDetails.wcagResults.WCAG_AA
      ? COLOR_RATIO_CONFIG.COLOR_CODE.GREEN
      : COLOR_RATIO_CONFIG.COLOR_CODE.RED;
  }

  resultContrast() {
    let reultCompliantText = '';
    
    reultCompliantText = this.smallTextContrastDetails.wcagResults.WCAG_AA ? 'Your combination is AA compliant.\n' : 'Your combination is not AA compliant.\n';
    
    reultCompliantText += this.largeTextContrastDetails.wcagResults.WCAG_AA ? 'Your combination is AAA compliant.\n' : 'Your combination is not AAA compliant.\n';

    return reultCompliantText;
  }

  ngOnInit(): void {
    console.log(this.colorSystemList);
    console.log(this.domainList, 'domainListdomainList');
    this.calculateContrastValue();
  }
  ngDoCheck(): void {
    this.calculateContrastValue();
  }
}
