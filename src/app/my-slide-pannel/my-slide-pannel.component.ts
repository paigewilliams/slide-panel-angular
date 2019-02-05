import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-my-slide-pannel',
  templateUrl: './my-slide-pannel.component.html',
  styleUrls: ['./my-slide-pannel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-10%)'})),
      transition('* => *', animate(400))
    ])
  ]
})
export class MySlidePannelComponent {
  @Input() activePane: PaneType = 'left';
  
}

type PaneType = 'left' | 'right';