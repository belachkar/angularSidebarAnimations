import { trigger, state, style, transition, animate } from '@angular/animations';

export const anime = {
  fade: trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter', [
      animate(1000)
    ]),
    transition(':leave', [
      animate(100, style({ transform: 'translateX(-20px)' })),
      animate(50, style({ transform: 'translateX(120px)' }))
    ])
  ]),
  eclipse: trigger('eclipse', [
    state('void', style({ transform: 'translateX(-30px)', opacity: 0 })),
    transition(':enter', [
      animate(100, style({ transform: 'translateX(20px)',  opacity: 1 })),
      animate(50)
    ]),
    transition(':leave', [
      animate(100, style({ backgroundColor: '#FFAAA8' })),
      animate(400, style({ backgroundColor: '#FF8888' })),
      animate(100, style({ transform: 'translateX(-20px)' })),
      animate(100, style({ transform: 'translateX(600px)', backgroundColor: '#FFAAA8' }))
    ])
  ])
};
