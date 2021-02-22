import { AppHome } from './app-home';
import { newSpecPage } from '@stencil/core/testing';

describe('app-home', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AppHome],
      html: '<app-home></app-home>',
    });
    expect(root.querySelector('ion-title').textContent).toEqual('Home');
  });

  it('has a button in the toolbar', async () => {
    const { root } = await newSpecPage({
      components: [AppHome],
      html: '<app-home></app-home>',
    });

    expect(root.querySelector('ion-toolbar ion-button')).not.toBeNull();
  });

  it('should have an array of timers', async () => {
    const { rootInstance } = await newSpecPage({
      components: [AppHome],
      html: '<app-home></app-home>',
    });

    expect(Array.isArray(rootInstance.timers)).toBeTruthy();
  });

  it('should have an addTimer() method that adds a new timer to the timers array', async () => {
    const { rootInstance } = await newSpecPage({
      components: [AppHome],
      html: '<app-home></app-home>'
    });

    const timerCountBefore = rootInstance.timers.length;

    rootInstance.addTimer();

    const timerCountAfter = rootInstance.timers.length;
    expect(timerCountAfter).toBe(timerCountBefore + 1)
  });

  it('should trigger the addTimer() method when the add button is clicked', async () => {

    const { root, rootInstance } = await newSpecPage({
      components: [AppHome],
      html: '<app-home></app-home>'
    });

    const addButton = root.querySelector('ion-toolbar ion-button')
    const timerSpy = jest.spyOn(rootInstance, 'addTimer');
    const clickEvent = new CustomEvent("click");

    addButton.dispatchEvent(clickEvent);

    expect(timerSpy).toHaveBeenCalled();

  });

  it('should render out an app-timer element equal to the number of elements in the timers array', async () => {
    const { root, rootInstance, waitForChanges } = await newSpecPage({
      components: [AppHome],
      html: '<app-home></app-home>'
    });

    rootInstance.timers = ['', '', ''];

    await waitForChanges();    
    const timerElements = root.querySelectorAll('app-timer');

    expect(timerElements.length).toBe(3);
  });

});
