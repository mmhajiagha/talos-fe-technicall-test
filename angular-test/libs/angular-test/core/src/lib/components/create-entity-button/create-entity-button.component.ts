import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'talos-create-entity-button',
  templateUrl: './create-entity-button.component.html',
  styleUrls: ['./create-entity-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateEntityButtonComponent {
  @Input() buttonText: string;
  @Input() url: string;
  isIconButton = true;
}
