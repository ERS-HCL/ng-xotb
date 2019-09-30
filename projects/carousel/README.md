# Carousel

The Carousel is a slideshow for cycling through elements, often used as an image or item slider or to facilitate the onboarding experience of a user.

## Usages

#### module.ts
```javascript

...

import { XotbCarouselModule } from 'ng-xotb/navigators/carousel';

@NgModule({
    imports:[XotbCarouselModule]
    ...
})

...
```

#### component.html
```html
<div style="width: 480px; max-width: 100%">
    <xotb-carousel [(active)]="active">
        <xotb-carousel-image
        src="assets/images/carousel/carousel-01.jpg"
        header="First Card"
        description="First card description."
        alternativeText="First card accessible description."
        ></xotb-carousel-image>
    <xotb-carousel-image
        src="assets/images/carousel/carousel-02.jpg"
        header="Second Card"
        description="Second card description."
        alternativeText="Second card accessible description."
        ></xotb-carousel-image>
    <xotb-carousel-image
        src="assets/images/carousel/carousel-03.jpg"
        header="Third Card"
        ></xotb-carousel-image>
    </xotb-carousel>
</div>
```

#### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {}

...
```

## API
 
#### <xotb-carousel>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [active] | Index of active image | `number` | 0 |
| [autoScroll] | Whether auto scroll is enabled | `boolean` | true |
| [autoRefresh] | Whether the carousel should continue looping from the beginning after the last item is displayed | `boolean` | true |
| [scrollDuration] | The auto scroll duration in seconds. After that the next image is displayed | `number` | 5 |
| (activeChange) | Emits the index of the image to be activated | `EventEmitter<number>` |  |

#### <xotb-carousel-image>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [src] | The path to the image | `string` | |
| [header] | Text for the label that's displayed under the image | `string | TemplateRef` |  |
| [description] | Text displayed under the header | `string` | |
| [alternativeText] | Assistive text for the image | `string` | |
