import {
  ConnectedOverlayPositionChange,
  ConnectionPositionPair
} from '@angular/cdk/overlay';

export type Placement =
  | 'top'
  | 'top-left'
  | 'top-left-corner'
  | 'top-right'
  | 'top-right-corner'
  | 'right'
  | 'right-top'
  | 'right-top-corner'
  | 'right-bottom'
  | 'right-bottom-corner'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-left-corner'
  | 'bottom-right'
  | 'bottom-right-corner'
  | 'left'
  | 'left-top'
  | 'left-top-corner'
  | 'left-bottom'
  | 'left-bottom-corner';

export const POSITION_MAP: {
  [key: string]: { position: ConnectionPositionPair; nubbin: Placement };
} = {
  top: {
    position: new ConnectionPositionPair(
      { originX: 'center', originY: 'top' },
      { overlayX: 'center', overlayY: 'bottom' }
    ),
    nubbin: 'bottom'
  },
  'top-left': {
    position: new ConnectionPositionPair(
      { originX: 'center', originY: 'top' },
      { overlayX: 'start', overlayY: 'bottom' }
    ),
    nubbin: 'bottom-left'
  },
  'top-left-corner': {
    position: new ConnectionPositionPair(
      { originX: 'center', originY: 'top' },
      { overlayX: 'start', overlayY: 'bottom' }
    ),
    nubbin: 'bottom-left-corner'
  },
  'top-right': {
    position: new ConnectionPositionPair(
      { originX: 'center', originY: 'top' },
      { overlayX: 'end', overlayY: 'bottom' }
    ),
    nubbin: 'bottom-right'
  },
  'top-right-corner': {
    position: new ConnectionPositionPair(
      { originX: 'center', originY: 'top' },
      { overlayX: 'end', overlayY: 'bottom' }
    ),
    nubbin: 'bottom-right-corner'
  },
  right: {
    position: new ConnectionPositionPair(
      { originX: 'end', originY: 'center' },
      { overlayX: 'start', overlayY: 'center' }
    ),
    nubbin: 'left'
  },
  'right-top': {
    position: new ConnectionPositionPair(
      { originX: 'end', originY: 'center' },
      { overlayX: 'start', overlayY: 'top' }
    ),
    nubbin: 'left-top'
  },
  'right-top-corner': {
    position: new ConnectionPositionPair(
      { originX: 'end', originY: 'center' },
      { overlayX: 'start', overlayY: 'top' }
    ),
    nubbin: 'left-top-corner'
  },
  'right-bottom': {
    position: new ConnectionPositionPair(
      { originX: 'end', originY: 'center' },
      { overlayX: 'start', overlayY: 'bottom' }
    ),
    nubbin: 'left-bottom'
  },
  'right-bottom-corner': {
    position: new ConnectionPositionPair(
      { originX: 'end', originY: 'center' },
      { overlayX: 'start', overlayY: 'bottom' }
    ),
    nubbin: 'left-bottom-corner'
  },
  bottom: {
    position: new ConnectionPositionPair(
      { originX: 'center', originY: 'bottom' },
      { overlayX: 'center', overlayY: 'top' }
    ),
    nubbin: 'top'
  },
  'bottom-left': {
    position: new ConnectionPositionPair(
      { originX: 'center', originY: 'bottom' },
      { overlayX: 'start', overlayY: 'top' }
    ),
    nubbin: 'top-left'
  },
  'bottom-left-corner': {
    position: new ConnectionPositionPair(
      { originX: 'center', originY: 'bottom' },
      { overlayX: 'start', overlayY: 'top' }
    ),
    nubbin: 'top-left-corner'
  },
  'bottom-right': {
    position: new ConnectionPositionPair(
      { originX: 'center', originY: 'bottom' },
      { overlayX: 'end', overlayY: 'top' }
    ),
    nubbin: 'top-right'
  },
  'bottom-right-corner': {
    position: new ConnectionPositionPair(
      { originX: 'center', originY: 'bottom' },
      { overlayX: 'end', overlayY: 'top' }
    ),
    nubbin: 'top-right-corner'
  },
  left: {
    position: new ConnectionPositionPair(
      { originX: 'start', originY: 'center' },
      { overlayX: 'end', overlayY: 'center' }
    ),
    nubbin: 'right'
  },
  'left-top': {
    position: new ConnectionPositionPair(
      { originX: 'start', originY: 'center' },
      { overlayX: 'end', overlayY: 'top' }
    ),
    nubbin: 'right-top'
  },
  'left-top-corner': {
    position: new ConnectionPositionPair(
      { originX: 'start', originY: 'center' },
      { overlayX: 'end', overlayY: 'top' }
    ),
    nubbin: 'right-top-corner'
  },
  'left-bottom': {
    position: new ConnectionPositionPair(
      { originX: 'start', originY: 'center' },
      { overlayX: 'end', overlayY: 'bottom' }
    ),
    nubbin: 'right-bottom'
  },
  'left-bottom-corner': {
    position: new ConnectionPositionPair(
      { originX: 'start', originY: 'center' },
      { overlayX: 'end', overlayY: 'bottom' }
    ),
    nubbin: 'right-bottom-corner'
  }
};

const DROPDOWN_POSITION_MAP = {
  'top-left': {
    position: new ConnectionPositionPair(
      { originX: 'start', originY: 'top' },
      { overlayX: 'start', overlayY: 'bottom' }
    )
  },
  'bottom-left': {
    position: new ConnectionPositionPair(
      { originX: 'start', originY: 'bottom' },
      { overlayX: 'start', overlayY: 'top' }
    )
  },
  'bottom-right': {
    position: new ConnectionPositionPair(
      { originX: 'end', originY: 'bottom' },
      { overlayX: 'end', overlayY: 'top' }
    )
  },
  'top-right': {
    position: new ConnectionPositionPair(
      { originX: 'end', originY: 'top' },
      { overlayX: 'end', overlayY: 'bottom' }
    )
  }
};

const DROPDOWN_POSITIONS_LEFT = ['bottom-left', 'top-left'];
const DROPDOWN_POSITIONS_RIGHT = ['bottom-right', 'top-right'];
export const DEFAULT_DROPDOWN_POSITIONS = {
  left: DROPDOWN_POSITIONS_LEFT.map(p => DROPDOWN_POSITION_MAP[p].position),
  right: DROPDOWN_POSITIONS_RIGHT.map(p => DROPDOWN_POSITION_MAP[p].position)
};

const TOOLTIP_POSITIONS = ['top', 'right', 'bottom', 'left'];
export const DEFAULT_TOOLTIP_POSITIONS = TOOLTIP_POSITIONS.map(
  (placement: Placement) => POSITION_MAP[placement].position
);
export const DEFAULT_POPOVER_POSITIONS = DEFAULT_TOOLTIP_POSITIONS;

export function getPlacementName(
  position: ConnectedOverlayPositionChange,
  initialPlacement: Placement
): string {
  const keyList = ['originX', 'originY', 'overlayX', 'overlayY'];
  for (const placement in POSITION_MAP) {
    if (
      keyList.every(
        key =>
          position.connectionPair[key] ===
          POSITION_MAP[placement]['position'][key]
      )
    ) {
      if (initialPlacement && initialPlacement === `${placement}-corner`) {
        return initialPlacement;
      }
      return placement;
    }
  }
}

export function getPlacementStyles(nubbin: Placement) {
  const [direction, align, corner] = nubbin.split('-');
  return {
    [direction]: '1rem',
    [align]: corner ? '-0.75rem' : align ? '-1.5rem' : false // space of nubbin from the edge
  };
}
