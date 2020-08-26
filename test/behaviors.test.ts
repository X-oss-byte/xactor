import * as behaviors from '../src/BehaviorImpl';
import { createSystem } from '../src';

describe('behaviors', () => {
  it('Behaviors.Same should result in same behavior', done => {
    const helloWorldBehavior = behaviors.createBehavior<{ whom: string }>(
      (_, message) => {
        if (behaviors.isSignal(message)) {
          return undefined;
        }

        console.log('Sup, ' + message.whom);

        return undefined;
      },
      undefined
    );

    const system = createSystem(helloWorldBehavior, 'Hello');

    system.send({ whom: 'David' });

    setTimeout(() => {
      done();
    }, 1000);
  });
});
